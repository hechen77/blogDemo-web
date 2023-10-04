import axios from "axios";
import {localStorage} from "@/utils/storage";
import {Loading, Message, MessageBox} from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {userTokenName,userInfoName} from "@/utils/config";

NProgress.configure({
    showSpinner: false
})

const request = axios.create({
    baseURL: `/`,
    timeout: 10000,
})
var loadingInstance;
request.interceptors.request.use(config => {
    if (localStorage.get(userTokenName)) {
        config.headers[userTokenName] = localStorage.get(userTokenName);
    }
    NProgress.start();
    loadingInstance = Loading.service({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)',
        customClass: 'loading-class'
    })
    return config;
})

request.interceptors.response.use(response => {
    const res = response.data;
    if (res.code === 808) {
        MessageBox.confirm(res.message, "提示信息", {
            confirmButtonText: "重新登陆",
            cancelButtonText: "取消",
            type: "warning",

        }).then(() => {
            localStorage.remove(userTokenName)
            localStorage.remove(userInfoName)
            location.href = location.href + "login";
        });
        return;
    }
    if (res.success !== true) {
        Message({
            message: response.config.method + ":" + response.config.baseURL + response.config.url + "  " + res.message,
            type: "error"
        })
    }
    NProgress.done();
    loadingInstance.close();
    return res;
}, error => {
    console.error(error);
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    NProgress.done();
    loadingInstance.close();
})

export default request;
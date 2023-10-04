import request from "@/http/request";

/*
*
* export const 接口方法名 = (有传参 ? data : 空) => request({
*       url:"后端给你的接口地址",
*       method:"请求方式：GET/POST/PUT/DELETE"
*       params:"method == GET && data != 空 ? params : 空",
*       data:"method == POST && data != 空 ? data : 空"
* })
*
* */

export const adminUserLoginAPI = (data) => request({
    url:"user/admin/userLogin",
    data:data,
    methods:"POST"
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import userLogin from "../views/userLogin"
import {userInfoName, userTokenName, webTitle} from "@/utils/config";
import {localStorage} from "@/utils/storage";

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "userLogin",
    components: {
      default: userLogin
    },
    meta: {title: "登录"}
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.path == "/login") {
    if (localStorage.get(userTokenName) && localStorage.get(userInfoName)) {
      // const data = await tokenVerifyAPI();
      next("/")
    } else {
      localStorage.remove(userInfoName) ?? localStorage.remove(userTokenName)
      next()
    }
  } else {
    if (localStorage.get(userTokenName) && localStorage.get(userInfoName)) {
      const data = await tokenVerifyAPI();
      next()
    } else {
      localStorage.remove(userInfoName) ?? localStorage.remove(userTokenName)
      next("/login")
    }
  }
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title + "-" + webTitle
  } else {
    document.title = webTitle
  }
})
//  解决路由重复报错的问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error)
}

const routerReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  routerReplace.call(this, location).catch((error) => error)
}


export default router
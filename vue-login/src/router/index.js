import Vue from 'vue'
import VueCookies from 'vue-cookies'
import Router from 'vue-router'
import login from '@/views/login'
import main from '@/views/main'
import home from '@/views/home'
import user from '@/views/user'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'user',
          name: 'user',
          component: user
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const toPath = to.path
  if (toPath !== '/login') { // 如果在登录页面
    let token = VueCookies.get('userInfo') // 获取token
    if (token) { // 如果有token
      next() // 进入
    } else {
      router.push({  // 跳回登录页面
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router

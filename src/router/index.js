import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve=>require(['@/components/pages/home.vue'],resolve),
      children:[
        {
          path: '/',
          name: 'one',
          component: resolve=>require(['@/components/pages/one.vue'],resolve),
        },
        {
          path: 'two',
          name: 'two',
          component: resolve=>require(['@/components/pages/two.vue'],resolve),
        },
        {
          path: 'three',
          name: 'three',
          component: resolve=>require(['@/components/pages/three.vue'],resolve),
        },
        {
          path: 'four',
          name: 'four',
          component: resolve=>require(['@/components/pages/four.vue'],resolve),
        },
        {
          path: 'five',
          name: 'five',
          component: resolve=>require(['@/components/pages/five.vue'],resolve),
        },
        {
          path: 'six',
          name: 'six',
          component: resolve=>require(['@/components/pages/six.vue'],resolve),
        },
        {
          path: 'seven',
          name: 'seven',
          component: resolve=>require(['@/components/pages/seven.vue'],resolve),
        },
        {
          path: 'eight',
          name: 'eight',
          component: resolve=>require(['@/components/pages/eight.vue'],resolve),
        },
        {
          path: 'nine',
          name: 'nine',
          component: resolve=>require(['@/components/pages/nine.vue'],resolve),
        },
        {
          path: 'ten',
          name: 'ten',
          component: resolve=>require(['@/components/pages/ten.vue'],resolve),
        },
        {
          path: 'eleven',
          name: 'eleven',
          component: resolve=>require(['@/components/pages/eleven.vue'],resolve),
        },
        {
          path: 'twelve',
          name: 'twelve',
          component: resolve=>require(['@/components/pages/twelve.vue'],resolve),
        },
        {
          path: 'thireen',
          name: 'thireen',
          component: resolve=>require(['@/components/pages/thireen.vue'],resolve),
        },
        {
          path: 'fourteen',
          name: 'fourteen',
          component: resolve=>require(['@/components/pages/fourteen.vue'],resolve),
        },

      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/**
 * 
 * @param {*} defaultComponent 
 */
function defaultChangeView(defaultComponent){
  return {
    default:defaultComponent,
    top:resolve => require(['@/views/index/page1.vue'], resolve),
    bottom:resolve => require(['@/views/index/bottomInfo.vue'], resolve),
  }
}
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'*',
      redirect:'/error'
    },
    {
      path: '/home',
      components: defaultChangeView(resolve => require(['@/views/index/index.vue'], resolve)),
    },{
      path:'/product',
      components:defaultChangeView(resolve => require(['@/views/product/productIndex.vue'], resolve)),
    },{
      path:'/research',
      components:defaultChangeView(resolve=>require(['@/views/research/researchIndex.vue'], resolve))
    },{
      path:'/about',
      components:defaultChangeView(resolve=>require(['@/views/about/aboutIndex.vue'], resolve))
    },
    {
      path:'/error',
      component:resolve=>require(['@/views/error.vue'], resolve)
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact'
})

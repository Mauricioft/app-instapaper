/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Router from 'vue-router'

// Routes
import paths from './paths'

const route = (path, view, name, props = false) => ({
  name: name || view,
  path,
  props,
  component: (resovle) => import(
    `@/views/${view}.vue`
  ).then(resovle)
})

Vue.use(Router)

// Create a new router
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: paths.map((item) => 
      route(
        item.path, 
        item.view, 
        item.name,
        item.props
      )
    ).concat([
      { 
        path: '*', 
        redirect: '/' 
      }
    ]),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

export default router
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Vuevos',
    component: Home,
  },
  {
    path: '/html-css',
    name: 'CSS',
    component: () => import(/* webpackChunkName: "css" */ '../views/CSS.vue'),
  },
  {
    path: '/svg-filters',
    name: 'SVGFilters',
    component: () => import(/* webpackChunkName: "svg" */ '../views/SVGFilters.vue'),
  },
  {
    path: '/svg-path',
    name: 'SVGPath',
    component: () => import(/* webpackChunkName: "svg-path" */ '../views/SVGPath.vue'),
  },
  {
    path: '/canvas-2d',
    name: 'Canvas2D',
    component: () => import(/* webpackChunkName: "canvas-2d" */ '../views/Canvas2D.vue'),
  },
  {
    path: '/webgl-3d',
    name: 'WebGL3D',
    component: () => import(/* webpackChunkName: "webgl-3d" */ '../views/WebGL3D.vue'),
  },
  {
    path: '/webgl-2d',
    name: 'WebGL2D',
    component: () => import(/* webpackChunkName: "webgl-2d" */ '../views/WebGL2D.vue'),
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;

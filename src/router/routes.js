
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      // { path: '/page', component: () => localStorage.getItem('token') ? import('pages/Index.vue'): import('pages/Home.vue') },
      // { path: '/page', component: () => import(`pages/Index.vue`) },
      { path: '/page', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/test', component: () => import('pages/Test.vue') },
      { path: '/list/:boardId', component: () => import('pages/Lists.vue') },
      { path: '/', component: () => import('pages/Home.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

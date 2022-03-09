import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
// import store from '../store/greyfood'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function({ store, ssrContext }) {

    var auth = store.getters.isLoggedIn
        // console.log(auth);

    const createHistory = process.env.SERVER ?
        createMemoryHistory :
        (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

    const Router = createRouter({
        scrollBehavior: () => ({ left: 0, top: 0 }),
        routes,
        // console.log(store);

        // Leave this as is and make changes in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
    })

    Router.beforeEach((to, from, next) => {
        // console.log(store);
        // console.log(`User logged in`);
        // console.log(store.getters.isLoggedIn);
        if (to.matched.some(record => record.meta.requireAuth) && !store.getters.isLoggedIn) {
            next({ name: 'login', query: { next: to.fullPath } })
        } else if (to.matched.some(record => record.meta.requireGuest) && store.getters.isLoggedIn) {
            next({ name: 'page', query: { next: to.fullPath } })
        } else {
            next()
        }
    })

    return Router


})

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/pages'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:store.state.pages,
    mode: 'history'
})

export default router
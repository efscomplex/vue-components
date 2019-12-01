
const pages = [
    {name:'home', component: () => import('@/views/Home'), path:'/', label:'Home'},
    {name:'about', component: () => import('@/views/About'), path:'/about', label:'About'},
    {name:'contact', component: () => import('@/views/Contact'), path:'/contact', label:'Contact'},
    {name:'Items', component: () => import('@/views/Items'), path:'/items', label:'Cards'}
]
const state = {
   pages,
   currentPage: "home"
}
const getters = {
   getPages: (state) => state.pages 
}
const mutations = {
   ['SET_CURRENT_PAGE']: (state, pageName) => {
      state.currentPage = pageName
   }
}
const actions = {
   pageChanged: ({commit}, payload) => {
      commit('SET_CURRENT_PAGE', payload)
   }
}
export default {
   namespaced: true,
   state,
   getters,
   mutations,
   actions
}
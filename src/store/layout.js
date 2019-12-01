const state = {
   layout:{
      rows: "min-content 1fr min-content",
      cols: "min-content 4fr",
      areas: "'header header' 'nav main' 'footer footer'"
   }
}
const getters = {
   getLayout: state => state.layout
}
const mutations = {
}
const actions = {
}
export default {
   namespaced: true,
   state,
   getters,
   mutations,
   actions
}
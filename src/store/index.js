import Vue from 'vue'
import Vuex from 'vuex'
import pages from './pages'
import layout from './layout'
import models from './models'
import cards from './cards'

Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
      pages,
      layout,
      models,
      cards
   },
   state: {
      header:{
         title:"Functional component",
         src:"https://cdn.svgporn.com/logos/tnw.svg"
      },
      queryText:''
   },
   mutations: {
      ['SET_QUERY_TEXT']: (state, payload) => {
         state.queryText = payload
      }
   }
})
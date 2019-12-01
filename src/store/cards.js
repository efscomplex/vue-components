import {getData} from '@efs/fetch'
import {filterByKeyValue, filterByKey} from '@/hooks/query'


const state = {
   cards: [],
   filteredCards: []
}
const getters = {
   getCards: state => (key, queryText= false) => {
      if (!key) return state.cards
      
      let cards = []
      queryText ? 
         cards = state.cards.filter(filterByKeyValue(key, queryText)):
         cards = state.cards.filter(filterByKey(key))

      return cards
   },
   filterCards: (state, {getCards}) => (
      key => getCards(key, state.queryText)
   )
}
const mutations = {
   ['SET_CARDS']: (state, payload) => {
      state.cards = payload
   },
   ['SET_FILTERED_CARDS']: (state, key) => {
      if (!key) return state.cards
      
      let cards = []
      state.queryText ? 
         state.filteredCards = state.cards.filter(filterByKeyValue(key, queryText)):
         state.filteredCards = state.cards.filter(filterByKey(key))

      return cards
   }
}
const actions = {
   fetchCards: async ({commit}) => {
      const {data:{results}} = await getData('https://randomuser.me/api/?results=5')
      commit('SET_CARDS',results)
   }
}
export default {
   namespaced: true,
   state,
   getters,
   mutations,
   actions
}

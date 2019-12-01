<template lang='pug'>
label.search
   slot
      i 🔎
   input(:value="value" @input="onInput" placeholder="search..." autofocus)
</template>
     
<script>
import {useQuery} from '@/hooks/query'
import {isRef} from '@vue/composition-api'

export default {
   setup(props, context){
      const {value, onQuery} = useQuery(context)
      const val = isRef(value)? value.value: value
      let store = context.root.$store
      
      function onInput(event){
         onQuery(event)
         store.commit('SET_QUERY_TEXT', event.target.value)
         store.commit('SET_FILTERED_CARDS')
      }
      return {value, onInput}
   }
}
</script>
<style lang="stylus" scoped>
.search
   cursor:pointer
   display: flex
   align-items: center
   padding: .4rem
   background-color:white
   border-radius:3px
input
   display: inline-block
   width: auto
   padding: 0 .6rem
   vertical-align: middle
   background-color:transparent
   border:none
   &:focus
      outline:none
</style>
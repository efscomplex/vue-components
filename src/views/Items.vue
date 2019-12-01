<template lang='pug'>
.items.flex-grid
   Card(v-for="(user, i) in users" :key="i" v-bind="user").card
</template>

<script>
import {computed, ref} from '@vue/composition-api'

export default {
   setup(props, {root}){
      const cards = ref(root.$store.state.cards.filteredCards)
      
      const users =  computed(
         () => cards.value.map( 
            user => ({
               title: user.name.title + user.name.first + user.name.last,
               subtitle: user.email,
               overline: user.location.city,
               avatar: user.picture.medium,
            })
         )
      )
      return {users, cards}
   }
}
</script>
<style lang="stylus" scoped>
.card
   width:30vw
</style>
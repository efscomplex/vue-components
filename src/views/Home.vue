<template lang='pug'>
.home
    header
        h1.title {{title ? title : 'Welcome to Home'}}
        Card(v-bind="card").card
</template> 
<script>
import {query} from '@/api/query-api'

export default {
    props:['title'],
    setup(){
       const card = {
          title: 'Css Animations',
          subtitle: 'prefixed CSS rules for the sake of brevity',
          overline: 'VueJs Frramework',
          avatar: 'http://liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg',
          banner: 'https://i.ytimg.com/vi/DsuTwV0jwaY/maxresdefault.jpg',
          main: 'CSS animations are applied in the same way as CSS transitions, the difference being that v-enter is not removed immediately after the element is inserted, but on an animationend event.'
       }
       return {card}
    }
}
</script>
<style lang="stylus">
.card
   grid-template-areas: 'banner banner''header avatar''header avatar' 'main main'
   grid-template-columns: 5fr 1fr
   max-width:15vw
</style>
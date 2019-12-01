<template lang="pug">
#app
   Layout(v-bind="layout")
      Header(v-bind="header" style="grid-area: header")
      Nav(style="grid-area: nav").pd-30
         template(#icon)
            mdiMenu
         Navbar(:routes="routes" vertical)
      main(style="grid-area: main")   
         router-view
      footer(style="grid-area: footer")
         span powered by @efscomplex
</template>

<script>
import {ref, computed} from '@vue/composition-api'
export default {
   name: 'app',
   components:{
      Header: () => import('@/components/core/Header'),
      Layout: () => import('@/components/core/Layout'),
      Navbar: () => import('@/components/core/Navbar'),
   },
   setup(props,{root}){
      console.log(root.$store);
      
      root.$store.dispatch('cards/fetchCards')
      const routes = computed(() => root.$store.getters['pages/getPages'])
      const header = computed(() => root.$store.state.header)
      const layout = computed(() => root.$store.getters['layout/getLayout'])

      return {header, layout, routes}
   }
}
</script>
<style lang="stylus">
@import 'styles/styles'
*
   margin:0
.header
   background-color:#333
   color:white
main
   padding:3rem 10vw
   background-color:#444
   color:rgba(200,200,200,.9)
footer
   padding:3rem
</style>
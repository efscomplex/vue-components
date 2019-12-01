<template lang='pug'>
ul.navbar(:class="!!vertical? 'vertical': 'horizontal'")
   template(v-for="route in routes")
      router-link(
         :to="route.path" 
         active-class="active") {{route.label}}
</template>

<script>
export default {
   props:{
      routes:{
         default:()=>[]
      },
      vertical:{
         type: [Boolean],
         default: false
      }
   },
}
</script>
<style lang="stylus" scoped>
.vertical
   flex-direction:column
   a
      padding: 1rem 0
.horizontal
   a
      padding:0 1rem

ul.navbar
   display:inline-flex
   padding:0
   a
      text-decoration:none
      display:block
      color:inherit
      font-weight:bold
      letter-spacing:0.5px
      &:hover
         opacity:.7
</style>
<template lang='pug'>
nav
   div(@click="onClick").hover
      slot(name="icon" )
         div.burger 
   transition(:name="effect")
      template(v-if="show")
         slot
</template>
<script>
export default {
   props:{
      effect:{
         default:'slideToRight'
      },
   },
   data: () => ({show:true}),
   methods:{
      onClick(){
         this.show=!this.show
      }
   }
}
</script>
<style lang="stylus" scoped>
.hover
   cursor:pointer
nav
   display:inline-block
.burger
   w = 3px
   size = 5*w
   --color:white
   display: inline-block
   margin:0 1rem
   width: size
   height: size
   cursor:pointer
   background: linear-gradient(var(--color) w,transparent w),
      linear-gradient(transparent w*2,var(--color) w*2,var(--color) w*3,transparent w*3),
      linear-gradient(transparent w*4,var(--color) w*4,var(--color) w*5,transparent w*5)
</style>
    
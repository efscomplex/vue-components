<template lang='pug'>
header
   Logo(:src="src")
   Title(:title="title")
   Search
      mdiMagnify(fill-color="#222")
</template>

<script>

export default {
   props:['title','src'],
   components:{
      Logo: () => import('@/components/core/Logo'),
   },
}
</script>
<style lang="stylus" scoped>
header 
   padding:.4rem 1rem
   display:flex
   justify-content:space-between
   & > *
      margin:0 1rem
</style>
<template functional lang='pug'>
.card
   img(:src="props.picture.medium")
   h1 {{props.name.first}}
   p {{props.gender}}
   p {{props.email}}
</template>
<script>
export default {
   
}
</script>
<style lang="stylus" scoped>
.card
   max-width:30rem
</style>
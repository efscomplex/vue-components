<template lang='pug'>
div.card
   img.img.banner(v-if="banner" :src="banner")
   .header(v-if="hasHeader || $slots.header")
      slot(name="header")
         span.overline(v-if="overline") {{overline}}
         div(v-if="hasHeader")
            div(v-if="title")
               span.headline {{title}}
            .subtitle(v-if="subtitle")
               span {{subtitle}}
   .main(v-if="main || $slots.main")
      slot(name="main")
         .wrap(v-html="main" v-if="main")
   .avatar(v-if="$slots.avatar || avatar")
      slot(name="avatar")
         img(:src="avatar" v-if="avatar").img
   .actions(v-if="$slots.actions")
      slot(name="actions")
</template>
     
<script>

export default {
    data(){
        return {
            hasHeader:false,
        }
    },
    props:['banner', 'title', 'subtitle', 'main', 'avatar', 'overline'],
    beforeMount() {
        this.hasHeader = 
            !!this.title || !!this.subtitle
    },
}
</script>
<style lang="stylus" scoped>
.card
   display:grid
.banner
   width:100%
   height:10rem
   grid-area: banner
.main
   grid-area: main
   padding:1rem
.header 
   grid-area: header
   padding:1rem
.avatar
   grid-area: avatar
   justify-self:center   
   border-radius:50%
.img
   align-self:center
   object-fit: cover
   object-position: center
.actions
   grid-area: actions
</style>
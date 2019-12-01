<template lang='pug'>
.layout(:style="styles")
   slot
</template>
     
<script>
import {ref} from '@vue/composition-api'

export default {
   props:{
      rows:{
         type:String,
         default: 'unset'
      },
      cols:{
         type:String,
         default: 'unset'
      },
      areas:{
         type:String,
         default: 'unset'
      }
   },
   setup(props){
      const styles = ref({
         gridTemplateColumns: props.cols,
         gridTemplateRows: props.rows,
         gridTemplateAreas: props.areas
      })

      return {styles}
   }
}
</script>
<style lang="stylus">
.layout
   min-height:100vh
   display:grid
</style>
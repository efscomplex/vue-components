/** vue-cli provides require.context */
import Vue from 'vue'
import {
    camelCase, 
    upperFirst
} from 'lodash'

function getName(fileName){
   return upperFirst(
            camelCase(
               fileName
                  .split('/')
                  .pop()
                  .replace(/\.\w+$/, '')
            )
         )
}
let requiredComps = require.context(
   '@/components/base',
   true, // look at subfolders
   /\w+\.(vue|js)$/
)
function register(fileName){
      const componentConfig = requiredComps(fileName)
      const componentName = getName(fileName)
      Vue.component(
          componentName,
          componentConfig.default || componentConfig
      )
}
function vueRegisterComp(){
   requiredComps
      .keys() 
      .forEach(register)
}

export const vueRegister = vueRegisterComp
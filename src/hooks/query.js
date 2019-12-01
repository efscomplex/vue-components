import {ref} from '@vue/composition-api'

export const filterByKey = (key) => (obj) => !!obj[key]
export const filterByKeyValue = (key, value) => (obj) => obj[key].includes(value)

export function useQuery({emit}){
   const value = ref('')
   function onQuery(event){
      value.value = event.target.value
      emit('query',value.value)
   }   
   return {value, onQuery}
}
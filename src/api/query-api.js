export const filterByKey = (key) => (obj) => !!obj[key]
export const filterByKeyValue = (key, value) => (obj) => obj[key].includes(value)

function query(schema, obj){
   let queryObj = {}
   let newSch = Object.create(null)
   newSch = {...schema}

   function match(schema, obj, queryObj){
      let key
      for (key in schema){
         if (obj.hasOwnPropperty(key)){ 
            if (
               typeof obj[key] === 'Object' &&
               typeof schema[key] === 'Object')
            {
               queryObj[key]={}
               match(schema[key], obj[key], queryObj[key])
            } else {
               queryObj[key] = obj[key] 
            }
         }
      }
   }
   match(newSch, obj, queryObj)
   return queryObj
}
export { query }
export default {
   query
}
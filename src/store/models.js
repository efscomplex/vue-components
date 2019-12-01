import {filterByKeyValue} from '@/hooks/query'

const state = {
   user:{
      name: {
         first:String,
         last:String
      },
      email: String,
      gender: String,
      picture: {
         small: String,
         medium: String,
         large: String
      },
      phone: Number,
      id:String,
   }
}
const getters = {
   userName: () => (
      user => user.first + ' ' + user.last
   ),
   userMail: () => (
      user => user.mail
   ),
   userPicture: () => (
      (user,size='medium') => user.picture[size]
   ),
   userGener: () => (
      user => user.gender
   ),
}
export default {
   namespaced: true,
   state,
   getters,
}
import Cart from '../cart/cart'

export default {

    Query: {
      user(obj,args,ctx){
          console.log(ctx);

          return ctx.user || {} ;
      },

    },
    User: {

        email: (user) =>(user._id)?  user.emails[0].address: null ,
        userName: (user) =>(user._id)?   user.username : null,
        cart:(user) =>  results = (user._id)? Cart.find({userId:user._id}).fetch() : null
    }

}

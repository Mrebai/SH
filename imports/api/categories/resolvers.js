import Category from './category'



export default {
    Query:{
        getCathegories(obj,args,ctx){
            const id = Category.find().fetch()  || [] ;

            return id[0]
        }
    },
    Mutation:{
        updateCathegories(obj,{men,women,kids,other},ctx){

                const id = Category.upsert({},{
                        $set:{men,women,kids,other}
                    });

                return Category.findOne(id);


        }
    }
}
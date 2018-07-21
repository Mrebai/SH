import Clothes from './clothes'
import Review from '../reviews/reviews'
import Like from '../likes/likes'
import checkParam from '../checkParam'
if (Meteor.isServer) {
    Clothes._ensureIndex(
        {
        name: "text",
        description: "text",
        productId:'text'
    });
}

let userId;
export default {
    Query:{
        clothes(obj,{gender,tags,search,minPrice,maxPrice},ctx){
            userId=(ctx.user)? ctx.user._id: '';

            if(search){
                results = Clothes.find({$text: {$search: search}}).fetch()
            } else {
                results = Clothes.find().fetch();
            }


            if(gender && gender !== 'u'){
                results = results.filter((item) => item.gender === gender)
            }

            if(tags && tags.length !== 0){
                console.log(tags);
                results = results.filter((item) => tags.indexOf(item.tag) !== -1 )
            }

            if(minPrice && maxPrice){
                results = results.filter((item) => item.price >=  minPrice && item.price <=  maxPrice)
            }



                return (results)


                // Clothes.findOne({_id:arg._id}).fetch());

        },
        oneItem(obj,{_id},ctx){
            if(ctx){
                return Clothes.findOne({_id})
            }
        }
    },

    Mutation:{
        addItem(obj,{ name, productId, price, description, sizes,tag,gender,comingSoon, availability, images, mainImage},ctx){

            if(ctx.userId){
                const cloth = Clothes.insert({
                    name, productId, price, description, sizes,tag,gender,comingSoon, availability, images, mainImage
                });

                return Clothes.findOne((cloth))
            }
            throw new Error ( "Action unauthorized")

        },

        updateClothes(obj,{_id, name, productId, price, description, sizes,tag,gender,comingSoon, availability, images, mainImage},ctx){

            if(ctx.userId) {
                const cloth = Clothes.update({_id}, {
                    $set: {
                        name: checkParam(name, null),
                        productId: checkParam(productId, null),
                        price: checkParam(price, null),
                        description: checkParam(description, null),
                        sizes: checkParam(sizes, null),
                        tag: checkParam(tag, null),
                        gender: checkParam(gender, null),
                        comingSoon: comingSoon,
                        availability:availability,
                        images: checkParam(images, null),
                        mainImage: checkParam(mainImage, null),
                    }
                });

                return Clothes.findOne((cloth))
            }
            throw new Error ( "Action unauthorized")
        },

        deleteClothes(obj,{_id},ctx) {
            if (ctx.userId) {
                const cloth = Clothes.remove(_id);

                return Clothes.findOne((cloth))
            }
            throw new Error ( "Action unauthorized")
        }

    }
}
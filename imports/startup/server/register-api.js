import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from 'lodash/merge'

import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '../../api/users/resolvers';
import clothesSchema from '../../api/clothes/Clothes.graphql';
import clothesResolvers from '../../api/clothes/resolvers';
import reviewSchema from '../../api/reviews/Reviews.graphql';
import reviewResolvers from '../../api/reviews/resolvers';
import cartSchema from '../../api/cart/cart.graphql';
import cartResolvers from '../../api/cart/resolvers';
import likeSchema from '../../api/likes/Likes.graphql';
import likeResolvers from '../../api/likes/resolvers';
import catchema from '../../api/categories/category.graphql';
import catResolvers from '../../api/categories/resolvers';
//hihihiiivvsqfcfsssdsssfffhhdssszsssssssssssssss
// hiiiicdxcsdcscvcxndssjysgsgfssfssssdsssssss sfsssssdsssdssdsssssssss


const typeDefs = [UserSchema,clothesSchema,reviewSchema,cartSchema,likeSchema,catchema];



const resolvers = merge(UserResolvers,clothesResolvers,reviewResolvers,cartResolvers,likeResolvers,catResolvers);

Meteor.users.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc) {
        return true;
    }
});
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });

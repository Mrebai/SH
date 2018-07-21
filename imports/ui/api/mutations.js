import gql from 'graphql-tag'

// create item mutation
export const addItem = gql`
    mutation addItem(
    $name: String!
    $productId: String!
    $price: Float!
    $description: String!
    $sizes:[String]
    $tag: String!
    $gender: String!
    $comingSoon: Boolean
    $availability:Boolean!
    $images:[String]
    $mainImage:String
    ){
        addItem(
            name: $name
            productId: $productId
            price: $price
            description: $description
            sizes:$sizes
            tag: $tag
            gender: $gender
            comingSoon: $comingSoon
            availability:$availability
            images:$images
            mainImage:$mainImage
        ){
            _id
        }
    }
`;


// update item mutation

export const Updateclothes = gql`
    mutation updateClothes(
    $id:String!
    $name: String!
    $productId: String!
    $price: Float!
    $description: String!
    $sizes:[String]
    $tag: String!
    $gender: String!
    $comingSoon: Boolean!
    $availability:Boolean!
    $images:[String]
    $mainImage:String
    ){
        updateClothes(
            _id:$id
            name: $name
            productId: $productId
            price: $price
            description: $description
            sizes:$sizes
            tag: $tag
            gender: $gender
            comingSoon: $comingSoon
            availability:$availability
            images:$images
            mainImage:$mainImage
        ){
            _id
        }
    }
`;

// delete mustation
export const DeleteItem = gql`
    mutation deleteClothes($id: String!){
        deleteClothes(_id: $id){
            _id
        }
    }
`;


// delete mustation
export const setReview = gql`
    mutation setReview(
    $prodId: String!
    $review: String!
    $rate  : Int!
    ){
        setReview(
            prodId: $prodId
            review:$review
            rate:$rate
        ){
            _id
        }
    }
`;

// add to cart Mutation

export const addCart = gql`
    mutation addCart(
    $itemId: String!
    $productId: String!
    $name: String!
    $img: String!
    $color: String
    $number:Int
    $size:String!
    $price:Float
    ){
        addCart(
            itemId: $itemId
            productId: $productId
            name: $name
            img: $img
            color: $color
            number:$number
            size:$size
            price:$price
        ){
            _id
        }
    }
`;

// delete from cart
export const deleteCart = gql`
    mutation deleteCart($id: String!){
        deleteCart(_id: $id){
            _id
        }
    }
`;


//add like
export const addlike = gql`
    mutation addlike(
    $itemId: String
    ){
        addlike(
            itemId: $itemId
        ){
            _id
        }
    }
`;

//update categories
export const updateCathegories = gql`
    mutation updateCathegories($men:[String] $women:[String] $kids:[String] $other:[String]){
        updateCathegories(
            men:$men
            women:$women
            kids:$kids
            other:$other
        ){
            _id
        }
    }
`;

import gql from 'graphql-tag'

export const userQuery = gql`
    query user{
        user{
            _id
            email
            userName
            cart{
                _id
                userId
                itemId
                name
                img
                size
                price
            }
          
        }
    }
`;



export const clothesQuery = gql`
    query clothes($gender:String $tags:[String] $search:String $minPrice:Int $maxPrice:Int ){
        clothes(gender:$gender tags:$tags search:$search minPrice:$minPrice maxPrice:$maxPrice){
            _id
            name
            productId
            price
            description
            sizes
            tag
            gender
            comingSoon
            availability
            images
            mainImage
        }
    }
`;

export const oneItem = gql`
    query oneItem($id:ID! ){
        oneItem(_id:$id){
            _id
            name
            productId
            price
            description
            sizes
            tag
            gender
            comingSoon
            availability
            images
            mainImage
        }
    }
`;

export const getCathegories = gql`
    query getCathegories{
        getCathegories{
            women
            men
            kids
            other
        }
    }
`;




import React, {Component,Fragment} from 'react'
import {Query,graphql} from 'react-apollo'
import {oneItem} from '../../api/queries'
import {addCart} from '../../api/mutations'
import Slider from "react-slick";
import setUpcloudinary  from '../../cloudinaryInit'
import {Image} from 'cloudinary-react'


const settings = {
    className:'slideContainer',
    centerMode:true,
    arrows:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0
};

class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            size : null
        }
    }



     productQuery = () => (
        <Query query={oneItem} variables={{id:this.props.match.params.id}}>
            {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return `Error!: ${error}`;
                setUpcloudinary();

                const  submitItemTOCart = () => {
                    if(this.state.size){
                        this.props.addToCart({
                            variables:{
                                itemId:data.oneItem._id,
                                productId:data.oneItem.productId,
                                name:data.oneItem.name,
                                img:data.oneItem.mainImage,
                                size:this.state.size,
                                price:data.oneItem.price
                            }
                        }).then(result => console.log(result))

                    } else {
                        return('please select your size')
                    }

                };
                const setSize = (size) => this.setState({size});
                return (

                        <div className="row  justify-content-md-center">
                            <div className="col-md-6">
                                <Slider {...settings}>
                                    {data.oneItem.images.map((image,i) => <div className='sliderContainer' key={i}> <Image className={"sliderImg"} cloudName="dg16brf0l" publicId={image} width="300" crop="scale" /></div>)}
                                </Slider>

                                <h3 className=' itemTitle lead display-4 text-uppercase'>{data.oneItem.name} </h3>
                                <p className='productId'> {'Article Number:  ' + data.oneItem.productId} </p>
                                <p className='productPrice'> {'€ ' + data.oneItem.price} </p>
                                <p className='productDescription'> { data.oneItem.description} </p>
                                <div className=' d-flex justify-content-center productSizes'> {
                                    data.oneItem.sizes.map((size,i) => <button key={i} style={(this.state.size === size)?{backgroundColor:'#f68236',color:'#FFFFFF'}:{backgroundColor:'#DDDDDD',color:'#000000'} } onClick={() => setSize(size)} className="btn sizeButton">{size}</button>)}
                                </div>
                                <button className="btn addToCart" onClick={() => submitItemTOCart()}> ADD TO CART </button>
                            </div>
                        </div>


                );
            }}
        </Query>
    );
render(){
    return (
        <div >
            {this.productQuery()}

        </div>
    )
}
}

export default graphql(addCart,{name:'addToCart',options:{refetchQueries:['user']}})(Details)

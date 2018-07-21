import React from 'react'
import setUpcloudinary  from '../../cloudinaryInit'
import {Image} from 'cloudinary-react'
import Slider from "react-slick";
import {Link} from 'react-router-dom'

const settings = {
    dots: true,
    infinite: false,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    centerPadding: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }
    ]
};


export default CatSlider = ({clothes,tag,path,gender}) => {
    setUpcloudinary();
    return (
        <div className="">

            {
                (clothes.length)?<div>
                    <h3 className='sliderTag'>{tag}</h3>
                    <Slider {...settings}>
                        {
                            clothes.map( item =>
                                <div key={item._id}>
                                    <Image className={"imageSlide"} cloudName="dg16brf0l" publicId={item.mainImage} width="300" crop="scale" />
                                    <h3 className=' itemTitle lead display-4 text-uppercase'>{item.name} </h3>
                                    <p className='productPrice'> {'€ ' + item.price} </p>
                                    <div className='addToCartBtnContainer d-flex justify-content-center' >
                                        <button className="btn sliderBtn"> <Link to={'/product/' + item._id} > <i class="fas fa-shopping-cart"></i> </Link>   </button>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                        <button className="btn showMoreBtn">  <Link className='showMoreLink' to={ gender + '/' + tag} >Show more</Link></button>
                </div>:
                    <div>
                        <h3 className='sliderTag'>{tag}</h3>
                        <h5 className='notFoundCat'>No item Found in {tag}</h5>

                    </div>


            }



        </div>
    )
}
import React, {Component} from 'react'
import setUpcloudinary  from '../../cloudinaryInit'
import SugCard from './sugCard'
import Slider from "react-slick";


const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 4,
    variableWidth: true
};

class Suggestions extends Component{


    componentDidMount(){
        setUpcloudinary();
    }


    render(){
        return (
            <div className="SugSliderContainer">

                <Slider {...settings}>
                    {
                        this.props.data.map( item =>
                            <div key={item._id}>
                                <SugCard  img={"url(" + "http://res.cloudinary.com/dg16brf0l/image/upload/c_scale,h_150/"+ item.mainImage + ")" } id={item._id} />

                            </div>
                        )
                    }
                </Slider>


            </div>
        )
    }

}
export default Suggestions
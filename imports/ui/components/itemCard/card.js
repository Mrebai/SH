import React, {Component, Fragment} from 'react'
import setUpcloudinary  from '../../cloudinaryInit'
import {Image} from 'cloudinary-react'
import {Link} from 'react-router-dom'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        setUpcloudinary();
        return (
            <Fragment >
                {
                    this.props.clothes.filter(item => item.tag === this.props.match.params.cat ).filter(item => item.gender === this.props.match.params.gender).map( clothes =>
                    <div key={clothes._id} className='card col-md-4'>
                        <Image className="imgCard card-img-top" cloudName="dg16brf0l" publicId={clothes.mainImage}  alt={clothes.name} />
                        <div className="card-body">
                            <h5 className="card-title">{clothes.name}</h5>
                            <p className="card-text">{clothes.description}</p>
                            <div className='addToCartBtnContainer d-flex justify-content-center' >
                                <button className="btn addToCartBtn"> <Link to={'/product/' + clothes._id} > <i className="fas fa-shopping-cart"></i> ADD TO CART </Link>   </button>

                            </div>
                        </div>


                    </div>
                    )
                }
                {console.log(this.props.match.params.cat)}
                {console.log(this.props.clothes)}

            </Fragment>
        )
    }
}

export default Card
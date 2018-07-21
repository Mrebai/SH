import React, {Component} from 'react'
import setUpcloudinary  from '../../cloudinaryInit'
import {Image} from 'cloudinary-react'


class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        setUpcloudinary();
        return (
            <div className="card">
                <Image className="imgCard card-img-top" cloudName="dg16brf0l" publicId={this.props.image}  alt={this.props.name} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.desc}</p>
                    <div className="d-flex flex-row row">

                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard
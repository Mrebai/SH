import React, {Component} from 'react'
import setUpcloudinary  from '../../cloudinaryInit'
import {Image} from 'cloudinary-react'
import {DeleteItem} from '../../api/mutations'
import {graphql,withApollo} from 'react-apollo'
import {Link} from 'react-router-dom'
class AdminCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    deleteHandler = (id) => {
        this.props.deleteItem({
            variables:{
                id
            }
        }).then( () => {
            this.props.client.resetStore();
        })
    };
    render() {
        setUpcloudinary();
        return (
            <div className="card">
                <Image className="imgCard card-img-top" cloudName="dg16brf0l" publicId={this.props.image}  alt={this.props.name} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.desc}</p>
                        <div className="d-flex flex-row row">
                            <Link to={'/admin/update/' + this.props.id} className="btn btn-primary col">Edit</Link>
                            <a href="#" onClick={() => this.deleteHandler(this.props.id)} className="btn btn-primary col">Delete</a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default graphql(DeleteItem,{name:'deleteItem'})(withApollo(AdminCard))
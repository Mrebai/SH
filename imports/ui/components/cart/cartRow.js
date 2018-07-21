import React, {Component} from 'react'

import {Image} from 'cloudinary-react'
import setUpcloudinary  from '../../cloudinaryInit'

class CartRow extends Component {

    constructor(props){
        super(props);
        this.state= {itemPrice : this.props.item.price , qty : 1}
    }


    componentDidMount(){
        setUpcloudinary();
        this.props.setTotal(this.props.item.price , this.number.value ,this.props.index);
    }
    componentDidUpdate(){

    }

    changeQty = (e) => {
        this.props.setTotal(this.props.item.price , this.number.value ,this.props.index );

    };

    render(){
        return (
            <tr>
                <th scope="row"> <Image height="80" crop="scale" className="cartImage"  cloudName="dg16brf0l" publicId={this.props.item.img} /></th>
                <td className='cartItemName'>{this.props.item.name}</td>
                <td className='cartItemSize' >{this.props.item.size}</td>
                <td className='cartItemQty' >
                    <input min={1}  onChange={(e) => this.changeQty(e.target.value)} ref={(input) => this.number = input} type="number" className="form-control cartQty" id="exampleInputEmail1" defaultValue={1}/>
                </td>
                <td className='cartItemPrice'>   {'$ '+ this.props.item.price}</td>
                <td className='cartItemBtn' > <button onClick={() => this.props.deleteFromCart(this.props.item._id,this.props.index)} className="btn"><i className="fas fa-times"></i></button> </td>
            </tr>
        )
    }

}

export default CartRow
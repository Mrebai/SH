import React, {Component,Fragment} from 'react'
import {userQuery} from '../../api/queries'
import { Query, graphql } from "react-apollo";
import {deleteCart} from '../../api/mutations'
import CartRow from './cartRow'
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subTotal: [],
            total :0
        };
        this.setTotal = this.setTotal.bind(this)
    }

     setTotal = (item , e,num) => {
        let update = this.state.subTotal;
        update[num] = item * e;
        this.setState({subTotal:update},() => {
            let i = 0;
            this.state.subTotal.forEach((price) => i = i + price);
            this.setState({total:i})
        })
    };
     cartQuery = ( ) => (
        <Query query={userQuery}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                const deleteFromCart = (id,index) => {
                    this.props.deleteFromCart({
                        variables:{
                            id
                        }
                    }).then(res => {
                        console.log('item deleted ' + res);
                        let i = this.state.subTotal;
                        i[index] = 0;
                        this.setState({subTotal: i}, () => {
                            let a = 0;
                            this.state.subTotal.forEach((price) => a = a + price);
                            this.setState({total:a})
                            }
                        )
                    })
                };


                return (
                    <div className="cartContainer">

                        <h6 className='display-4 mt-4 lead yourCart'>YOUR SHOPPING CART</h6>
                        <p className='itemReseved'>Items reserved for limited time only</p>
                        <table className="table mt-2">
                            <thead>
                            <tr>
                                <th scope="col">PRODUCT</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">SIZE</th>
                                <th scope="col">QTY</th>
                                <th scope="col">AMOUNT</th>
                                <th scope="col">DELETE</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                data.user.cart.map( (item,i) => <CartRow key={item._id} index={i} setTotal={this.setTotal} deleteFromCart={deleteFromCart} item={item}/>)
                            }
                            </tbody>
                        </table>

                        <div className="subTotal container"> <p> Subtotal <span>{'$ ' + this.state.total}</span>  </p></div>
                    </div>
                );
            }}
        </Query>
    );
    render() {
        return (
           <Fragment>
               {this.cartQuery()}
           </Fragment>
        )
    }
}

export default graphql(deleteCart,{name:'deleteFromCart',options:{refetchQueries:['user']}}) (Cart)
import React, {Component} from 'react'
import BigNav from './bigNav'
import SmallNav from './smallNav'
import Login  from '../account/login'
import {withApollo} from 'react-apollo'
import {ThemeContext} from '../../context'

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginShow : false
        }
    }
    toggleView = (tf) => {
        this.setState({loginShow:tf})
    };
    render(){
        return(
            <ThemeContext.Consumer>

                {theme => {
                    return(
                        <div>
                            {
                                (theme.width > 858) ?
                                    <BigNav cart={theme.cartLength} client={this.props.client} toggleView={this.toggleView}/> :<SmallNav cart={theme.cartLength} client={this.props.client} toggleView={this.toggleView}/>

                            }


                            {
                                (this.state.loginShow && !theme.user)?

                                    <div className='SignCover'>
                                        <div className='SignContainer'>
                                            <button onClick={() => this.toggleView(false)} className="btn btn-link closeWindow"> <i className="fas fa-window-close"></i> </button>
                                            <Login float={true}  toggleView={this.toggleView}  />
                                        </div>
                                    </div>:
                                    <div>

                                    </div>
                            }
                        </div>

                    )

                    }
                 }

            </ThemeContext.Consumer>

        )
    }
}

export default withApollo(NavBar)
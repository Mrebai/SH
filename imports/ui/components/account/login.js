import React,{Component,Fragment} from 'react'
import Message from '../message'
import {withApollo} from 'react-apollo'
import {withRouter} from 'react-router-dom'

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            message : null,
            showMessage: 1
        }
    }

    submittedForm2 = (e) => {



        if(this.userName.value.length < 1 ){
            this.setState({showMessage: this.state.showMessage +1});
            return( this.setState({message:"please enter you user name"}))
        }
        if(this.password.value.length < 1 ){
            this.setState({showMessage: this.state.showMessage +1});
            return( this.setState({message:"you must enter your password"}));
        }
        Meteor.loginWithPassword(this.userName.value,this.password.value,error => {
            if(error){
                return(this.setState({message:error.reason ,showMessage: this.state.showMessage +1}));
            }
            this.setState({message:""});
                  this.props.client.resetStore();


        });







    };

render(){

    return(
        <Fragment>
            <form className='loginFormContainer my-auto'>
                <h6 className=" lead " id='signIn'> SIGN IN</h6>
                <div className="form-group loginForm">
                    <label htmlFor="emailSignUp">User Name</label>
                    <input  ref={(input) => {this.userName = input}} type="text" className="form-control defaultInput" id="userNameSignIn" aria-describedby="userNameHelp" placeholder="Enter a user name or email"/>

                </div>
                <div className="form-group loginForm">
                    <label htmlFor="SingUpPassword">Password</label>
                    <input ref={(input) => {this.password = input}} type="password" className="form-control defaultInput" id="SingInPassword" placeholder="Enter a strong password " aria-describedby="PasswordHelp"/>
                    <small id="PasswordHelp" className="form-text text-muted"><a href="#"> Forgot Password?</a></small>
                </div>
                <button onClick={() => this.submittedForm2()}  type="submit" className="btn btn-link OrangeBtnDefault">Login</button>
                <small id="noAccount" className="form-text text-muted"><a href="#">I don't have an account</a></small>

            </form>
            <Message payload={this.state.message} showMessage={this.state.showMessage}/>
        </Fragment>

    )
}
}

export default withApollo(withRouter(Login))
import React,{Component,Fragment} from 'react'
import Message from '../message'
export class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            message : [],
            showMessage: 0
        }
    }
    signUpForm = (e) => {
        e.preventDefault();

        if(this.SignUpPassword.value.length < 3 ){

            return( this.setState({message: this.state.message.push("password too short")}))
        }
        if(this.SignUpPassword.value !==  this.SignUpPassword2.value){

            return( this.setState({message: this.state.message.push("password doesn't match")}))
        }
        if(this.signUpUserName.value.length < 4 ){

            return( this.setState({message: this.state.message.push("username too short")}))
        }
        Accounts.createUser({email:this.signUpEmail.value,password:this.SignUpPassword.value,username:this.signUpUserName.value},error => {
            (error)? this.setState({message: this.state.message.push(error.reason)}):  this.setState({message: this.state.message.push("account made successfully")});


        })
    };
render(){

    return(
        <Fragment>

            <form onSubmit={this.signUpForm}>
                <h6 className=" lead " id='signUp'> SIGN UP</h6>
                <div className="form-group loginForm">
                    <label htmlFor="emailSignUp">Email Address</label>
                    <input  ref={(input) => {this.signUpEmail = input}} type="email" className="form-control input" id="emailSignUp" aria-describedby="emailHelp" placeholder="Enter a valid email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group loginForm">
                    <label htmlFor="userNameSignUp">User Name</label>
                    <input  ref={(input) => {this.signUpUserName = input}} type="text" className="form-control input" id="userNameSignUp" aria-describedby="userNameHelp" placeholder="Enter a user name"/>

                </div>
                <div className="form-group loginForm">
                    <label htmlFor="SingUpPassword">Password</label>
                    <input ref={(input) => {this.SignUpPassword = input}} type="password" className="form-control input" id="SingUpPassword" placeholder="Enter a strong password "/>
                </div>
                <div className="form-group loginForm">
                    <label htmlFor="SingUpPasswordConf">Retype Password</label>
                    <input  ref={(input) => {this.SignUpPassword2 = input}} type="password" className="form-control input" id="SingUpPasswordConf" placeholder="Retype password"/>
                </div>

                <button  type="submit" className="btn btn-link OrangeBtnDefault">SIGN UP</button>

            </form>

            <Message payload={this.state.message} float={false} showMessage={this.state.showMessage}/>
        </Fragment>


    )
}

}

export default SignUp
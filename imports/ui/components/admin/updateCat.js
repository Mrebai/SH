import React, {Component} from 'react'
import { Query,graphql } from "react-apollo";
import {getCathegories} from '../../api/queries'
import {updateCathegories} from '../../api/mutations'
import Message from '../message'
class UpdateCat extends Component {
    constructor(props) {
        super(props);
        this.state = {

            message : null,
            showMessage: 1

        }
    }
    getCat = ( ) => (
        <Query query={getCathegories}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                const submitItem = (e) => {
                    e.preventDefault();
                    this.props.updateCatMutation({
                        variables:{
                            men: this.men.value.split(","),
                            women: this.women.value.split(","),
                            kids: this.kids.value.split(","),
                            other: this.other.value.split(",")
                        }
                    }).then(res =>{
                        console.log(res);
                        this.setState({message:"Category Updated "});
                        this.setState({showMessage: this.state.showMessage +1});
                    })
                };
                return (
                    <div>
                        <form className='"offset-md-3 col-md-6 offset-md-3' onSubmit={submitItem}>
                            <div className="form-group row ">
                                <label className="col-md-5 col-form-label" htmlFor="menCat" >Men*</label>
                                <div className="col">
                                    <textarea defaultValue={(data.getCathegories.men)?data.getCathegories.men.join(","):''} className="form-control" id="menCat" placeholder='separate each category with a ","' rows="1" ref={input => this.men= input}/>                            </div>
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-5 col-form-label" htmlFor="WomenCat" >Women*</label>
                                <div className="col">
                                    <textarea defaultValue={(data.getCathegories.women)?data.getCathegories.women.join(","):''} className="form-control" id="WomenCat" placeholder='separate each category with a ","' rows="1" ref={input => this.women= input}/>                            </div>
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-5 col-form-label" htmlFor="kidsnCat" >Kids*</label>
                                <div className="col">
                                    <textarea defaultValue={(data.getCathegories.kids)?data.getCathegories.kids.join(","):''} className="form-control" id="kidsnCat" placeholder='separate each category with a ","' rows="1" ref={input => this.kids= input}/>                            </div>
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-5 col-form-label" htmlFor="otherCat" >Other*</label>
                                <div className="col">
                                    <textarea defaultValue={(data.getCathegories.other)?data.getCathegories.other.join(","):''} className="form-control" id="otherCat" placeholder='separate each category with a ","' rows="1" ref={input => this.other= input}/>                            </div>
                            </div>

                            <div className='d-flex justify-content-center my-4 '>
                                <button className="btn submitBtn" type="submit"> Update Categories</button>
                            </div>


                        </form>
                        <Message payload={this.state.message} showMessage={this.state.showMessage}/>
                    </div>
                );
            }}
        </Query>
    );

    render() {
        return (
            <div className="">

                {
                    this.getCat()
                }
            </div>
        )
    }
}

export default graphql(updateCathegories,{name:'updateCatMutation'})(UpdateCat)
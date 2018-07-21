import React , {Component} from 'react'
import { Query } from "react-apollo";
import {oneItem} from '../../api/queries'
import ImageUpload from './imgUpload'
import {Updateclothes} from '../../api/mutations'
import {graphql} from 'react-apollo'
import Message from '../message'

class UpdateItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checkedGender: null,
            comingSoon : null,
            available: null,
            images : null,
            mainImg:null,
            name:'',
            productId:'',
            price:'',
            description:'',
            sizes:[],
            tag:'',
            message : null,
            showMessage: 1


        }
    }


    setForm = ( ) => (
        <Query query={oneItem} variables={{id:this.props.match.params.id}}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                const toggleState = (num) => {
                    if(num === 0){
                        if(this.state.comingSoon === null){
                            this.setState({
                                comingSoon: data.oneItem.comingSoon !== true
                            })

                        } else {
                            this.setState({
                                comingSoon: !this.state.comingSoon
                            })
                        }

                    }
                    if(num === 1){
                        if(this.state.available === null){

                            this.setState({
                                available: !data.oneItem.availability
                            });
                            console.log(this.state.available);
                        }else {
                            this.setState({
                                available: !this.state.available
                            })
                        }

                    }
                };

               const submitItem = (e) => {
                    e.preventDefault();
                    this.props.updateItemMutation({
                        variables:{
                            id: this.props.match.params.id,
                            name : this.name.value,
                            productId: this.prodId.value,
                            price: this.price.value,
                            description: this.desc.value,
                            sizes: this.sizes.value.split(','),
                            tag: this.tag.value,
                            gender: (this.state.checkedGender === null)? data.oneItem.gender :this.state.checkedGender,
                            comingSoon: (this.state.comingSoon === null )? data.oneItem.comingSoon : this.state.comingSoon,
                            availability: (this.state.available === null)? data.oneItem.availability  :  this.state.available,
                            images :  (this.state.images !== null)? this.state.images:data.oneItem.images,
                            mainImage:  (this.state.mainImg !== null)? this.state.mainImg:data.oneItem.mainImage
                        }
                    }).then(data => {

                        this.setState({message:"Item Updated "});
                        this.setState({showMessage: this.state.showMessage +1});

                    }).catch(e =>  console.log(e))
                };

                return (
                    <div className='container mt-5'>

                        <div className="row">
                            <form className="offset-md-3 col-md-6 offset-md-3" onSubmit={submitItem}>

                                <div className="form-group row">
                                    <label className="col-md-5 col-form-label" htmlFor="itemName" >Product name*</label>
                                    <div className="col-md-7">
                                        <input defaultValue={data.oneItem.name} required type="text" className=" form-control" id="itemName" placeholder="enter the name of the item" ref={input => this.name= input} />
                                    </div>
                                </div>

                                <div className="form-group row ">
                                    <label className="col-md-5 col-form-label" htmlFor="itemId" >Product ID*</label>
                                    <div className="col-md-7">
                                        <input defaultValue={data.oneItem.productId} required type="text" className=" form-control" id="itemId" placeholder=" give this item a unique ID" ref={input => this.prodId= input}/>
                                    </div>
                                </div>

                                <div className="form-group row  ">
                                    <label className="col-md-5 col-form-label" htmlFor="itemId" >Price*</label>
                                    <div className="col-md-7">
                                        <input defaultValue={data.oneItem.price} required type="text" className=" form-control" id="itemId" placeholder=" give this item a unique ID" ref={input => this.price= input}/>
                                    </div>
                                </div>

                                <div className="form-group row ">
                                    <label className="col-md-5 col-form-label" htmlFor="itemId" >Description*</label>
                                    <div className="col-md-7">
                                        <textarea  defaultValue={data.oneItem.description} className="form-control" id="itemDesc" placeholder='describe the product' rows="3" ref={input => this.desc= input}/>                            </div>
                                </div>

                                <div className="form-group row  ">
                                    <label className="col-md-5 col-form-label" htmlFor="itemId" >Sizes*</label>
                                    <div className="col-md-7">
                                        <input defaultValue={data.oneItem.sizes.join(",")} required type="text" className=" form-control" id="itemId" placeholder=" give this item a unique ID" ref={input => this.sizes= input}/>
                                    </div>
                                </div>

                                <div className="form-group row  ">
                                    <label className="col-md-5 col-form-label" htmlFor="itemId" >Tags*</label>
                                    <div className="col-md-7">
                                        <input  defaultValue={data.oneItem.tag} required type="text" className=" form-control" id="itemId" placeholder=" give this item a unique ID" ref={input => this.tag= input}/>
                                    </div>
                                </div>

                                <div className="form-group d-flex justify-content-between ">

                                    <div className="form-check form-check-inline" id='itemGender'>
                                        <input  onChange={() => {this.genderCheck("m")}} checked={(this.state.checkedGender)? this.state.checkedGender === 'm' : data.oneItem.gender === 'm'} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="m" required/>
                                        <label className="form-check-label" htmlFor="inlineRadio1">Women</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input  onChange={() => {this.genderCheck("f")}} checked={(this.state.checkedGender)? this.state.checkedGender === 'f' : data.oneItem.gender === 'f'}   className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="f" required/>
                                        <label className="form-check-label" htmlFor="inlineRadio2">Men</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input  onChange={() => {this.genderCheck("x")}} checked={(this.state.checkedGender)? this.state.checkedGender === 'x' : data.oneItem.gender === 'x'}   className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="x" required/>
                                        <label className="form-check-label" htmlFor="inlineRadio3">Kids</label>
                                    </div>
                                </div>


                                <div className="form-group d-flex justify-content-around ">


                                    <div className="form-check">
                                        <input defaultValue={data.oneItem.comingSoon} checked={(this.state.comingSoon === null)? data.oneItem.comingSoon : this.state.comingSoon } onChange={ () => {toggleState(0, data.oneItem.comingSoon)}} type="checkbox" className="form-check-input" id="itemComingSoon"/>
                                        <label className="form-check-label" htmlFor="itemComingSoon">coming Soon</label>
                                    </div>

                                    <div className="form-check">
                                        <input defaultValue={data.oneItem.availability} checked={(this.state.available === null)? data.oneItem.availability : this.state.available } onChange={ () => {toggleState(1,data.oneItem.availability)}} type="checkbox" className="form-check-input" id="itemaAvailable"/>
                                        <label className="form-check-label" htmlFor="itemaAvailable">Available</label>
                                    </div>
                                </div>


                                <ImageUpload images={(this.state.images !== null)? his.state.images:data.oneItem.images } mainImg={(this.state.mainImg !== null)?this.state.mainImg:data.oneItem.mainImage} setMainImg={this.setMainImg} setImagArray={this.setImagArray} />

                                <div className='d-flex justify-content-center my-4 '>
                                    <button className="btn submitBtn" type="submit"> Add Item</button>
                                </div>


                            </form>
                        </div>
                        <Message payload={this.state.message} showMessage={this.state.showMessage}/>
                    </div>

                );
            }}
        </Query>
    );


    genderCheck = (e) => {
        this.setState({
            checkedGender: e
        });
    };



    setMainImg = (img) => {
        this.setState({mainImg:img})
    };

    setImagArray = (img) => {
        this.setState({images:img})
    };



    render(){
        return(
            <div>
                {this.setForm()}
            </div>


        )
    }
}

export default graphql(Updateclothes,{name:'updateItemMutation'})(UpdateItem)

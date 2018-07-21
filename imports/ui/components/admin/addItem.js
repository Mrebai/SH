import React , {Component} from 'react'
import ImageUpload from './imgUpload'
import {addItem} from '../../api/mutations'
import {graphql} from 'react-apollo'
import Message from '../message'

class AddItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checkedGender: 'm',
            comingSoon : false,
            available: false,
            images : [],
            mainImg:null,
            message : null,
            showMessage: 1

        }
    }

    genderCheck = (e) => {

        this.setState({
            checkedGender: e
        });
    };

    toggleState= (num) => {
        if(num === 0){
            return this.setState({
                comingSoon: !this.state.comingSoon
            })
        }


          return  this.setState({
                available: !this.state.available
            })

    };

    setMainImg = (img) => {
      this.setState({mainImg:img})
    };

    setImagArray = (img) => {
        this.setState({images:img})
    };



    submitItem = (e) => {
        e.preventDefault();
        this.props.addItemMutation({
            variables:{
                name : this.name.value,
                productId: this.prodId.value,
                price: this.price.value,
                description: this.desc.value,
                sizes: this.sizes.value.split(','),
                tag: this.tag.value,
                gender: this.state.checkedGender,
                comingSoon: this.state.comingSoon,
                availability: this.state.available,
                images :  this.state.images,
                mainImage:  this.state.mainImg
            }
        }).then(data => {
            console.log(data);
            this.setState({message:"Item Added "});
            this.setState({showMessage: this.state.showMessage +1});
        }).catch(e =>  console.log(e))
    };
    render(){
        return(
            <div className='container mt-5'>
                <div className="row">
                    <form className="offset-md-3 col-md-6 offset-md-3" onSubmit={this.submitItem}>

                        <div className="form-group row">
                            <label className="col-md-5 col-form-label" htmlFor="itemName" >Product name*</label>
                            <div className="col-md-7">
                                <input required type="text" className=" form-control" id="itemName" placeholder="enter the name of the item" ref={input => this.name= input} />
                            </div>
                        </div>

                        <div className="form-group row ">
                            <label className="col-md-5 col-form-label" htmlFor="itemId" >Product ID*</label>
                            <div className="col-md-7">
                                <input required type="text" className=" form-control" id="itemId" placeholder=" give this item a unique ID" ref={input => this.prodId= input}/>
                            </div>
                        </div>

                        <div className="form-group row  ">
                            <label className="col-md-5 col-form-label" htmlFor="itemId" >Price*</label>
                            <div className="col-md-7">
                                <input required type="text" className=" form-control" id="itemId" placeholder=" give this item a unique ID" ref={input => this.price= input}/>
                            </div>
                        </div>

                        <div className="form-group row ">
                            <label className="col-md-5 col-form-label" htmlFor="itemId" >Description*</label>
                            <div className="col-md-7">
                                <textarea className="form-control" id="itemDesc" placeholder='describe the product' rows="3" ref={input => this.desc= input}/>                            </div>
                        </div>

                        <div className="form-group row  ">
                            <label className="col-md-5 col-form-label" htmlFor="itemId" >Sizes*</label>
                            <div className="col-md-7">
                                <input required type="text" className=" form-control" id="itemId" placeholder=" give this item a unique ID" ref={input => this.sizes= input}/>
                            </div>
                        </div>

                        <div className="form-group row  ">
                            <label className="col-md-5 col-form-label" htmlFor="itemId" >Tag*</label>
                            <div className="col-md-7">
                                <input required type="text" className=" form-control" id="itemId" placeholder=" give this item a unique ID" ref={input => this.tag= input}/>
                            </div>
                        </div>

                        <div className="form-group d-flex justify-content-between ">

                            <div className="form-check form-check-inline" id='itemGender'>
                                <input  onChange={() => {this.genderCheck("m")}} checked={this.state.checkedGender === 'm'} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="m" required/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Women</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  onChange={() => {this.genderCheck("f")}} checked={this.state.checkedGender === 'f'}  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="f" required/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Men</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  onChange={() => {this.genderCheck("k")}} checked={this.state.checkedGender === 'k'}  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="k" required/>
                                <label className="form-check-label" htmlFor="inlineRadio3">Kids</label>
                            </div>
                        </div>


                        <div className="form-group d-flex justify-content-around ">


                            <div className="form-check">
                                <input checked={this.state.comingSoon} onChange={ () => {this.toggleState(0)}} type="checkbox" className="form-check-input" id="itemComingSoon"/>
                                <label className="form-check-label" htmlFor="itemComingSoon">coming Soon</label>
                            </div>

                            <div className="form-check">
                                <input checked={this.state.available} onChange={ () => {this.toggleState(1)}} type="checkbox" className="form-check-input" id="itemaAvailable"/>
                                <label className="form-check-label" htmlFor="itemaAvailable">Available</label>
                            </div>
                        </div>


                        <ImageUpload images={this.state.images} mainImg={this.state.mainImg} setMainImg={this.setMainImg} setImagArray={this.setImagArray} />

                        <div className='d-flex justify-content-center my-4 '>
                            <button className="btn submitBtn" type="submit"> Add Item</button>
                        </div>


                    </form>
                </div>
                <Message payload={this.state.message} showMessage={this.state.showMessage}/>
            </div>
        )
    }
}

export default graphql(addItem,{name:'addItemMutation'})(AddItem)

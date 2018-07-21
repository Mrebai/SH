import React, {Component} from 'react'
import SearchUi from './searchUi'
import {clothesQuery} from '../../api/queries'
import { Query } from "react-apollo";
import AdminCard from "../itemCard/adminCard"
import UserCard from "../itemCard/userCard"


class SearchRes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            gender:'u',
            minPrice:0,
            maxPrice:0,
            tags:[],
        };
        this.getParams = this.getParams.bind(this);

    }
    componentDidMount(){
        (this.props.user)? this.setState({search:this.props.search }):''
    }
    getParams = (selector,payload) => {

        if(selector === "s") {
            return this.setState({search:payload})
        }
        if(selector === "g") {
            return this.setState({gender:payload})
        }
        if(selector === "t") {
            let currentState =[payload];
            if( this.state.tags.indexOf(payload) === -1){
                return( this.setState({tags: this.state.tags.concat(currentState)}))
            }
            return(this.setState({tags: this.state.tags.filter( item => item !== payload)}))
        }
        if(selector === "min") {
            return this.setState({minPrice:payload})
        }
        if(selector === "max") {
            return this.setState({maxPrice:payload})
        }
    };


    findClothes = () => (
        <Query query={clothesQuery} variables={{gender:this.state.gender,tags:(this.state.tags),search:this.state.search,minPrice:this.state.minPrice,maxPrice:this.state.maxPrice}}>
            {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return `Error!: ${error}`;

                return (
                    <div className='row'>
                        {
                            (data.clothes.length)?
                            data.clothes.map(item =>
                            <div key={item._id} className="col-md-6">
                                {
                                    (this.props.user)? <UserCard image={item.mainImage} name={item.name} desc={item.description} price={item.price} productId={item.productId} id={item._id}/> :
                                        <AdminCard image={item.mainImage} name={item.name} desc={item.description} price={item.price} productId={item.productId} id={item._id}/>
                                }

                            </div>
                            ): <h6 className={'mt-5 itemNotFound'}> no item found in your research </h6>
                        }
                        {console.log(data) }
                    </div>
                );
            }}
        </Query>
    );

    render() {

        return (
            <div className="Search">
                {console.log(this.state.tags)}
                <div className="row">
                    <div className=" col-md-4">
                        <SearchUi setParams={this.getParams} currentParams={this.state}/>
                    </div>
                    <div className=" col-md-8">
                        {this.findClothes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchRes
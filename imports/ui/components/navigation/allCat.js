import React, {Component} from 'react'

import { Query } from "react-apollo";
import {getCathegories} from "../../api/queries"
import CatSlider from './catSlider'

class AllCat extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.setGender = this.setGender.bind(this)
    }
    setGender = (g,data) => {
        if( g === 'k'){
            return(data.kids)
        }
        if( g === 'm'){
            return(data.men)
        }
        if( g === 'f'){
            return(data.women)
        }
    };

    getGender = (g) => {
        if( g === 'k'){
            return('Kids')
        }
        if( g === 'm'){
            return('Men')
        }
        if( g === 'f'){
            return('Women')
        }
    };

    tags = ( ) => (
        <Query query={getCathegories}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (
                    <div>
                        <p className='currentLocation container'> {'Home > ' + this.getGender(this.props.match.params.gender)} </p>
                        {
                            this.setGender(this.props.match.params.gender,data.getCathegories).map((tag,key) => <CatSlider path={this.props.match.path} gender={this.props.match.params.gender} key={key} tag={tag} clothes={this.props.clothes.filter(item => item.tag === tag).filter( item => item.gender === this.props.match.params.gender )}/>)
                        }
                    </div>
                );
            }}
        </Query>
    );

    componentDidMount(){
        setUpcloudinary();
    }
    render() {
        return (
            <div className="">
                {
                    this.tags()
                }

            </div>
        )
    }
}

export default AllCat
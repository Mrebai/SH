import React, {Component} from 'react'
import Card from '../../components/itemCard/card'

class CatView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
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

    render() {
        return (
            <div className="">
                <p className='currentLocation container'> {'Home > ' + this.getGender(this.props.match.params.gender) + ' > '  + this.props.match.params.cat} </p>
                <h3 className='categoryTitle'> {this.props.match.params.cat.toUpperCase()} </h3>
                <div className="container mt-4 categoryContainer">
                    <div className="row">
                        <Card clothes={this.props.clothes} match={this.props.match}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default CatView
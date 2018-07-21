
import React , {Component} from 'react'
import {Route,Switch} from "react-router-dom"
import AllCat from "../../components/navigation/allCat";
import CatView from "../../components/navigation/catView";

class CathIndexRoute extends Component {

    render(){
        return(
            <div>


                <Switch>
                    <Route exact path={this.props.match.path +'/:gender'} render={(match) => <AllCat match={match.match}   clothes={this.props.res} /> } />
                    <Route exact path={this.props.match.path +'/:gender' + '/:cat'}  render={(match) => <CatView match={match.match}  clothes={this.props.res} /> } />
                </Switch>

            </div>
        )
    }
}

export default CathIndexRoute
import React , {Component} from 'react'
import {Route,Switch,Link} from "react-router-dom"
import SearchRes from "../../components/search/searchRes";
import AddItemRoute from './addItemRoute'
import UpdateItem from '../../components/admin/updateItem'
import UpdateTagsRoute from './updateTagRoute'
class AdminRoute extends Component {
    render(){
        return(
            <div>

                <ul className="nav justify-content-center mainNavNav">
                    <li className="nav-item">
                        <Link className="nav-link active" to={'/admin'}>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active" to={'/admin/additem'}>Add item</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to={'/admin/updatecategories'}>Update Categories</Link>
                    </li>
                    
                </ul>


                <Switch>
                    <Route path={this.props.match.path + "/addItem"} component={AddItemRoute} />
                    <Route path={this.props.match.path + "/updatecategories"} component={UpdateTagsRoute} />
                    <Route path={this.props.match.path + "/update/:id"} component={UpdateItem} />
                    <Route path={this.props.match.path}  component={SearchRes} />} />
                </Switch>
            </div>
        )
    }
}

export default AdminRoute
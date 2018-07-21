import React from 'react'
import {Route} from "react-router-dom"
import Details from '../../components/details'
export default ProductRoute = ({match}) => {
    return (
        <div className="">
            <Route exact path={match.path+ '/:id'} component={Details} />
        </div>
    )
}
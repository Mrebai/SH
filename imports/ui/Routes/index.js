ximport React from 'react'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
import Home from './home'
import {clothesQuery} from '../api/queries'
import NavBar from '../components/navbar'
import signUpRoute from './signUp'
import AdminRoute from './admin'
import CathIndexRoute from './cathegories'
import ProductRoute from './product'
import MyCartRoute from './cart'
import SearchRoute from './search'
import Footer from '../components/footer'
import Page404 from '../components/404/pageNotFound'
import { Query } from "react-apollo";

export default Routes = ({client,id}) => {

     allClothes = ( ) => (
        <Query query={clothesQuery}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (
                    <BrowserRouter>
                        <div>
                            <NavBar/>
                            <Switch>
                                <Route exact path={"/"} render={(match) =>  <Home match={match.match} data={data.clothes}/>}  />
                                <Route path={"/signup"} component={signUpRoute} />
                                <Route path={"/admin"} component={AdminRoute} />
                                <Route path={"/product"} component={ProductRoute} />
                                <Route path={"/cart"} component={MyCartRoute} />
                                <Route path={"/about"} component={MyCartRoute} />
                                <Route path={"/search/:sch?"} component={SearchRoute} />
                                <Route path={"/clothes"}  render={(match) =>  <CathIndexRoute match={match.match} res={data.clothes}/>}  />
                                <Route component={Page404} />
                            </Switch>
                            <Footer/>

                        </div>


                    </BrowserRouter>
                );
            }}
        </Query>
    );

    return(
       <div>
           {
               allClothes()
           }
       </div>

    )
}
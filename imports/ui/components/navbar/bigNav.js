import  React,{Component} from 'react'
import {ThemeContext} from '../../context';
import {Link, withRouter} from 'react-router-dom'

class BigNav extends Component {

    searchResNav = (e) => {
        e.preventDefault();
        this.props.history.push('/search/' + this.search.value);

    };
render(){

    return(
        <ThemeContext.Consumer>
            {theme => {

                return  (
                    <div >
                        {console.log(theme)}
                        <nav className=" mx-0 mx-md-3 mx-lg-5  navbar navbar-expand-xl navbar-light bg-light">
                            <Link className="navbar-brand" to={'/'}><p>SH</p></Link>

                            <nav className="nav mr-auto mainNavNav">
                                <Link  className="nav-link " to={"/clothes/f"}>Women</Link>
                                <Link className="nav-link" to={"/clothes/m"}>Men</Link>
                                <Link className="nav-link" to={"/clothes/k"}>Kids</Link>
                                <Link className="nav-link " to={"/about"}>about</Link>

                            </nav>

                            {
                                (theme.user)?
                                    <nav className="    nav ml-auto mainNavNav secondNav">
                                        <a onClick={() => this.props.toggleView(true)} className="nav-link navUserName" style={{color:'#f68236'}} href="#"> <i className="far fa-user-circle"></i> {theme.userName}</a>
                                        <Link className="nav-link " to={'/cart'}> <i className="fas fa-shopping-basket"></i> Basket {'(' + this.props.cart + ')'} </Link>
                                        <Link className="nav-link " to={'/admin'}> Admin Panel</Link>
                                        <a className="nav-link " onClick={() => { Meteor.logout(); this.props.client.resetStore() }} href="#">   <i className="fas fa-sign-out-alt"></i> </a>
                                        <form onSubmit={this.searchResNav} className="form-inline searchContainer  my-0">
                                            <input ref={(input) => this.search = input}  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                            <button type='submit' className="btn"><i className="fas fa-search"></i></button>

                                        </form>

                                    </nav>:
                                    <nav className="  nav ml-auto mainNavNav secondNav align-self-center">
                                        <a onClick={() => this.props.toggleView(true)} className="nav-link align-self-center " href="#"> <i className="far fa-user-circle"></i> Log In</a>
                                        <a className="nav-link align-self-center" href="#"> <i className="fas fa-user-plus"></i> Register</a>

                                        <form onSubmit={this.searchResNav} className=" align-self-center form-inline searchContainer my-2 my-0">
                                            <input ref={(input) => this.search = input} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                            <button type='submit' className="btn"><i className="fas fa-search"></i></button>
                                        </form>
                                    </nav>

                            }



                        </nav>
                    </div>

                )
            }


            }

        </ThemeContext.Consumer>

        )
    }
}

export default withRouter(BigNav)
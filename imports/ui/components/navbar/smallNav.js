import React, {Component}   from 'react'
import {ThemeContext} from '../../context';
import {Link,withRouter} from 'react-router-dom'
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem } from 'reactstrap';
class SmallNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    searchResNav = (e) => {
        e.preventDefault();
        this.props.history.push('/search/' + this.search.value);

    };

    render(){
        return(
            <ThemeContext.Consumer>
                {theme => {

                    return  (
            <div>
                <Navbar color="light" light expand="lg">
                    <Link className="navbar-brand" to={"/"} ><p>SH</p></Link>
                    {
                        (theme.user)?
                            <nav className="    nav ml-auto mainNavNav secondNav">
                                <a onClick={() => this.props.toggleView(true)} className="nav-link navUserName " style={{color:'#f68236'}} href="#"> <i className="far fa-user-circle"></i> {theme.userName}</a>
                                <Link className="nav-link " to={'/cart'}> <i className="fas fa-shopping-basket"></i> { '(' + this.props.cart + ')'} </Link>
                                <Link className="nav-link " to={'/admin'}> Admin Panel </Link>
                                <a className="nav-link " onClick={() => { Meteor.logout(); this.props.client.resetStore() }} href="#">   <i className="fas fa-sign-out-alt"></i> </a>

                            </nav>:
                            <nav className="  nav ml-auto mainNavNav secondNav align-self-center">
                                <a onClick={() => this.props.toggleView(true)} className="nav-link align-self-center " href="#"> <i className="far fa-user-circle"></i> Log In</a>
                                <a className="nav-link align-self-center" href="#"> <i className="fas fa-user-plus"></i> </a>


                            </nav>

                    }
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mainNavNav" navbar>
                            <NavItem>
                                 <Link className={"nav-link"} to={"/clothes/f"}>Women</Link>
                            </NavItem>
                            <NavItem>
                                <Link className={"nav-link"} to={"/clothes/m"}>Men</Link>
                            </NavItem>
                            <NavItem>
                                <Link className={"nav-link"} to={"/clothes/k"}>Kids</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink>about</NavLink>
                            </NavItem>
                            <NavItem>
                                <form  onSubmit={this.searchResNav} className="form-inline searchContainer  my-0">
                                    <input ref={(input) => this.search = input} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button type='submit' className="btn"><i className="fas fa-search"></i></button>
                                </form>
                            </NavItem>


                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
                    )}}
            </ThemeContext.Consumer>
        )
    }
}

export default withRouter(SmallNav)
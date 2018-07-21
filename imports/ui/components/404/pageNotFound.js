import React from 'react'
import {withRouter} from 'react-router-dom'

const Page404 = ({history}) => {
    let search = '';
    const searchRes = (e) => {
        e.preventDefault();
        history.push('/search/' + search.value);

    };
    return (
        <div className="row justify-content-md-center">
            <div className="col col-lg-8 container404">
                <h6 className="display-3">404 Page Not Found</h6>
                <p className="lead">looking for something? try searching for it</p>
                <nav className="  nav m-auto mainNavNav secondNav d-flex justify-content-center nav404">
                    <form onSubmit={searchRes} className=" align-self-center form-inline searchContainer my-2 my-0">
                        <input ref={(input) => search = input} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button type='submit' className="btn"><i className="fas fa-search"></i></button>
                    </form>
                </nav>
            </div>
        </div>
    )
};export default withRouter(Page404)
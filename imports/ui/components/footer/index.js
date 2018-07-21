import React from 'react'
import {Link} from 'react-router-dom'
export default Footer = () => {
    return (
        <div className='container footerContainer mt-5'>
            <div className="row">
                <ul className="list-group list-group-flush col-md-3">
                    <li className="list-group-item footerHead">Collections</li>
                    <li className="list-group-item footerItem"> <Link to={'/clothes/f'}> Women </Link> </li>
                    <li className="list-group-item footerItem"> <Link to={'/clothes/m'}> Men </Link> </li>
                    <li className="list-group-item footerItem"> <Link to={'/clothes/k'}> Kids </Link> </li>
                </ul>

                <ul className="list-group list-group-flush col-md-3">
                    <li className="list-group-item footerHead"> SITE </li>
                    <li className="list-group-item footerItem"> <Link to={'/clothes/k'}> Terms Of Service </Link> </li>
                    <li className="list-group-item footerItem"> <Link to={'/clothes/k'}> Privacy Policy </Link></li>
                    <li className="list-group-item footerItem"> <Link to={'/clothes/k'}> Copyright Policy </Link> </li>
                </ul>

                <ul className="list-group list-group-flush col-md-3">
                    <li className="list-group-item footerHead">  SHOP  </li>
                    <li className="list-group-item footerItem"> <Link to={'/clothes/k'}> About Us </Link> </li>
                    <li className="list-group-item footerItem"> <Link to={'/clothes/k'}> Shopping method </Link></li>
                    <li className="list-group-item footerItem"> <Link to={'/clothes/k'}> Contact </Link> </li>
                </ul>

                <ul className="list-group list-group-flush col-md-3">
                    <li className="list-group-item footerHead"> Social  </li>
                    <li className="list-group-item footerItem footerText"> <p> Shoper is made with love in Warsaw,
                        2014 © All rights reserved. El Passion </p> </li>
                    <li className="list-group-item d-flex justify-content-around footerSocial">
                        <button className="btn"> <i className="fab fa-facebook-f"></i> </button>
                        <button className="btn"> <i className="fab fa-twitter"></i></button>
                        <button className="btn"> <i className="fab fa-instagram"></i>   </button>
                    </li>

                </ul>
            </div>
        </div>

    )
}
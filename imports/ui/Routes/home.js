import React from 'react'
import {ThemeContext} from '../context';
import { Query } from "react-apollo";
import {clothesQuery} from '../api/queries'
import Suggestions from '../components/suggestions'

export default Home = (props) => {


    return(
        <ThemeContext.Consumer>
            {theme => {
                console.log(theme.user);
              return  (
                  <div className="container">

                      <div className='home row'>
                          <div className="firstHalf col-md-6 row">
                              <div className="comp1 col-md-6">
                                  <button className="btn"></button>
                                  <p className='homePara'>HEATHER GREY <br/> BASICS</p>
                              </div>
                              <div className="comp2 col-md-6">
                                  <div className='comp2_1'>
                                      <div>
                                          <div className='TwitterHome'>
                                              <p  className='TwitterHome1' > <i className="fab fa-twitter"></i> <br/> </p>
                                              <p  className='TwitterHome2' > Opening Ceremony @IndonesiaFW tomorrow, PMers! Are you ready for the biggest fashion movement in </p>
                                              <p  className='TwitterHome3' >@PuspitaMarthaID </p>
                                          </div>

                                      </div>
                                  </div>
                                  <div className='comp2_2'>
                                      <button className="btn"></button>
                                      <p className='homePara'>CHECK TYLORS</p>
                                  </div>
                              </div>

                              <div className="comp3  col-md-12 row">
                                  <div className='col-md-6 comp3_1'>  <button className="btn"></button> </div>
                                  <div className='col-md-6 comp3_2'> <p className='homePara' > <i className="fas fa-arrow-left"></i> <br/>  <span>JOXAN HAT</span>  <br/>   <span className='secondParHome'>BEANIE HAT</span></p></div>
                              </div>
                          </div>

                          <div className="secondHalf col-md-6 row">
                              <div className="comp4 row col-md-12">
                                  <div className='col-md-6 comp4_1'>  <button className="btn"></button> </div>
                                  <div className='col-md-6 comp4_2'><p className='homePara' > <i className="fas fa-arrow-left"></i> <br/>  <span>ELEGANT SHOES</span>  <br/>   <span className='secondParHome'>BRAINDED LEATHER</span></p></div>
                              </div>

                              <div className="comp5 col-md-6">
                                  <div className='comp5_1'>
                                      <div className='TwitterHome'>
                                          <p  className='TwitterHome1' > <i className="fab fa-twitter"></i> <br/> </p>
                                          <p  className='TwitterHome2' > Girls, Girls, Girls: A Look Back at 50 Years of the Pirelli Calendar </p>
                                          <p  className='TwitterHome3' >@Vogue</p>
                                      </div>
                                  </div>
                                  <div className='comp5_2'>
                                      <button className="btn"></button>
                                      <p className='homePara'>BASIC BLAZER</p>
                                  </div>
                              </div>

                              <div className="comp6 col-md-6">
                                  <button className="btn"></button>
                                  <p className='homePara'>JEANS FOR  <br/> ADVENTURE</p>
                              </div>
                          </div>
                          </div>




                      <div>
                          <Suggestions data={props.data}/>
                      </div>
                      </div>
                    )
                }


            }

        </ThemeContext.Consumer>
    )
}
import React from 'react'
import ReactSlider from 'react-slider'
import { Query } from "react-apollo";
import {getCathegories} from '../../api/queries'
// import 'rc-slider/assets/index.css';
// import 'rc-tooltip/assets/bootstrap.css';
//
// import Tooltip from 'rc-tooltip';
// import Slider from 'rc-slider';

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
// const Handle = Slider.Handle;
 const cathegories = ['coat','pants','shirt','hats'];
// const handle = (props) => {
//     const { value, dragging, index, ...restProps } = props;
//
//
//     return (
//         <Tooltip
//             prefixCls="rc-slider-tooltip"
//             overlay={value}
//             visible={dragging}
//             placement="top"
//             key={index}
//         >
//             <Handle value={value + "£"} {...restProps} />
//
//         </Tooltip>
//     );
// };
//

export default SearchUi = ({setParams,currentParams}) => {

    getVals = (e) => {

        setParams('min',e[0]);
        setParams('max',e[1])
    };

    changeselectedStryle = (arr,comp) => {

            const newArr =    arr.indexOf(comp );
            if (newArr === -1){
                return {backgroundColor:"#FFFFFF" , color:"#000000" }
            }
            return {backgroundColor:"#f68236", color:"#FFFFFFF"}


    };

    changeIntervalColor = (val) => {
        const bgColorOp = val/500;
        return {backgroundColor:'rgba(246, 130, 54,'+ bgColorOp +')'}
    };
    sliderVal = (e) => {
        setParams('min',e[0]);
        setParams('max',e[1])
    };

    getCat = ( ) => (
        <Query query={getCathegories}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return (
                    <div>
                        <p className='advSearchMsg'> Advanced Search</p>
                        <div  className="advSearchCont">
                            <input value={currentParams.search} onChange={(e) => {setParams('s',e.target.value)}} className="form-control navSearch mx-auto" placeholder="Search" aria-label="Search"/>


                            <div className="form-group flex-wrap d-flex justify-content-center mx-1  mt-1 ">
                                <div className="form-check form-check-inline">
                                    <input  onChange={() => {setParams("g","u")}} checked={currentParams.gender === "u"}  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="x" required/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">Undefined</label>
                                </div>

                                <div className="form-check form-check-inline" id='itemGender'>
                                    <input  onChange={() => {setParams("g","m")}} checked={currentParams.gender === 'm'} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="m" required/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Men</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input  onChange={() => {setParams("g","f")}} checked={currentParams.gender=== 'f'}  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="f" required/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Women</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={() => {setParams("g","k")}} checked={currentParams.gender === 'k'}  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="k" required/>
                                    <label className="form-check-label" htmlFor="inlineRadio4">Kids</label>
                                </div>

                            </div>

                            <p className='advSearchMsg'> Tags</p>
                            <ul className="list-group tagsContainer">
                                {
                                    (currentParams.gender === "u" || currentParams.gender === "f" )? <p className='tagTitle'>Women</p>: null
                                }

                                {
                                    (currentParams.gender === "u" || currentParams.gender === "f" )? data.getCathegories.women.map((cath,key )=>
                                        <li className="list-group-item"  key={key}   style={ changeselectedStryle(currentParams.tags,cath)}  className=' btn optionSlelect' onClick={() => {setParams("t",cath  + '')}}  > {cath} </li>
                                    ): null
                                }

                                {
                                    (currentParams.gender === "u" || currentParams.gender === "m" )? <p className='tagTitle'>Men</p>: null
                                }

                                {
                                    (currentParams.gender === "u" || currentParams.gender === "m" )? data.getCathegories.men.map((cath,key )=>
                                        <li className="list-group-item"  key={key}   style={ changeselectedStryle(currentParams.tags,cath)}  className=' btn optionSlelect' onClick={() => {setParams("t",cath  + '')}}  > {cath} </li>
                                    ): null
                                }

                                {
                                    (currentParams.gender === "u" || currentParams.gender === "k" )? <p className='tagTitle'>Kids</p>: null
                                }

                                {
                                    (currentParams.gender === "u" || currentParams.gender === "k" )? data.getCathegories.kids.map((cath,key )=>
                                        <li className="list-group-item"  key={key}   style={ changeselectedStryle(currentParams.tags,cath)}  className=' btn optionSlelect' onClick={() => {setParams("t",cath  + '')}}  > {cath} </li>
                                    ): null
                                }
                                    <p  className='tagTitle' >Other</p>

                                {
                                    data.getCathegories.other.map((cath,key )=>
                                        <li className="list-group-item"  key={key}   style={ changeselectedStryle(currentParams.tags,cath)}  className=' btn optionSlelect' onClick={() => {setParams("t",cath  + '')}}  > {cath} </li>
                                    )
                                }
                            </ul>


                            <p className='advSearchMsg'> Price Range</p>
                            <ReactSlider className="my-1 mt-2  allBar" barClassName='activeBar'  max={500} min={1} onChange={(getValue) => sliderVal(getValue)} withBars={true} >
                                <div className="my-handle"> </div>
                                <div className="my-handle"></div>

                            </ReactSlider>
                            <div className='d-flex flex-row current-interval'>
                                <div  style={changeIntervalColor(currentParams.minPrice )} className="Interval w-50">
                                    <p>
                                        {currentParams.minPrice }
                                    </p>

                                </div>
                                <div  style={changeIntervalColor(currentParams.maxPrice )}  className="Interval w-50">
                                    <p>
                                        {currentParams.maxPrice }
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    );

    return(
        <div>

            {this.getCat()}
        </div>


    )
}
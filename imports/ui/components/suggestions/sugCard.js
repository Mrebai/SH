import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class SugCard extends Component {
    constructor(props) {
        super(props);
        this.state = {show:"none"}
    }
    hideShow(e){
        this.setState({show:e})
    };

    render() {
        return (
            <div style={{backgroundImage:this.props.img,backgroundSize:'150px auto'}} className='imgSlideContainer' onMouseEnter={() => this.hideShow('block')}  onMouseLeave={() => this.hideShow('none')} >
                <button onClick={() => this.props.history.push('/product/' + this.props.id)} className={"btn btnCover  " + this.state.show }>  <i className="fas fa-eye"></i> </button>
            </div>
        )
    }
}

export default withRouter(SugCard)
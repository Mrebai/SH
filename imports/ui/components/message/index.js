import React,{Component} from 'react'

class Message extends Component{
    constructor(props){
        super(props);
        this.state = {
            payload: null,
            show:'',
            block: false


        };


    }

    componentDidUpdate(){
        if(!this.state.block && this.state.payload){
            const myVar = () => setTimeout(function() {  this.setState({show:''}) ; this.setState({block:false}) }.bind(this), 3000);
            (this.state.show === 'messageContainer' )? myVar() :{};
            setTimeout(function() {  this.setState({show:''}) ; this.setState({block:false}) }.bind(this), 5000);
            this.setState({block:true});
        }



    }

    hideMessage= () => {
        this.setState({show:false})
    };


    static getDerivedStateFromProps(nextProps, prevState) {

        // Store prevUserId in state so we can compare when props change.
        // Clear out any previously-loaded user data (so we don't render stale stuff).


      if(nextProps.showMessage !== prevState.showMessage && prevState.show !==2)

            return{
                    payload: nextProps.payload,
                    showMessage: nextProps.showMessage,
                    show : (nextProps.payload)?'msgAnim':'',

                };

        return{

        }


        // No state update necessary

    }


    render(){
        return(


            <div className={this.state.show + ' messageContainer  container'}>
                <p> {this.state.payload}</p>
            </div>


        )
    }

}

export default Message
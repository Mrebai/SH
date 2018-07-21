import React,{Component} from "react";
import Routes from './Routes'
import {ThemeContext} from './context';
import './css/styleSheet.css'
import './css/resp.css'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {userQuery} from './api/queries'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    user = ( ) => (
        <Query query={userQuery}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (
                    <ThemeContext.Provider value={{width:this.state.width,user:data.user._id,userName:data.user.userName,cartLength:(data.user._id)?data.user.cart.length : 0 }}>

                        <Routes/>
                    </ThemeContext.Provider>
                );
            }}
        </Query>
    );
    render(){
    return (
        <div>
            {
                this.user()
            }
        </div>

    )

  }
}
export default App

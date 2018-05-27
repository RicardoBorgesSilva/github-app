import React, {Component} from 'react';
import './App.css';
import AppContent from "./components/AppContent";

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            userinfo : null,
            repositories : [],
            starred : [],
        }
    }

    render() {
        return (
            <AppContent
                userinfo={this.state.userinfo}
                repositories={this.state.repositories}
                starred={this.state.starred}
            />
        );
    }
}

export default App;

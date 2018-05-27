import React, {Component} from 'react';
import './App.css';
import AppContent from "./components/AppContent";
import ajax from "@fdaciuk/ajax/dist/ajax.min";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userinfo: null,
            repositories: [],
            starred: [],
        }
    }

    handleSearch(e) {
        const key = e.which || e.keyCode
        const ENTER = 13
        const value = e.target.value

        if (key === ENTER) {
            ajax().get(`https://api.github.com/users/${value}`)
                .then((result) => {
                    this.setState({
                        userinfo: {
                            username: result.name,
                            photo: result.avatar_url,
                            login: result.login,
                            repositories: result.public_repos,
                            followers: result.followers,
                            following: result.following,
                        }
                    })
                })
        }
    }

    getRepositories(e){
        ajax().get(`https://api.github.com/users/ricardo93borges/repos`)
            .then((result)=>{
                this.setState({
                    repositories:result.map((r) => {
                        return {
                            name:r.name,
                            link:r.html_url
                        }
                    })
                })
            })
    }

    getStarred(e){
        ajax().get(`https://api.github.com/users/ricardo93borges/starred`)
            .then((result)=>{
                this.setState({
                    starred:result.map((r) => {
                        return {
                            name:r.name,
                            link:r.html_url
                        }
                    })
                })
            })
    }

    render() {
        return (
            <AppContent
                userinfo={this.state.userinfo}
                repositories={this.state.repositories}
                starred={this.state.starred}
                handleSearch={(e) => this.handleSearch(e)}
                getRepositories={(e) => this.getRepositories(e)}
                getStarred={(e) => this.getStarred(e)}
            />
        );
    }
}

export default App;

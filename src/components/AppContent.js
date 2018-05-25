import React, {Component} from 'react';
import Search from "./Search";
import UserInfo from "./UserInfo";
import Repositories from "./Repositories";
import Actions from "./Actions";

export default class AppContent extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="app">

                <Search/>

                <UserInfo/>

                <Actions/>

                <Repositories
                    className={'repos'}
                    title={'Repositórios'}
                    repositories={[{name:'Repository A', link:'#'}]}
                />

                <Repositories
                    className={'starred'}
                    title={'Favoritos'}
                    repositories={[{name:'Repository A', link:'#'}]}
                />

            </div>
        )
    }
}


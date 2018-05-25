import React, {Component} from 'react';

export default class UserInfo extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='user-info'>
                <img src='https://avatars3.githubusercontent.com/u/10882288?v=4' width='120'/>
                <h1>
                    <a href='http://github.com/ricardo93borges'>
                        Ricardo Borges
                    </a>
                </h1>

                <ul className='repos-info'>
                    <li>Repositórios: 122</li>
                    <li>Seguidores: 10</li>
                    <li>Seguindo: 10</li>
                </ul>
            </div>
        )
    }
}


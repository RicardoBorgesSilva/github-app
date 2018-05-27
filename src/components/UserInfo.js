import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppContent from "./AppContent";

export default class UserInfo extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='user-info'>
                <img src={this.props.userinfo.photo} width='120'/>
                <h1>
                    <a href={`http://github.com/${this.props.userinfo.login}`}>
                        {this.props.userinfo.username}
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

UserInfo.propTypes = {
    userinfo: PropTypes.isRequired,
}


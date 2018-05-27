import React, {Component} from 'react';
import Search from "./Search";
import UserInfo from "./UserInfo";
import Repositories from "./Repositories";
import Actions from "./Actions";
import PropTypes from 'prop-types';

export default class AppContent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">

                <Search/>

                {!!this.props.userinfo && <UserInfo userinfo={this.props.userinfo}/>}
                {!!this.props.userinfo && <Actions/>}

                {!!this.props.repositories.length &&
                    <Repositories
                        className={'repos'}
                        title={'Repositórios'}
                        repositories={this.props.repositories}
                    />
                }

                {!!this.props.starred.length &&
                    <Repositories
                        className={'starred'}
                        title={'Favoritos'}
                        repositories={this.props.starred}
                    />
                }

            </div>
        )
    }
}

AppContent.propTypes = {
    repositories: PropTypes.array,
    starred: PropTypes.array
}

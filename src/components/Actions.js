import React, {Component} from 'react';

export default class Actions extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='actions'>
                <button onClick={this.props.getRepositories}>Ver repositórios</button>
                <button onClick={this.props.getStarred}>Ver favoritos</button>
            </div>
        )
    }
}


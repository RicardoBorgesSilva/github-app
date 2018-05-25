import React, {Component} from 'react';

export default class Actions extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='actions'>
                <button>Ver repositórios</button>
                <button>Ver favoritos</button>
            </div>
        )
    }
}


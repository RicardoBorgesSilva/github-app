import React, {Component} from 'react';

export default class Search extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='search'>
                <input type='search' placeholder='Enter user name'/>
            </div>
        )
    }
}


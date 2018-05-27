import React, {Component} from 'react';
import ajax from '@fdaciuk/ajax'

export default class Search extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='search'>
                <input
                    type='search'
                    placeholder='Enter user name'
                    onChange={(e)=>{
                        //console.log('change', e.target.value)
                    }}
                    onKeyUp={(e)=>{
                        const key = e.which || e.keyCode
                        const ENTER = 13
                        const value = e.target.value

                        if(key === ENTER){
                            ajax().get(`https://api.github.com/users/${value}`)
                                .then((result) => {
                                    console.log(result)
                                })
                        }
                    }}
                />
            </div>
        )
    }
}


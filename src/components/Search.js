import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='search'>
        <input
          type='search'
          placeholder='Enter user name'
          onKeyUp={this.props.handleSearch}
          disabled={this.props.isDisabled}
        />
      </div>
    )
  }
}

Search.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

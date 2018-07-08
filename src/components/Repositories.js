import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Repositories extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={this.props.className}>
        <h2>{this.props.title}</h2>
        {this.props.repositories.map((r, i) => {
          return <li key={i}><a href={r.link}>{r.name}</a></li>
        })}
      </div>
    )
  }
}

Repositories.defaultProps = {
  className: ''
}

Repositories.propTypes = {
  className: PropTypes.string,
  title: PropTypes.isRequired,
  title: PropTypes.string,
  repositories: PropTypes.array
}

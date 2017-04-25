import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import _ from 'lodash'


class Search extends Component {
  constructor(props) {
    super(props)
    this.onChange = _.debounce(this.props.onChange, 300)
  }
  render () {
    return (
      <FormGroup controlId="formBasicText">
        <FormControl type="text" placeholder={this.props.placeholder} onChange={(e) => this.onChange(e.target.value) } />
      </FormGroup>
    )
  }
}

Search.defaultProps = {
  placeholder: ''
}

export default Search

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import classNames from 'classnames'

class ResultBox extends Component {
  render () {
    const {title, image, onClick} = this.props
    return (
      <Col className={classNames('result-box', 'show-grid', {'clickable': !!onClick})} md={3} sm={4} onClick={onClick}>
        <div className="title">
          {title}
        </div>
        <div className="image">
          <img src={image} />
        </div>
      </Col>
    )
  }
}

export default ResultBox

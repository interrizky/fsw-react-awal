import React from 'react'
import { Col } from 'react-bootstrap'


class BoxGambar extends React.Component {
  render() {
    return(
      <Col className="box-left col-12 col-sm-12 col-md-6 col-lg-6 p-0">
        <img src={require('../Assets/images/product-detail.jpg')} className="w-100 h-100" alt="Details" />
      </Col>
    )
  }
}

export default BoxGambar
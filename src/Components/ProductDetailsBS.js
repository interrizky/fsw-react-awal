import React from 'react'
import { Row } from 'react-bootstrap'

import BoxGambar from './BoxGambar'
import BoxTulisan from './BoxTulisan'

class ProductDetailsBS extends React.Component {
  render() {
    return(
      <Row className="productDetails">
        <BoxGambar />
        <BoxTulisan />
      </Row>
    )
  }
}

export default ProductDetailsBS
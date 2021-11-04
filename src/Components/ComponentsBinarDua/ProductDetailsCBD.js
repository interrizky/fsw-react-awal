import React from 'react'
import { Col } from 'react-bootstrap'

/* import CSS */
// import styles from '../../Assets/BinarDua/css/style.module.css'

import BoxGambar from '../BoxGambar'
import BoxTulisan from '../BoxTulisan'

class ProductDetailsCBD extends React.Component {
  render() {
    return(
      <Col className="productDetails" style={{ 
        "paddingTop" : "20px",
        "display" : "flex"
       }}>
        <BoxTulisan />
        <BoxGambar />
      </Col>
    )
  }
}

export default ProductDetailsCBD
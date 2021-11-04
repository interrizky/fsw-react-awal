import React from 'react'
import { Row, Col } from 'react-bootstrap'

import styling from '../../Assets/BinarDua/css/style.module.css'

class CheckoutCBD extends React.Component {
  render() {
    return(
      <Row className={styling.checkout}>
        <Col className="imej" md="2">
          <img src={require('../../Assets/BinarDua/images/product-4.jpeg')} className="w-100 h-100" alt="Product"></img>
        </Col>
        <Col className="shadow-lg rounded deskripsi p-5" md="10">
          <Col className="baris-satu">
            <Col md="4"> <h3>PRICE</h3> </Col>
            <Col md="8"></Col>
          </Col>
          <br/>
          <br/>
          <Col className="baris-dua">
            <Col md="4">List Package : </Col>
            <Col md="8"></Col>
          </Col>
          <Col className="baris-tiga" style={{ "display": "flex" }}>
            <Col md="6" className="list-nama">
              <ol className="listing-nama" id="listing-nama">
                <li>Plant Bucket 1 So Awesome</li>
                <li>Sun Flower Bucket 2 Amaze</li>
              </ol>              
            </Col>
            <Col md="6" className="list-harga">
              <ul className="listing-harga" id="listing-harga" style={{"listStyleType": "none", "textAlign": "right"}}>
                <li>Rp 340.000</li>
                <li>Rp 570.000</li>
              </ul>
            </Col>
          </Col>
          <br/>
          <Col className="baris-empat d-flex">
            <Col md="4">TOTAL</Col>      
            <Col md="8" style={{ "textAlign": "right" }}>Rp 910.000</Col>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default CheckoutCBD
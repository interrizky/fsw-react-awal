import React from 'react'
import { Row, Col } from 'react-bootstrap'

class ListPicturesCBD extends React.Component {
  render() {
    return(
      <Row className="pictures-list">
        <Col className="foto" style={{ "display": "flex", "paddingLeft": "75px", "paddingRight": "75px" }}>
          <Col sm="6" md="3" lg="3" style={{ "padding": "15px" }}>
            <img style={{ "borderRadius": "25px" }} className="w-100 h-100" src={require('../../Assets/BinarDua/images/product-1.jpg')} alt="Product genap" />
          </Col>
          <Col sm="6" md="3" lg="3" style={{ "padding": "15px" }}>
            <img style={{ "borderRadius": "25px" }} className="w-100 h-100" src={require('../../Assets/BinarDua/images/product-2.jpg')} alt="Product ganjil" />
          </Col>
          <Col sm="6" md="3" lg="3" style={{ "padding": "15px" }}>
            <img style={{ "borderRadius": "25px" }} className="w-100 h-100" src={require('../../Assets/BinarDua/images/product-1.jpg')} alt="Product genap" />
          </Col>
          <Col sm="6" md="3" lg="3" style={{ "padding": "15px" }}>
            <img style={{ "borderRadius": "25px" }} className="w-100 h-100" src={require('../../Assets/BinarDua/images/product-2.jpg')} alt="Product ganjil" />
          </Col>                                 
        </Col>     
      </Row>      
    )
  }
}

export default ListPicturesCBD
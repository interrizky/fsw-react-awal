import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

/* manual styling */
import '../Assets/css/styles.css'
/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbarx extends React.Component {
  render(){
    return(
      <Row className="navbar">
        <Col className="logo" md="4">
            <a className="text-logo" style={{"marginLeft": "35px", "fontWeight": "bold"}} href="/flower">LOGO</a>
        </Col>
        <Col className="menu" md="8">
            <p className="text-navbar" style={{ "marginRight": "20px", "marginBottom": "0" }}>ABOUT</p>
            <p className="text-navbar" style={{ "marginRight": "20px", "marginBottom": "0" }}>PRODUCT</p>
            <p className="text-navbar" style={{ "marginRight": "20px", "marginBottom": "0" }}>ARTICLES</p>
            <Button variant="outline-light" type="button" style={{ "marginRight": "20px" }}>SUBSCRIBE</Button>
        </Col>
      </Row>
    )
  }
}

export default Navbarx


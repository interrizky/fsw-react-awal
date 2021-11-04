import React from 'react'
import { Row, Col } from 'react-bootstrap'
import BgImage from '../Assets/images/jumbotron.png'

/* manual styling */
import '../Assets/css/styles.css'
/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

class Bannerx extends React.Component {
  render(){
    return(
      <Row className="banner">
        <Col className="wrapper-banner image-banner" style={{ "backgroundImage": `url(${BgImage})` }}>
          <Col className="wrapper-text-banner">
            <h1 className="title-banner" style={{"fontSize": "48px"}}>
              All Products Here
            </h1>
            <p className="subtitle-banner" style={{"fontSize": "18px"}}>
              We brings our best product to you
            </p>          
          </Col>
        </Col>
      </Row>
    )
  }
}

export default Bannerx
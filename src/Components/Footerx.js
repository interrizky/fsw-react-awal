import React from 'react'
import { Row, Col } from 'react-bootstrap'

/* manual styling */
import '../Assets/css/styles.css'
/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

class Footerx extends React.Component {
  render(){
    return(
      <Row className="footer">
        <Col className="menu-footer">
          <p style={{ "marginRight": "15px" }}>Home</p>
          <p style={{ "marginRight": "15px" }}>Articles</p>
          <p style={{ "marginRight": "15px" }}>About</p>
        </Col>
      </Row>    
    )
  }
}

export default Footerx
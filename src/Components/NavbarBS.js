import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

/* manual styling */
import style_challenge from '../Assets/css/style_challenge.module.css'

class NavbarBS extends React.Component {
  render(){
    return(
      <Row className={style_challenge.navbar}>
        <Col className={style_challenge.logo} md="4">
            <a className={style_challenge.textLogo} style={{"marginLeft": "35px", "fontWeight": "bold"}} href="https://google.com">LOGO</a>
        </Col>
        <Col className={style_challenge.menu} md="8">
            <p className="text-navbar" style={{ "marginRight": "20px", "marginBottom": "0" }}>ABOUT</p>
            <p className="text-navbar" style={{ "marginRight": "20px", "marginBottom": "0" }}>ARTICLES</p>
            <Button variant="outline-light" type="button" style={{ "marginRight": "20px" }}>SUBSCRIBE</Button>
        </Col>
      </Row>      
    )
  }
}

export default NavbarBS
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

/* import CSS */
import styles from '../../Assets/BinarDua/css/style.module.css'

class NavbarCBD extends React.Component {
  render() {
    return(
      <Row className={styles.navbar}>
        <Col className="logo-banner" style={{ "marginTop": "15px" }} >
          <a href="/binardua" style={{ "marginLeft": "25px", "fontSize": "25px", "fontWeight": "bold" }}> LOGO </a>
        </Col>
        <div className="col-6 menu-banner">
          <ul className={styles.wrapperMenuNavbar}>
            <li>
              <a className={styles.aStyleNavbarX} href="/binardua">About</a>
            </li>
            <li>
              <a className={styles.aStyleNavbarX} href="/binardua">Article</a>
            </li>
            <Button type="button" variant="outline-dark" style={{"fontSize": "24px"}}>
              Subscribe
            </Button>
          </ul>
        </div>
      </Row>
    )
  }
}

export default NavbarCBD
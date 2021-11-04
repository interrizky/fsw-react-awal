import React from 'react'
import { Row, Col } from 'react-bootstrap'

import styles from '../Assets/css/style_challenge.module.css'

class FooterBS extends React.Component {
  render() {
    return(
      <Row className={styles.footer}>
        <Col className={styles.menuFooter}>
          <p style={{ "marginRight": "15px" }}>Home</p>
          <p style={{ "marginRight": "15px" }}>Articles</p>
          <p style={{ "marginRight": "15px" }}>About</p>          
        </Col>
      </Row>
    )
  }
}

export default FooterBS
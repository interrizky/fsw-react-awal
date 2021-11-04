import React from 'react'
import { Row, Col } from 'react-bootstrap'

/* import CSS */
import styles from '../../Assets/BinarDua/css/style.module.css'

class OpeningCBD extends React.Component {
  render() {
    return(
      <Row className={styles.opening}>
        <Col className={styles.openingGambar}>
          <img src={require('../../Assets/BinarDua/images/product-3.jpg')} className="w-100 h-100" alt="Opening"></img>
        </Col>
        <Col className="opening-text">
          <Col className={styles.wrapperOpeningTextDetails}>
            <h3 stlye={{fontFamily: "Roboto", fontSize: "48px"}}>The Articles</h3>
            <br/>   
            <p style={{fontFamily: "Roboto", fontSize: "24px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default OpeningCBD
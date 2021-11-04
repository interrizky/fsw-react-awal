import React from 'react'
import { Col } from 'react-bootstrap'

import styles from '../Assets/css/style_challenge.module.css'

class BoxTulisan extends React.Component {
  render() {
    return(
      <Col className="box-right col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center" id={styles.boxRight}>
        <Col className="wrapper-desc-details">
          <h5 className="text-center">ABOUT</h5>
          <hr className={styles.new4} />
          <br />
          <p style={{"fontStyle": "italic", "textAlign": "justify", "textJustify": "interWord", "padding": "0 50px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
        </Col>
      </Col>
    )
  }
}

export default BoxTulisan
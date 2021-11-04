import React from 'react'
import { Row, Col } from 'react-bootstrap'

class TitlePicturesCBD extends React.Component {
  render() {
    return(
      <Row className="pictures-judul">
        <Col className="judul">
          <p style={{ "textAlign": "center", "fontSize": "32px", "fontFamily": "Roboto" }}>More Images</p>
        </Col>   
      </Row>
    )
  }
}

export default TitlePicturesCBD
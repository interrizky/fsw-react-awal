import React from 'react'
import { Row, Col } from 'react-bootstrap'

import PosterImageFD from './PosterImageFD'
import DeskripsiFD from './DeskripsiFD'

class DetailsFD extends React.Component {
  render(){
    return(
      <Row className="details">
        <Col className="wrapper poster-desc col-md-12 p-5 d-flex justify-content-center">
          <PosterImageFD />
          <DeskripsiFD />
        </Col>
      </Row>      
    )
  }
}

export default DetailsFD
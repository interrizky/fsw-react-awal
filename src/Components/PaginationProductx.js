import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

class PaginationProductx extends React.Component {
  render() {
    return(
      <Row className="page-number">
        <Col className="wrapper-button-page d-flex justify-content-center"> 
          <Button id="tombol-1" className="tombol-1 btn-pagination" variant="outline-dark" style={{ "margin": "10px" }} value="1">1</Button>
        </Col>          
      </Row>      
    )
  }
}

export default PaginationProductx;
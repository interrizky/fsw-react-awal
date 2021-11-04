import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import styles from '../Assets/css/style_challenge.module.css'

class SubscribeBS extends React.Component {
  render() {
    return(
      <Row className={styles.subscription}>
        <Col className="col-12 d-flex justify-content-center align-items-center">
          <Col className="wrapper-box-subscription">
            <Col className="subscription-title">
              <h3 className="text-center">SUBSCRIBE US!</h3>
            </Col>
            <Col className="sub-title">
              <h5 className="text-center">Sign up to our newsletters</h5>
            </Col>
            <Col className="row form-group w-50 mx-auto">
              <input type="email" className="form-control" id="exampleInputEmailexampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </Col>
            <Col className="form-group text-center" style={{"marginTop": "5px"}}>
              <Button type="button" className="w-25" variant="outline-secondary">
                Submit
              </Button>
            </Col>            
          </Col>
        </Col>
      </Row>
    )
  }
}

export default SubscribeBS
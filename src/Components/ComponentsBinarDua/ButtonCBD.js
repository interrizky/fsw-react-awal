import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import styling from '../../Assets/BinarDua/css/style.module.css'

class ButtonCBD extends React.Component {
  render() {
    return(
      <Row className={styling.button}>
        <Col md="8"></Col>
        <Col md="4" className={styling.tombol} style={{ "textAlign": "right", "paddingRight": "50px" }}>
          <Button type="button" variant="success" style={{ "fontSize": "18px", "fontFamily": "Roboto", "backgroundColor": "#6cbe5e" }}>
            Buy Products
          </Button>
        </Col>
      </Row>
    )
  }
}

export default ButtonCBD
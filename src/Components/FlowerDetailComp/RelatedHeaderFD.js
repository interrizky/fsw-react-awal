import React from 'react'
import { Row } from 'react-bootstrap'

class RelatedHeaderFD extends React.Component {
  render() {
    return(
      <Row className="preambules mx-auto" style={{ "textAlign": "center", "justifyContent": "center" }} >
        <p className="preambule" style={{ "fontSize": "24px" }}>
          <i>Flowers That You May Like</i>
        </p>
      </Row>      
    )
  }
}

export default RelatedHeaderFD
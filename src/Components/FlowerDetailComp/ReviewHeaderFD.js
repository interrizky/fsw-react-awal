import React from 'react'
import { Row } from 'react-bootstrap'

class ReviewHeaderFD extends React.Component {
  render() {
    return(
      <Row className="reviewHeader mx-auto" style={{ "textAlign": "center", "justifyContent": "center" }}>
        <p className="preambule-2" style={{ "fontSize": "24px" }} >
          <i>Review</i>
        </p>
      </Row>
    )
  }
}

export default ReviewHeaderFD
import React from 'react'
import { Row } from 'react-bootstrap'

/* manual styling */
import '../Assets/css/styles.css'
/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

class JudulProductx extends React.Component {
  render(){
    return(
      <Row className="judul-search-product" style={{ "textAlign":"center" }}>
        <p className="preambule" style={{ "fontSize": "24px", "marginTop": "24px" }}>
          PRODUCTS
        </p>
      </Row>
    )
  }
}

export default JudulProductx


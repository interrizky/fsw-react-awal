import React from 'react'
import { Col, Button, Form } from 'react-bootstrap'

import PropTypes from "prop-types"
import { withRouter } from "react-router"

class DeskripsiFD extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  clickPrice(harga) {
    alert(`Total Harga : Rp ${ (Number(document.querySelector('.qty').value)*harga).toLocaleString('id-ID') }`)
  }

  render() {
    const { match } = this.props

    let nama = match.params.nama
    let harga = match.params.harga

    return(
      <Col className="teks-deskripsi col-md-8 m-3 shadow-lg rounded" style={{ 
        "alignContent": "center", 
        "alignItems": "center", 
        "textAlign": "left", 
        "backgroundColor": "lightsteelblue"
       }} >
        <Col className="deskripsi p-5">
          <h3><b>Title</b></h3>
          <Col className="isi-review text-justify">
            <p><i>Donec sit amet ante efficitur, venenatis leo nec, maximus sapien. Fusce vitae leo eu odio aliquam condimentum ut sit amet lacus. Mauris aliquam tincidunt nisl in sodales. Sed non ipsum elementum, lacinia libero sit amet, varius nisl. Aenean vel imperdiet lacus. Vestibulum et venenatis lectus, in sagittis libero. Sed massa nunc, auctor ac consectetur at, consequat eget erat. Duis hendrerit ligula vel neque vulputate consectetur. Cras blandit, neque sed interdum ornare, libero augue faucibus lectus, ac semper augue lacus id magna. Maecenas sollicitudin faucibus purus eget ullamcorper.</i></p>
          </Col>
          <h3><b>Description</b></h3>
          <Col className="isi-review text-justify">
            <p><i>Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis dictum fermentum nisi at tempus. Maecenas nec purus diam. Curabitur viverra dignissim velit, vel luctus sapien ultrices id. Nulla porttitor sollicitudin elementum. Aenean congue, lorem elementum convallis volutpat, augue felis tincidunt tellus, sed lacinia purus arcu sed mauris. Integer laoreet orci non sapien pharetra, ac porttitor risus finibus.</i></p>
          </Col>        
          <h5><b>Nama : <i>{nama}</i> </b></h5>
          <h5><b>Harga : <i>Rp {Number(harga).toLocaleString('id-ID')}</i> </b></h5>
          <Col className="wrapper-input-button d-flex">
            <Form.Control type="number" step="1" min="1" max="" name="quantity" defaultValue="1" title="Qty" className="input-text qty text" size="4" pattern="" inputMode="" style={{ "textAlign": "center", "width": "100px", "marginRight": "20px" }} />
            <Button type="button" className="pricey btn-info" onClick={() => this.clickPrice(harga) }>Buy Product? (Harga Dalam Alert)</Button>
          </Col>
          <br/>          
        </Col>
      </Col>
    )
  }
}

// export default DeskripsiFD
export default withRouter(DeskripsiFD)
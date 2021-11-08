import React from 'react'
import { Row, Col } from 'react-bootstrap'


class ReviewFD extends React.Component {
  render() {
    return(
      <Row className="review mx-5 my-2">
        <Col className="wrapper-review">
          <Col className="content" id="content">
            <Col className="nama-angka d-flex pt-2">
              <p className="col-4" style={{ "paddingLeft": "15px" }}><b>Lorem Ipsum</b></p>
              <p className="col-8"><b>6 out of 10</b></p>
            </Col>
            <Col className="isi-review text-justify" style={{ "paddingLeft": "15px", "paddingRight": "15px" }}>
              <p className="mb-2"><i>Donec sit amet ante efficitur, venenatis leo nec, maximus sapien. Fusce vitae leo eu odio aliquam condimentum ut sit amet lacus. Mauris aliquam tincidunt nisl in sodales. Sed non ipsum elementum, lacinia libero sit amet, varius nisl. Aenean vel imperdiet lacus. Vestibulum et venenatis lectus, in sagittis libero. Sed massa nunc, auctor ac consectetur at, consequat eget erat. Duis hendrerit ligula vel neque vulputate consectetur. Cras blandit, neque sed interdum ornare, libero augue faucibus lectus, ac semper augue lacus id magna. Maecenas sollicitudin faucibus purus eget ullamcorper.</i></p>
            </Col>
          </Col>
          <Col className="content" id="content">
            <Col className="nama-angka d-flex pt-2">
              <p className="col-4" style={{ "paddingLeft": "15px" }}><b>Curabitur viverra</b></p>
              <p className="col-8"><b>8 out of 10</b></p>
            </Col>
            <Col className="isi-review text-justify" style={{ "paddingLeft": "15px", "paddingRight": "15px" }}>
              <p className="mb-2"><i>Sed at tristique est, nec dignissim nibh. Aliquam dictum diam eget augue mollis luctus. Duis purus mi, interdum eget ornare ut, mattis vitae eros. Sed commodo, lectus placerat convallis rhoncus, mauris nunc finibus diam, ut pellentesque ante metus in metus. Donec sed nulla gravida, volutpat nisi et, maximus ipsum. Vestibulum scelerisque ligula eget velit ullamcorper, id dignissim tellus congue. Suspendisse convallis fermentum interdum.</i></p>
            </Col>
          </Col>
          <Col className="content" id="content">
            <Col className="nama-angka d-flex pt-2">
              <p className="col-4" style={{ "paddingLeft": "15px" }}><b>Vestibulum</b></p>
              <p className="col-8"><b>7.5 out of 10</b></p>
            </Col>
            <Col className="isi-review text-justify" style={{ "paddingLeft": "15px", "paddingRight": "15px" }}>
              <p className="mb-2"><i>Suspendisse pharetra, lorem ultrices eleifend venenatis, ligula eros iaculis dolor, quis laoreet urna arcu sed risus. Nam in volutpat massa. In in placerat ligula. Duis a euismod ex. Nullam ac urna velit. Vestibulum mattis orci eu turpis eleifend vulputate. Phasellus at dapibus augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ac felis sit amet ex vestibulum sollicitudin.</i></p>
            </Col>
          </Col>                    
        </Col>
      </Row>      
    )
  }
}

export default ReviewFD
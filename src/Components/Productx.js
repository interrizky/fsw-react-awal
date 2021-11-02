import React from 'react'
import { Row, Col } from 'react-bootstrap'


class Productx extends React.Component {
  render(){
    return(
      <Row className="judul-search-product" style={{ "textAlign":"center" }}>
        <p className="preambule" style={{ "fontSize": "24px", "marginTop": "24px" }}>
          PRODUCTS
        </p>
        <Col className="list-products">
          <Col className="kotak-wrapper wrapper-product-1 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-1" id="dsp-foreground-1">
              <img src={require('../Assets/images/pngfind-1-transparent.png').default} alt="image1" style={{ "width": "200px", "height": "175px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 1</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-2 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-2" id="dsp-foreground-2">
              <img src={require('../Assets/images/pngfind-2-transparent.png').default} alt="image2" style={{ "width": "200px", "height": "175px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 2</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-3 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-3" id="dsp-foreground-2">
              <img src={require('../Assets/images/pngfind-3-transparent.png').default} alt="image3" style={{ "width": "200px", "height": "175px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 3</p>            
            </Col>
          </Col>             

          <Col className="kotak-wrapper wrapper-product-1 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-1" id="dsp-foreground-1">
              <img src={require('../Assets/images/pngfind-1-transparent.png').default} alt="image1" style={{ "width": "200px", "height": "175px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 1</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-2 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-2" id="dsp-foreground-2">
              <img src={require('../Assets/images/pngfind-2-transparent.png').default} alt="image2" style={{ "width": "200px", "height": "175px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 2</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-3 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-3" id="dsp-foreground-2">
              <img src={require('../Assets/images/pngfind-3-transparent.png').default} alt="image3" style={{ "width": "200px", "height": "175px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 3</p>            
            </Col>
          </Col>   

          <Col className="kotak-wrapper wrapper-product-1 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-1" id="dsp-foreground-1">
              <img src={require('../Assets/images/pngfind-1-transparent.png').default} alt="image1" style={{ "width": "200px", "height": "175px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 1</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-2 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-2" id="dsp-foreground-2">
              <img src={require('../Assets/images/pngfind-2-transparent.png').default} alt="image2" style={{ "width": "200px", "height": "175px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 2</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-3 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-3" id="dsp-foreground-2">
              <img src={require('../Assets/images/pngfind-3-transparent.png').default} alt="image3" style={{ "width": "200px", "height": "175px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 3</p>            
            </Col>
          </Col>                       
        </Col>

        <Col className="page-number">
          <Col className="wrapper-button-page d-flex justify-content-center"></Col>
        </Col>
      </Row>
    )
  }
}

export default Productx


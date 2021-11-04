import React from 'react'
import { Row, Col } from 'react-bootstrap'

/* manual styling */
import '../Assets/css/styles.css'

class ListProductx extends React.Component {
  render(){
    return(
        <Row className="list-products">
          <Col className="kotak-wrapper wrapper-product-1 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-1" id="dsp-foreground-1">
              <img src={require('../Assets/images/pngfind-1-transparent.png')} alt="image1" style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 1</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-2 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-2" id="dsp-foreground-2">
              <img src={require('../Assets/images/pngfind-2-transparent.png')} alt="image2" style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 2</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-3 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-3" id="dsp-foreground-2">
              <img src={require('../Assets/images/pngfind-3-transparent.png')} alt="image3" style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 3</p>            
            </Col>
          </Col>             

          <Col className="kotak-wrapper wrapper-product-4 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-4" id="dsp-foreground-4">
              <img src={require('../Assets/images/pngfind-4-transparent.png')} alt="image4" style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 4</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-5 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-5" id="dsp-foreground-5">
              <img src={require('../Assets/images/pngfind-5-transparent.png')} alt="image5" style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 5</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-6 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-6" id="dsp-foreground-6">
              <img src={require('../Assets/images/pngfind-6-transparent.png')} alt="image6" style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 6</p>            
            </Col>
          </Col>   

          <Col className="kotak-wrapper wrapper-product-7 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-7" id="dsp-foreground-7">
              <img src={require('../Assets/images/pngfind-7-transparent.png')} alt="image7" style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 7</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-8 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-8" id="dsp-foreground-8">
              <img src={require('../Assets/images/pngfind-8-transparent.png')} alt="image8" style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 8</p>            
            </Col>
          </Col>
          <Col className="kotak-wrapper wrapper-product-9 shadow-lg rounded" md="4">
            <Col className="display-depan dsp-foreground-9" id="dsp-foreground-9">
              <img src={require('../Assets/images/pngfind-9-transparent.png')} alt="image9" style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}></img>
              <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>Bunga 9</p>            
            </Col>
          </Col>                       
        </Row>
    )
  }
}

export default ListProductx;
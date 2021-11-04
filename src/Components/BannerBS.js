import React from 'react'
import { Row, Col } from 'react-bootstrap'

// import style_challenge from '../../../../../Documents/FSW_React_Awal/src/Assets/BinarSatu/css/style_challenge.css'

import BgImageBS from '/Users/interrizky/Documents/FSW_React_Awal/src/Assets/BinarSatu/images/banner.jpg'

class BannerBS extends React.Component {
  render(){
    return(
      <Row className="banner">
        <Col md="12" className="wrapper-banner image-banner" style={{ "backgroundImage": `url(${BgImageBS})` }}>
          <Col className="wrapper-text-banner">
            <h2 className="title-h2-banner hero-judul" style={{ "fontWeight": "bold", "fontSize": "64px", "color": "black" }}> ART OF PLANT </h2>
            <p className="description-p-banner hero-subjudul" style={{ "fontSize": "18px", "color": "black" }}> ALL ABOUT ART OF NATURE </p>
          </Col>
        </Col>        
      </Row>
    )
  }
}

export default BannerBS
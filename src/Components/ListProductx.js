import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

/* manual styling */
// import styles from '../Assets/css/styles.css'

let dataImage = ["Bunga 1", "Bunga 2", "Bunga 3", "Bunga 4", "Bunga 5", "Bunga 6", "Bunga 7", "Bunga 8", "Bunga 9"]

class ListProductx extends React.Component {
  HoverImage = (event) => {
    /* dsp foreground */
    document.querySelector(`.dsp-foreground-${event.target.id}`).style.cssText += 'background-color: grey; opacity: 30%;'
    /* dsp background */
    document.querySelector(`.dsp-background-${event.target.id}`).style.cssText = 'position: relative; top: 125px'
  }

  HoverOutImage = (events) => {
    /* foreground */
    document.querySelector(`.dsp-foreground-${events.target.id}`).style.cssText = 'position: absolute;'
    /* background */
    document.querySelector(`.dsp-background-${events.target.id}`).style.cssText = 'position: relative; top: 125px; display:none'
  }

  render(){
    return(
        <Row className="listProducts" style={{
          "display": "flex",
          "flexDirection": "row",
          "justifyContent": "center",
          "alignContent": "center",
          "alignItems": "center",
          "textAlign": "center"         
        }}>
          {
            // How To Looping, but with array data
            dataImage.map((data, index) => {
                return(
                  <Col md="4" key={ index+1 } className={ `kotakWrapper wrapper-product-${index+1} shadow-lg rounded` } style={{ 
                    "backgroundColor": "#fafafa",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "textAlign": "center",
                    "flexDirection": "column",
                    "width": "350px",
                    "height": "300px",
                    "margin": "25px",                    
                  }}>
                    <Col style={{ "position": "absolute" }} className={ `display-depan dsp-foreground-${index+1}` } id={ `${index+1}` } onMouseOver={ this.HoverImage } onMouseLeave={ this.HoverOutImage } >
                      <img id={ `${index+1}` } src={ require(`../Assets/images/pngfind-${index+1}-transparent.png`) } alt={data} style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}  ></img>
                      <p id={ `${index+1}` } className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>{data}</p>
                    </Col>
                    <Col className={ `dsp-background-${index+1}` } id={ `dsp-background-${index+1}` } style={{ "position": "relative", "top": "125px", "display": "none" }}>
                      <a href="https://google.com">
                        <Button className={ `tombol-info-${index+1}` } style={{ "width": "175px", "height": "50px" }} variant='dark'>Href</Button>
                      </a>
                    </Col>                                    
                  </Col>                  
                )
            })
          }
        </Row>
    )
  }
}

export default ListProductx;
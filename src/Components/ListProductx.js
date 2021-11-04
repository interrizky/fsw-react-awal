import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

/* manual styling */
// import styles from '../Assets/css/styles.css'

let dataImage = ["Bunga 1", "Bunga 2", "Bunga 3", "Bunga 4", "Bunga 5", "Bunga 6", "Bunga 7", "Bunga 8", "Bunga 9"]

class ListProductx extends React.Component {
  HoverImage = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.relatedTarget)

    /* dsp foreground */
    // event.target.style += 'background-color: grey; opacity: 30%;'
    /* dsp background */
    // event.relatedTarget.style = 'position: relative; top: 150px'
  }

  HoverOutImage = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.relatedTarget)

    /* dsp foreground */
    // e.target.style = 'unset'
    /* dsp background */
    // e.relatedTarget.style = 'unset'
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
            // taruh event di kotakWrapper failed 
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
                    "height": "350px",
                    "margin": "25px",                    
                  }}>
                    <Col className={ `display-depan dsp-foreground-${index+1}` } id={ `dsp-foreground-${index+1}` } style={{ "position": "absolute" }} onMouseLeave={ this.HoverOutImage } onMouseOver={ this.HoverImage } >
                      <img src={ require(`../Assets/images/pngfind-${index+1}-transparent.png`) } alt={data} style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}  ></img>
                      <p className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>{data}</p>
                    </Col>
                    <Col className={ `dsp-background-${index+1}` } id={ `dsp-background-${index+1}` } style={{ "position": "relative", "top": "150px", "display": "none" }}>
                      <a href="https://google.com">
                        <Button className={ `tombol-info-${index+1}` } style={{ "width": "150px", "height": "50px" }} variant='dark'>Href</Button>
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
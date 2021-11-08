import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

/* manual styling */
// import styles from '../Assets/css/styles.css'

let dataImage = [
  {name : "Bunga 1", price : 100000}, 
  {name : "Bunga 2", price : 200000}, 
  {name : "Bunga 3", price : 300000}, 
  {name : "Bunga 4", price : 400000}, 
  {name : "Bunga 5", price : 500000}, 
  {name : "Bunga 6", price : 600000}, 
  {name : "Bunga 7", price : 700000}, 
  {name : "Bunga 8", price : 800000}, 
  {name : "Bunga 9", price : 900000} 
]

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
                  <Col style={{ "position": "absolute" }} className={ `display-depan dsp-foreground-${index+1}` } id={ `${index+1}` } onMouseOver={ this.HoverImage } onMouseOut={ this.HoverOutImage } >
                    <img id={ `${index+1}` } src={ require(`../Assets/images/pngfind-${index+1}-transparent.png`) } alt={data.name} style={{ "width": "200px", "height": "175px", "marginTop": "25px" }}  ></img>
                    <p id={ `${index+1}` } className="text-wrap" style={{"marginTop": "16px", "width": "200px"}}>{data.name}</p>
                  </Col>
                  <Col className={ `dsp-background-${index+1}` } id={ `dsp-background-${index+1}` } style={{ "position": "relative", "top": "125px", "display": "none" }}>
                    <a href={ `/flower/${index+1}/${data.price}/${data.name}` }>
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
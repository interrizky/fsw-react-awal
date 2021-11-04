import React from 'react'
import { Row, Col } from 'react-bootstrap'

/* manual styling */
import style_challenge from '../Assets/css/style_challenge.module.css'

/* import image */
import ImageOne from '../Assets/images/product-1.jpg'
import ImageTwo from '../Assets/images/product-2.jpg'
import ImageThree from '../Assets/images/product-3.jpg'

class ProductBS extends React.Component {
  render() {
    return(
      <Row className={style_challenge.product} id="product-list">
        <Col md="12" className="title-box">
          <h3 className="textCenter" style={{"fontSize": "18px", "textAlign": "center"}}>LATEST ARTICLES</h3>
          <hr className={style_challenge.new5} />
        </Col>
        <br />
        <br />
        <Col className="card-deck" id={style_challenge.cardDeck}>

          <Col className="shadow-lg bg-white rounded card" id={style_challenge.card} md="4">
            <img className="card-img-top" src={ImageOne} alt="Card Cap" />
            <br/>
            <br/>
            <Col className="card-body">
              <hr className={style_challenge.new3} />
              <br/>
              <h5 className="card-title" id={style_challenge.cardTitle}>Card title Ganjil</h5>
              <p className="card-text" id={style_challenge.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>              
            </Col>            
          </Col>

          <Col className="shadow-lg bg-white rounded card" id={style_challenge.card} md="4">
            <img className="card-img-top" src={ImageTwo} alt="Card Cap" />
            <br/>
            <br/>
            <Col className="card-body">
              <hr className={style_challenge.new3} />
              <br/>
              <h5 className="card-title" id={style_challenge.cardTitle}>Card title Genap</h5>
              <p className="card-text" id={style_challenge.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>              
            </Col>            
          </Col>          

          <Col className="shadow-lg bg-white rounded card" id={style_challenge.card} md="4">
            <img className="card-img-top" src={ImageThree} alt="Card Cap" />
            <br/>
            <br/>
            <Col className="card-body">
              <hr className={style_challenge.new3} />
              <br/>
              <h5 className="card-title" id={style_challenge.cardTitle}>Card title Ganjil</h5>
              <p className="card-text" id={style_challenge.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>              
            </Col>            
          </Col>          

        </Col>        
      </Row>      
    )
  }  
}

export default ProductBS
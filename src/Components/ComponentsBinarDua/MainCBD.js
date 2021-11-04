import React from 'react'
import { Container } from 'react-bootstrap'

/* import components */
import NavbarCBD from './NavbarCBD.js'
import OpeningCBD from './OpeningCBD.js'
import TitlePictures from './TitlePicturesCBD.js'
import ListPicturesCBD from './ListPicturesCBD.js'
import ProductDetailsCBD from '../ComponentsBinarDua/ProductDetailsCBD.js'
import CheckoutCBD from './CheckoutCBD.js'
import ButtonCBD from './ButtonCBD.js'
import Footerx from '../Footerx.js'

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

class MainCBD extends React.Component {
  render() {
    return(
      <Container fluid>
        <NavbarCBD />
        <OpeningCBD />
        <TitlePictures />
        <ListPicturesCBD /> 
        <ProductDetailsCBD />
        <CheckoutCBD />
        <ButtonCBD />
        <Footerx />
      </Container>
    )
  }
}

export default MainCBD
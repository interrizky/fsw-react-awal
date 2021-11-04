import React from 'react'
import { Container } from 'react-bootstrap'

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarBS from './NavbarBS';
import BannerBS from './BannerBS'
import ProductBS from './ProductBS'
import ProductDetailsBS from './ProductDetailsBS'
import SubscribeBS from './SubscribeBS'
import FooterBS from './FooterBS'


class MainBS extends React.Component {
  render(){
    return(
      <Container fluid>
        <NavbarBS />
        <BannerBS />
        <ProductBS />
        <ProductDetailsBS />
        <SubscribeBS />
        <FooterBS />
      </Container>
    )
  }
}

export default MainBS
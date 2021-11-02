import React from 'react'
// import Navbar from './Navbar'
import Navbarx from './Navbarx'
import Bannerx from './Bannerx'
import Productx from './Productx'
import Footerx from './Footerx'
import { Container } from 'react-bootstrap'

import '../Assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  render(){
    return(
      <Container fluid>
        <Navbarx />
        <Bannerx />
        <Productx />
        <Footerx />        
      </Container>
    )
  }
}

export default Main
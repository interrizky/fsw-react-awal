import React from 'react'
import { Container } from 'react-bootstrap'

import Navbarx from './Navbarx'
import Bannerx from './Bannerx'
import JudulProductx from './JudulProductx'
import ListProductx from './ListProductx'
import PaginationProductx from './PaginationProductx'
import Footerx from './Footerx'

/* manual styling */
import '../Assets/css/styles.css'

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  render(){
    return(
      <Container fluid>
        <Navbarx />
        <Bannerx />
        <JudulProductx />
        <ListProductx />
        <PaginationProductx />
        <Footerx />        
      </Container>
    )
  }
}

export default Main
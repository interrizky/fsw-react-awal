import React from 'react'
import { Container } from 'react-bootstrap'

import Navbarx from '../Navbarx'
import DetailsFD from './DetailsFD'
import RelatedHeaderFD from './RelatedHeaderFD'
import RelatedListFD from './RelatedListFD'
import ReviewHeaderFD from './ReviewHeaderFD'
import ReviewFD from './ReviewFD'

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

class MainFD extends React.Component {
  render() {
    return(     
      <Container fluid>
        <Navbarx />
        <DetailsFD />
        <RelatedHeaderFD />
        <RelatedListFD />
        <ReviewHeaderFD />
        <ReviewFD />
        {/* <div>
          <h2>{this.props.match.params.indeks}</h2>
          <h2>{this.props.match.params.nama}</h2>
        </div>      */}
      </Container>
    )
  }
}

export default MainFD
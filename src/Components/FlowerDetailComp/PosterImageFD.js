import React from 'react'
import { Col } from 'react-bootstrap'
// import { BrowserRouter as useParams, useRouteMatch} from 'react-router-dom'
// import { BrowserRouter as useRouteMatch} from 'react-router-dom'
// import { useRouteMatch } from 'react-router-dom'

// import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class PosterImageFD extends React.Component {
  state = {
    indeks: null,
    nama: null,
    harga: null
  }

  constructor(props) {
    super(props)
    // console.log(props)

    this.state.indeks = props.match.params.indeks
    this.state.nama = props.match.params.nama
    this.state.harga = props.match.params.harga
  }

  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // }

  render() {
    // const { match } = this.props
    // const price = match.params.harga

    return(
      <Col className="poster-image col-md-4 m-3 shadow-lg rounded justify-content-center" style={{ "alignContent": "center",  "alignItems": "center", "textAlign": "center", "backgroundColor": "lightsteelblue"}} >
          {/* <img className="p-3" src={ require(`../../Assets/images/pngfind-${match.params.indeks}-transparent.png`) } alt={match.params.nama} style={{ "width": "75%"}} ></img>
          <h5><b> {match.params.nama} </b></h5>
          <h5>(<i> Rp {Number(price).toLocaleString('id-ID')} </i>)</h5> */}
          <img className="p-3" src={ require(`../../Assets/images/pngfind-${this.state.indeks}-transparent.png`) } alt={this.state.nama} style={{ "width": "75%"}} ></img>
          <h5><b> {this.state.nama} </b></h5>
          <h5>(<i> Rp {Number(this.state.harga).toLocaleString('id-ID')} </i>)</h5>          
          <br/>        
      </Col>      
    )
  }
}

// export default PosterImageFD
export default withRouter(PosterImageFD)
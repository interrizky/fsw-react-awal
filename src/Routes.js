import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

// import ListProductx from './Components/ListProductx'
// import JudulProductx from './Components/JudulProductx'

import Main from './Components/Main'
import MainFD from './Components/FlowerDetailComp/MainFD'
import MainSatu from './Components/MainBS'
import MainDua from '../src/Components/ComponentsBinarDua/MainCBD'

class Routes extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Redirect exact from="/" to="/flower" />
          <Route exact path="/flower" component= { Main } />

          {/* <Route path="/flower/:indeks/:nama">
            <MainFD />
          </Route> */}

          <Route path="/flower/:indeks/:harga/:nama" component={ MainFD } /> 
          {/* <Route path="/details/:id" component={DetailsPage}/> */}

          <Route path="/binarsatu" component={ MainSatu } />
          <Route path="/binardua" component={ MainDua } />
        </Switch>
      </Router>
    )
  }
}

export default Routes
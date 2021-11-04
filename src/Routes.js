import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import ListProductx from './Components/ListProductx'
// import JudulProductx from './Components/JudulProductx'

import Main from './Components/Main'
import MainSatu from './Components/MainBS'
import MainDua from '../src/Components/ComponentsBinarDua/MainCBD'

class Routes extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component= { Main } />
          {/* <Route exact path="/list-product" component= { ListProductx } /> */}
          {/* <Route exact path="/list-product/:id">
            <JudulProductx />
          </Route> */}

          <Route exact path="/binarsatu" component={ MainSatu } />
          <Route exact path="/binardua" component={ MainDua } />
        </Switch>
      </Router>
    )
  }
}

export default Routes
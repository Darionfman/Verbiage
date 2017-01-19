import React from "react"
import { render } from 'react-dom'
import App from './components/App'
import Articles from './components/Articles'
import Article from './components/Article'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
require('./css/modal.css')
require('./css/nav.css')

render(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Articles} />
          <Route path="/article/:id" component={Article} />
        </Route>
      </Router>,
  document.getElementById('app')
)
module.hot.accept()
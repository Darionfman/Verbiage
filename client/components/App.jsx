import React from 'react'
import * as bs from 'react-bootstrap'


export default class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div id='wrapper'>
        <bs.Nav>
          <bs.NavItem className="center" href='/'> Home </bs.NavItem>
        </bs.Nav>
        <div id='page-content-wrapper'>
          <bs.Grid fluid={true}>
            { this.props.children }
          </bs.Grid>
        </div>
      </div>
    )
  }
}
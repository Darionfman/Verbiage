import React from 'react'
import * as bs from 'react-bootstrap'
import axios from 'axios'
import ArticleSubmit from './ArticleSubmit'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }
  submit(e,form){
    e.preventDefault()
    const article = {
      title: form.title.value,
      author: form.author.value,
      body: form.body.value
    }
    axios.post('/api/article',article)
    .then((id) => this.setState({
      show: false
    }))
    .catch(err => console.log(err))
  }
  show(){
    this.setState({
      show: true
    })
  }
  close(){
    this.setState({
      show: false
    })
  }
  render () {
    return (
      <div id='wrapper'>
        <bs.Nav>
          <bs.NavItem className="left" href='/'> Home </bs.NavItem>
          <bs.NavItem className="right" onClick={() => this.show()}> Post Article </bs.NavItem>
        </bs.Nav>
        <div id='page-content-wrapper'>
          <bs.Grid fluid={true}>
            { this.props.children }
          </bs.Grid>
        </div>
        <ArticleSubmit show={this.state.show} submit={this.submit.bind(this)} close={() => this.close()} />
      </div>
    )
  }
}
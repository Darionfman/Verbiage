import React from 'react'
import * as bs from 'react-bootstrap'
import axios from 'axios'

export default class Articles extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios.get('/api/article')
    .then(articles => {
      this.setState({
        posts: articles.data
      })
      console.log(this.state)
    })
  }
  delete(id,i){
    axios.delete(`/api/article/${id}`)
    const posts = this.state.posts.slice(0)
    console.log('ding')
    posts.splice(i,1)
    this.setState({
      posts: posts
    })
  }
  render(){
    if(!this.state.posts.length) return <div></div>

    const postList = this.state.posts.map((post,i) => (
      <bs.Col md={12} key={i}>
        <bs.Row>
          <bs.Col md={6}>Title: {post.title}</bs.Col>
          <bs.Col md={6}>Author: {post.author}</bs.Col>
        </bs.Row>
        <bs.Row>
          <bs.Col md={12}>{post.body}</bs.Col>
          <bs.Col md={12}>
            <bs.Button onClick={() => this.delete(post.id,i)}>
              Delete
            </bs.Button>
          </bs.Col>
        </bs.Row>
        <hr />
      </bs.Col>
    ))

    return (
      <bs.Grid>
        {postList}
      </bs.Grid>
    )
  }
}
import React from 'react'
import * as bs from 'react-bootstrap'

const ArticleSubmit = ({props, submit, show, close}) => {
  let form = {}
  return (
    <bs.Modal show={show} onHide={close}>
      <bs.Grid>
        <bs.Col md={12}>
        <bs.Row>
          <bs.Modal.Header>
            <bs.Col md={6}>
            <bs.Modal.Title>Post Article</bs.Modal.Title>
            </bs.Col>
            <bs.Col md={6} className='require'>
            <span> * = Required Field </span>
            </bs.Col>
          </bs.Modal.Header>
        </bs.Row>
        <bs.Row>
          <form onSubmit={(e) => submit(e,form)}>
            <bs.Row>
              <bs.Col md={6}>
                <bs.FormGroup controlId='title'>
                  <bs.ControlLabel>Title</bs.ControlLabel>
                  <bs.FormControl 
                    defaultValue='' 
                    type='text' 
                    placeholder='Insert Article Title' 
                    inputRef={el => form.title = el} 
                  />
                </bs.FormGroup>
              </bs.Col>
              <bs.Col md={6}>
                <bs.FormGroup controlId='author'>
                  <bs.ControlLabel>Author</bs.ControlLabel>
                  <bs.FormControl 
                    defaultValue='' 
                    type='text' 
                    placeholder='Author Name' 
                    inputRef={el => form.author = el} 
                  />
                </bs.FormGroup>
              </bs.Col>
            </bs.Row>
            <bs.Row>
              <bs.Col md={12}>
                <bs.FormGroup controlId='body'>
                  <bs.ControlLabel>Story</bs.ControlLabel>
                  <bs.FormControl 
                    defaultValue='' 
                    componentClass="textarea"
                    placeholder='Insert Article Story' 
                    inputRef={el => form.body = el} 
                  />
                </bs.FormGroup>
              </bs.Col>
            </bs.Row>
            <bs.Row>
              <bs.Modal.Footer>
                <bs.Col md={12}>
                  <bs.Col md={6} className="left-button">
                  <bs.Button onClick={close}>
                    Close
                  </bs.Button>
                  </bs.Col>
                  <bs.Col md={6} className="right-button">
                  <bs.Button type="submit">
                    Submit
                  </bs.Button>
                  </bs.Col>
                </bs.Col>
              </bs.Modal.Footer>
            </bs.Row>
          </form>
        </bs.Row>
        </bs.Col>
      </bs.Grid>
    </bs.Modal>
  )
}
export default ArticleSubmit
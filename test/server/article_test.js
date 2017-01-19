require(TEST_HELPER)

const request = require('supertest-as-promised')
const routes = require(__server + '/index.js')
const db = require(__server + '/config/db.js')
const app = TestHelper.createApp()

app.use('/', routes)
app.testReady()

before('truncate db tables', function(){
  db.deleteEverything()
})
let id1
let id2
let updateId
describe('Stores Articles', function () {

  it_('stores a user and responds',function * () {
    const art = {title: "A new One", body: "Hello", author: "Darion Freeman"}
    try {
      //sets response constant
      const response = yield request(app)
      .post('/api/article')
      .send(art)
      .expect(201)
      //the id should be in the resonse body
      id1 = response.body.id
      expect(id1).to.be.a('number')
    } catch(err) {
      throw new Error(err)
    }
  })
  it('stores a second user', function * (){
    const art = {title: "A nother one", body: "And a nother one", author: "DJ Khaled"}
    try {
      const response = yield request(app)
      .post('/api/article')
      .send(art)
      .expect(201)

      id2 = response.body.id
      expect(id2).to.be.a('number')
    } catch(err) {
      throw new Error(err)
    }
  })
})
describe('Fetches multiple articles', function () {
  it('fetches all articles', function * (){
    try {
      const response = yield request(app)
      .get('/api/article')
      .expect(200)

      const articles = response.body
      expect(articles).to.be.an('array')
      expect(articles.length).to.equal('2')
      expect(articles[1]['id']).to.equal(id2)
    } catch(err) {
      throw new Error(err)
    }
  })
})
describe('Fetches one article', function () {
  it('Fetches an article by parameter id', function * () {
    try {  
      const response = yield request(app)
      .get(`/api/article/${id1}`)
      .expect(200)

      const article = response.body
      expect(article).to.be.an('object')
      expect(article.id).to.equal(id1)
      expect(article.body).to.equal('Hello')
    } catch(err) {
      throw new Error(err)
    }
  })
})
describe('Updates one article', function () {
  it('Updates an article by parameter id and returns an id', function * () {
    try {
      const body = {body: "Hello World"}
      const responseId = yield request(app)
      .put(`/api/article/${id1}`)
      .send(body)
      .expect(201)

      updateId = responseId.body
      expect(updateId).to.equal(id1)
    } catch(err) {
      throw new Error(err)
    }
  })
  it('Updated the article correctly', function * () {
    try {
      const response = yield request(app)
      .get(`/api/article/${updateId}`)
      .expect(200)

      const article = response.body
      expect(article.id).to.equal(id1)
      expect(article.title).to.equal('A new One')
      expect(article.author).to.equal('Darion Freeman')
      expect(article.body).to.equal('Hello World')
    } catch(err) {
      throw new Error(err)
    }
  })
})
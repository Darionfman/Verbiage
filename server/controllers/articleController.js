const Article = require('../models/Article')

module.exports = {
  createArticle: (req,res) => {
    Article.save(req.body)
    .then(id => res.status(201).send({id: id}))
    .catch(err => {
      console.log(`Could not save the article: ${err}`)
      res.status(406).send({id: `Item could not be saved due to err: ${err}`})
    })
  },
  getAllArticles: (req,res) => {
    Article.fetchAll()
    .then(articles => res.status(200).send(articles))
    .catch(err => {
      console.log(`Could not fetch articles: ${err}`)
      res.status(500).send([])
    })
  },
  getOneArticle: (req,res) => {
    const id = req.params.id
    Article.fetchOne(id)
    .then(article => res.status(200).send(article))
    .catch(err => {
      console.log(`Can not fetch article: ${err}`)
      res.status(404).send({error: 'Could not find id!?'})
    })
  },
  editOneArticle: (req,res) => {
    const id = req.params.id
    const body = req.body
    Article.update(id,body)
    .then(id => res.status(200).send(id))
    .catch(err => {
      console.log(`Can not update article ${err}`)
      res.status(404).send({error: 'Could not find id!?'})
    })
  },
  deleteOneArticle: (req,res) => {
    const id = req.params.id
    Article.delete(id)
    .then(id => res.sendStatus(200).send(id))
    .catch(err => {
      console.log(`Can not delete article ${err}`)
      res.status(404).send({error: 'Could not find id!?'})
    })
  }
}
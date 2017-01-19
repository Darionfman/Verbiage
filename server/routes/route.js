const Path = require('path')
const router = require('express').Router()
const Article = require('../controllers/articleController')
router.route('/').get((req,res) => res.sendFile(Path.resolve(__dirname, '../../public/index.html')))

router.route('/api/article').post(Article.createArticle)

router.route('/api/article').get(Article.getAllArticles)

router.route('/api/article/:id').get(Article.getOneArticle)

router.route('/api/article/:id').get(Article.editOneArticle)

router.route('/api/article/:id').delete(Article.deleteOneArticle)

module.exports = router
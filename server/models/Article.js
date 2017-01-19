const db = require('../config/db')

const Article = {}

Article.fetchOne = (id) => 
  db('Articles').where({id: id})
  .then(row => row[0])
  .catch(err => err )

Article.fetchAll = () =>
  db.select().from('Articles')
  .then(rows => rows)
  .catch(err => err)

Article.update = (id,info) => 
  db('Articles').where({id:id})
  .update(info)
  .returning('id')
  .then(id => id[0])
  .catch(err => err)

Article.delete = (id) =>
  db('Articles').where({id:id})
  .del()
  .returning('id')
  .then(id => id[0])
  .catch(err => err)

Article.save = (ArticleData) => 
  db('Articles')
  .insert(ArticleData)
  .returning('id')
  .then(id => id[0])
  .catch(err => { console.log(`ERR!!!${err}`) })

module.exports = Article
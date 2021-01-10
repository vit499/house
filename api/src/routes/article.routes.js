const {Router} = require('express')

const Article = require('../models/article')

const router = Router()

router.post('/articles', async (req, res) => {

  try {
    console.log('post article body', req.body);
    const user = req.body.article.user ? req.body.article.user : '';
    const name = req.body.article.name ? req.body.article.name : '';
    const cost = req.body.article.cost ? Number(req.body.article.cost) : 0;
    const category = req.body.article.category ? req.body.article.category : '';
    const descr = req.body.article.descr ? req.body.article.descr : '';
    const tags = req.body.article.tags ? req.body.article.tags : '';
    console.log('post article body', req.body);
    console.log('post article', user, name, cost, category, descr, tags);

    const article = new Article({
      user: user,
      name: name,
      cost: cost,
      category: category,
      descr: descr,
      tags: tags
    })
    const a = await article.save();
    res.json({a})
  }
  catch(err) {
    console.log(err);
    res.status(500).json({message: 'something wrong article'})
  }
})

router.get('/articles', async (req, res) => {
  console.log('get articles');
  try {
    const articles = await Article.find({})
    console.log('art', articles)
    const count = articles.length;
    const a = {
      'articles': articles,
      'articlesCount': count
    }
    console.log('art:', a);
    res.json(a)
  }
  catch(err) {
    console.log(err);
    res.status(500).json({message: 'something wrong get articles'})
  }
})

module.exports = router;

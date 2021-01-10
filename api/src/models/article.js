const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
  'user': String,
  'name': String,
  'cost': Number,
  'category': String,
  'descr': String,
  'tags': String
})

const Article = mongoose.model('Article', articleSchema)


// ArticleSchema.methods.toJSONFor = (function(user)) {
//   return {
//     user: this.user,
//     name: this.name,
//     cost: this.cost.toString(),
//     descr: this.descr,
//     tags: this.tags
//   };
// };

module.exports = Article
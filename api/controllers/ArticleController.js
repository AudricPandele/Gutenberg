/**
 * ArticleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 // async function getArticles(req, res) {
 // 	const articles = await Article.find().populate({owner: req.params.user_id}).populate({ folder: req.params.folder_id })
 // 	res.ok(articles)
 // }

 // async function getArticlesBySlug(req, res) {
 //   const articles = await Article.find().populate('folder').where({slug: req.params.folder_slug}).where({owner: req.params.user_id})
 //   res.ok(articles)
 // }

 async function createArticle(req, res) {
  var extractor = require('unfluff')
 	var read = require('read-art')

  var uri = req.allParams().url
  read(uri, {
    timeout: 15000,
    output: {
      type: 'text',
      stripSpaces: true,
      break: true
    }
  }, async function (err, art, options, resp) {
    if (err) {
      console.log('[ERROR]', err.message)
      return
    }
    if (!art) {
      console.log('[WARNING] article not exist')
      return
    }

    var data = extractor(art.html)

    var params = {
      "title": data.title,
      "image": data.image,
      "text": data.text,
      "link": data.canonicalLink,
      "source": data.publisher,
      "folder": req.params.folder_id
    }

    var newArtcile = await Article.create(params).fetch()
    res.ok(newArtcile)
  })
 }

 async function userAddArticle (req, res) {

 }

module.exports = {
  // showBySlug: (req, res, next) => { getArticlesBySlug(req, res).catch(next) },
  show: (req, res, next) => { getArticles(req, res).catch(next) },
  create: (req, res, next) => { createArticle(req, res).catch(next) },
};

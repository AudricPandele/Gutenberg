/**
 * FolderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 async function getFolderArticlesBySlug(req, res) {
   const articles = await Folder.find().where({slug: req.params.folder_slug}).where({owner: req.params.user_id}).populate('articles')
   res.ok(articles)
 }

module.exports = {
  showBySlug: (req, res, next) => { getFolderArticlesBySlug(req, res).catch(next) },
};

/**
 * FolderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 async function getFolderByUsername(req, res) {
   let user = await User.findOne({username: req.params.username})
   if (user) {
     let folder = await Folder.find({owner: user.id})
                              .populate('contributors')
                              .populate('owner')
     res.ok(folder)
   }else{
     res.ok([])
   }
 }

 async function createContributor(req, res) {
   let contributor = await User.findOne({username: req.allParams().contributor_username})
   let user = await User.findOne({username: req.params.username})

   if (user && contributor) {
     let folder = await Folder.findOne({slug: req.params.folder_slug, owner: user.id})
     if (folder) {
       const newFolder = await Folder.addToCollection(folder.id, 'contributors')
                                     .members([contributor.id]);
       res.ok(newFolder)
     }
   }
}

 module.exports = {
   show: (req, res, next) => { getFolderByUsername(req, res).catch(next) },
   addContributor: (req, res, next) => { createContributor(req, res).catch(next) },
 };

/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var passport = require ('passport');

async function onPassportAuth(req, res, error, user, info)
{
    if (error) return res.serverError(error);
    if (!user) return res.serverError(error);

    var token = await sails.helpers.createToken(user);
    return res.ok (
        {
            token : token,
            user: user
        }
    )
}

function signin(req, res) {
  passport.authenticate('local',
  onPassportAuth.bind(this,req,res))(req,res);
}

async function signup(req, res) {
  var params = req.allParams();

  // Hash password using helper
  let hashPassword = await sails.helpers.hashPassword(params.password);

  // Replace no hashed password by hashed
  delete params.password
  params.password = hashPassword
  var newUser = await User.create(params).fetch()

  // Create "general" folder
  var folderParams = {
    "name": "General",
    "slug": "general",
    "owner": newUser.id,
    "is_public": 1
  }

  var newFolder = await Folder.create(folderParams).fetch()

  // Add general folder to user object
  newUser.folders = [newFolder]

  newUser.token = await sails.helpers.createToken(newUser)
  res.ok(newUser)

}

module.exports = { signin, signup };

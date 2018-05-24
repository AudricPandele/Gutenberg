/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var passport = require ('passport');

function onPassportAuth(req, res, error, user, info)
{
    if (error) return res.serverError(error);
    if (!user) return res.serverError(error);

    return res.ok (
        {
            token : sails.helpers.createToken(user),
            user:user
        }
    )
}

function signin(req, res) {
  passport.authenticate('local',
  onPassportAuth.bind(this,req,res))(req,res);
}

async function signup(req, res) {
  req.allParams().password = await sails.helpers.hashPassword(req.allParams().password);
  console.log(req.allParams().password);
  var newUser = await User.create(req.allParams()).fetch()

  newUser.token = await sails.helpers.createToken(newUser)
  res.ok(newUser)

}

module.exports = { signin, signup };

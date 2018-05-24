var jwt = require('jsonwebtoken');
module.exports = {


  friendlyName: 'Create token',


  description: '',


  inputs: {
    user: {
      friendlyName: 'User',
      description: 'The user object',
      type: 'json',
      defaultsTo: null
    },
  },


  exits: {
    success: {
      outputFriendlyName: 'Recent users',
      outputDescription: 'An array of users who recently logged in.',
    },

  },


  fn: async function (inputs, exits) {
    jwt.sign({
        user : inputs.user
      },
      sails.config.jwtSettings.secret,
      {
        algorithm: 'HS256',
      },
      function(err, token) {
        return exits.success(token);
        console.log(token, err)
      }
    )

  }


};

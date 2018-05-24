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
    var token = jwt.sign({ user : inputs.user }, 'shhhhh')

    // All done.
    return exits.success(token);

  }


};

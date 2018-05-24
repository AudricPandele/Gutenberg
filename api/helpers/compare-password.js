var bcrypt = require('bcrypt-nodejs');

module.exports = {


  friendlyName: 'Compare password',


  description: '',


  inputs: {
    password: {
      friendlyName: 'User',
      description: 'The user object',
      type: 'json',
      defaultsTo: null
    },
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

    var compare = bcrypt.compareSync(inputs.password, inputs.user.password)

    // All done.
    return exits.success(compare);

  }


};

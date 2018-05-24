var bcrypt = require('bcrypt-nodejs');
module.exports = {


  friendlyName: 'Hash password',


  description: '',


  inputs: {
    password: {
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
    let hashedPassword = bcrypt.hashSync(inputs.password)

    // All done.
    return exits.success(hashedPassword);

  }


};

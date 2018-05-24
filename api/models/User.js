/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
        type: 'string',
        unique: true,
        required: true,
    },
    email: {
        type: 'string',
        unique: false,
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    first_name: {
        type: 'string',
        unique: false,
        required: true,
    },
    last_name: {
        type: 'string',
        unique: false,
        required: true,
    },
    image_url: {
        type: 'string',
        unique: false,
        required: false,
    },
    folders: {
      collection: 'folder',
      via: 'owner'
    },
    likes: {
      collection: 'like',
      via: 'user'
    },
    notes: {
      collection: 'note',
      via: 'user'
    },

  }
};

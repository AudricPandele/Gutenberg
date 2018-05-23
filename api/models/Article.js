/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
        type: 'string',
    },
    image: {
        type: 'string',
    },
    text: {
        type: 'string',
    },
    link: {
        type: 'string',
    },
    source: {
        type: 'string',
    },
    notes: {
      model: 'note',
      via: 'article'
    },
    likes: {
      model: 'like',
      via: 'article'
    },
    folder:{
      model: 'folder'
    }
  }
};

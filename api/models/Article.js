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
        columnType: 'text',
    },
    link: {
        type: 'string',
    },
    source: {
        type: 'string',
    },
    notes: {
      model: 'note'
    },
    likes: {
      model: 'like'
    },
    folder:{
      model: 'folder'
    }
  }
};

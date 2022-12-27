const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        return /^((http[s]?):\/\/)(www.)?[a-z0-9\-]+\.[a-z]+(\/[a-zA-Z0-9\._~:\/*\?%#\[\]@!\$&'\(\)\*\+,;=]*)*#?\/?$/.test(
          v,
        );
      },
      message: 'Invalid Url',
    },
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);

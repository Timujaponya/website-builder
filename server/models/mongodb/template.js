const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  industry: {
    type: String
  },
  pages: {
    type: Number,
    default: 1
  },
  image: {
    type: String,
    required: true
  },
  htmlContent: {
    type: String,
    required: true
  },
  cssContent: {
    type: String,
    required: true
  },
  jsContent: {
    type: String
  },
  popular: {
    type: Boolean,
    default: false
  },
  new: {
    type: Boolean,
    default: false
  },
  premium: {
    type: Boolean,
    default: false
  },
  price: {
    type: String,
    default: "Ücretsiz"
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
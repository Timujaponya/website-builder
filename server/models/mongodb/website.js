const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Template',
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
  customDomain: {
    type: String,
    trim: true
  },
  subdomain: {
    type: String,
    trim: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'draft'],
    default: 'draft'
  },
  visits: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  },
  lastEdited: {
    type: Date,
    default: Date.now
  }
});

const Website = mongoose.model('Website', websiteSchema);

module.exports = Website;
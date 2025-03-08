const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    html: {
        type: String,
        required: true
    },
    css: {
        type: String,
        required: true
    },
    js: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
const User = require('./user');
const Template = require('./template');
const Website = require('./website');

// İlişkileri tanımla
User.hasMany(Website, {
  foreignKey: 'ownerId',
  as: 'websites'
});

Website.belongsTo(User, {
  foreignKey: 'ownerId',
  as: 'owner'
});

Template.hasMany(Website, {
  foreignKey: 'templateId',
  as: 'websites'
});

Website.belongsTo(Template, {
  foreignKey: 'templateId',
  as: 'template'
});

module.exports = {
  User,
  Template,
  Website
};
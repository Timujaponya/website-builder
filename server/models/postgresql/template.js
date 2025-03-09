const { DataTypes } = require('sequelize');
const sequelize = require('../../config/postgresql');

const Template = sequelize.define('template', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  industry: {
    type: DataTypes.STRING
  },
  pages: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  htmlContent: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  cssContent: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  jsContent: {
    type: DataTypes.TEXT
  },
  popular: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  new: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  premium: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  price: {
    type: DataTypes.STRING,
    defaultValue: "Ücretsiz"
  }
});

module.exports = Template;
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/postgresql');

const Website = sequelize.define('website', {
  name: {
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
  customDomain: {
    type: DataTypes.STRING
  },
  subdomain: {
    type: DataTypes.STRING,
    unique: true
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive', 'draft'),
    defaultValue: 'draft'
  },
  visits: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Website;
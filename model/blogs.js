const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Blogs = sequelize.define('blogs', {
  id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

module.exports = Blogs;

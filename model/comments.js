const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Comments = sequelize.define('comments', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data : Sequelize.TEXT,
    blogId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Blogs',
          key: 'id'
        }
      }

});

module.exports = Comments;
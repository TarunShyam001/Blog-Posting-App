const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Comments = sequelize.define('comments', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data : Sequelize.TEXT
});

module.exports = Comments;
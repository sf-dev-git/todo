const { Sequelize } = require('sequelize');

const database = require('../../config/database.json')[process.env.NODE_ENV || 'development']
const sequelize = new Sequelize(database);

module.exports = sequelize;
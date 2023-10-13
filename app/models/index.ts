import { Sequelize } from 'sequelize'

const database: object = require('../../config/database.json')[process.env.NODE_ENV || 'development']
const sequelize = new Sequelize(database)

export { Sequelize, sequelize };
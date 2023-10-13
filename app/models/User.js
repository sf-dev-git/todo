const { sequelize, DataTypes } = require('./index.js');

const User = sequelize.define(
    'User',
    {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        unique: true
    },
    username: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    }
});
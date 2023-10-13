import { sequelize } from './index';
import { Optional, Model, DataTypes } from 'sequelize';

interface UserAttributes {
    id: number;
    username: string;
    password: string;
};

interface UserCreationAttributes
    extends Optional<UserAttributes, 'id'> {}

interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>,
        UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const User = sequelize.define<UserInstance>(
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
import { DataTypes, Model, UUIDV4 } from "sequelize";
import { dataBase } from "../config/config";

interface UserDBAttributes {
    id: string;
    name: string;
    email: string;
    senha: string;
    createAt?: Date;
    updateAt?: Date;
}

class UserDB extends Model<UserDBAttributes> implements UserDBAttributes {
    public id!: string;
    public name!: string;
    public email!: string;
    public senha!: string;
    public readonly createAt?: Date;
    public readonly updateAt?: Date;
}

UserDB.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true
    },

    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    senha: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
    {
        sequelize: dataBase,
        tableName: "user"
    }
)

export default UserDB;
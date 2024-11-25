import { DataTypes, UUIDV4 } from "sequelize";
import { dataBase } from "../config/config";

export const userDb = dataBase.define( "user" , { 
    id : {
        type : DataTypes.UUID,
        allowNull: false ,
        defaultValue: UUIDV4
    },

    name : {
        type: DataTypes.TEXT,
        allowNull: false
    },

    email:{
        type: DataTypes.TEXT,
        allowNull: false
    },

    senha: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})
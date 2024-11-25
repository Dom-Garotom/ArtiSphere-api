import { DataTypes , UUIDV4 } from "sequelize";  
import { dataBase } from "../config/config";


export const articleDb = dataBase.define("article", {
    id: {
        type : DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },

    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    article: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    imageUrl:{
        type: DataTypes.TEXT,
        defaultValue: ""
    },
});

(async () => {
    await dataBase.sync({ alter: true });
})();
import { DataTypes, Model, UUIDV4 } from "sequelize";
import { dataBase } from "../config/config";

interface ArticleDbAtributtes {
    id: string;
    title: string;
    article: string;
    likes: string;
    imageUrl: string;
    createAt?: Date;
    updateAt?: Date;
}

class ArticleDb extends Model<ArticleDbAtributtes> implements ArticleDbAtributtes {
    public id !: string;
    public title!: string;
    public article!: string;
    public likes!: string;
    public imageUrl!: string;
    public readonly createAt?: Date;
    public readonly updateAt?: Date;
}



ArticleDb.init({
    id: {
        type: DataTypes.UUID,
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

    imageUrl: {
        type: DataTypes.TEXT,
        defaultValue: ""
    },
},
    {
        sequelize: dataBase,
        tableName: "article"
    }
)

export default ArticleDb
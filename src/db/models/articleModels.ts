import { DataTypes, Model, UUIDV4 } from "sequelize";
import { dataBase } from "../config/config";

interface ArticleDbAtributtes {
    id: string;
    person_id : string;
    title: string;
    article: string;
    num_likes: number;
    num_comentarios: number;
    imageUrl?: string;
    createAt?: Date;
    updateAt?: Date;
}

class ArticleDb extends Model<ArticleDbAtributtes> implements ArticleDbAtributtes {
    public id !: string;
    public person_id !: string;
    public title!: string;
    public article!: string;
    public num_likes!: number;
    public num_comentarios!: number;
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

    person_id : {
        type : DataTypes.TEXT,
        allowNull: false,

    },

    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    article: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    num_likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    num_comentarios: {
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
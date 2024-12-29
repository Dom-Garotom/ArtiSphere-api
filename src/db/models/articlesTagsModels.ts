import { dataBase } from './../config/config';
import { DataTypes, Model, UUIDV4 } from "sequelize";

interface ArticleTagsDBAtributes {
    id: string;
    article_id: string;
    tags_id: string;
}

class ArticleTagsDB extends Model<ArticleTagsDBAtributes> implements ArticleTagsDBAtributes {
    public readonly id!: string;
    public readonly article_id!: string;
    public readonly tags_id!: string;
    public readonly createAt?: Date;
    public readonly updateAt?: Date;
}

ArticleTagsDB.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4
    },

    article_id: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    tags_id: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    sequelize: dataBase,
    tableName: "articles_tags"
})

export default ArticleTagsDB;
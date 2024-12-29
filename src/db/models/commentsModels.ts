import { DataTypes, Model, UUIDV4 } from "sequelize";
import { dataBase } from "../config/config";

interface CommentsDBAtributes {
    id: string;
    article_id: string;
    person_id: string;
    content: string
}

class CommentsDb extends Model<CommentsDBAtributes> implements CommentsDBAtributes {
    public readonly id!: string;
    public readonly article_id!: string;
    public readonly person_id!: string;
    public content!: string;
    public readonly createAt?: Date;
    public readonly updateAt?: Date;
}

CommentsDb.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true,
    },

    article_id: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    person_id: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    }

}, {
    sequelize: dataBase,
    tableName: "comments"
})

export default CommentsDb;
import { DataTypes, Model, UUIDV4 } from "sequelize";
import { dataBase } from "../config/config";

interface TagsDBAtributes {
    id: string;
    content: string;
    color: string;
}

class TagsDB extends Model<TagsDBAtributes> implements TagsDBAtributes {
    public readonly id!: string;
    public content!: string;
    public color!: string;
    public readonly createAt?: Date;
    public readonly updateAt?: Date;
}

TagsDB.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },

    color: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: dataBase,
    tableName: "tags"
})

export default TagsDB;
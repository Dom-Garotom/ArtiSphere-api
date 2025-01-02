import { articlesSeed } from './../db/seeds/ArticleSeeds';
import ArticleDb from "../db/models/articleModels"
import TagsDB from '../db/models/tagsModels';
import { tagSeed } from '../db/seeds/tagsSeeds';
import { ArticleTagsSeed } from '../db/seeds/articlesTagsSeeds';
import ArticleTagsDB from '../db/models/articlesTagsModels';


const checkingAndInserting = async (model: { findOne: Function; bulkCreate: Function }, data: any[]) => {
    const existingData = await model.findOne()
    if (!existingData) {
        await model.bulkCreate(data);
    }
}

const insertSeeds = async () => {
    try {
        Promise.all([
            checkingAndInserting(ArticleDb, articlesSeed),
            checkingAndInserting(ArticleTagsDB, ArticleTagsSeed),
            checkingAndInserting(TagsDB, tagSeed),
        ])
    } catch (error) {
        console.log("Error inserting seeds into database ")
        console.log("Error : " + error);
    }
}

export default insertSeeds;
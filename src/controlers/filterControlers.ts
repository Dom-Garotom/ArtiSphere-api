import { Request, Response } from "express";
import ArticleDb from "../db/models/articleModels";
import TagsDB from "../db/models/tagsModels";
import CommentsDb from "../db/models/commentsModels";


export const getMostPopular = async (req: Request, res: Response) => {
  try {
    const articles = await ArticleDb.findAll({
      order: [['num_likes', 'DESC']],
      include: [{
        model: TagsDB,
        through: {
          attributes: []
        },
        attributes: ["id", "content", "color"]
      },
      {
        model: CommentsDb,
      }]
    });
    res.json(articles);
  } catch (error) {
    res.status(502).json({
      status: "Error",
      message: "Error when send articles "
    })

    console.log(error);
  }
}


export const getMostRecent = async (req: Request, res: Response) => {
  try {
    const articles = await ArticleDb.findAll({
      order: [['createdAt', 'ASC']],
      include: [{
        model: TagsDB,
        through: {
          attributes: []
        },
        attributes: ["id", "content", "color"]
      },
      {
        model: CommentsDb,
      }]
    });
    res.json(articles);
  } catch (error) {
    res.status(502).json({
      status: "Error",
      message: "Error when send articles "
    })

    console.log(error);
  }
}


export const getMostRelevant = async (req: Request, res: Response) => {
  try {
    const articles = await ArticleDb.findAll({
      order: [['num_comments', 'DESC']],
      include: [{
        model: TagsDB,
        through: {
          attributes: []
        },
        attributes: ["id", "content", "color"]
      },
      {
        model: CommentsDb,
      }]
    });
    res.json(articles);
  } catch (error) {
    res.status(502).json({
      status: "Error",
      message: "Error when send articles "
    })

    console.log(error);
  }
}

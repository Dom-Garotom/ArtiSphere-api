import ArticleDb from "../db/models/articleModels";

export const incrementComment = async ( article_id : string ) => {

    const article = await ArticleDb.findByPk(article_id);

    if (!article) {
        throw new Error("Article not exist")
    }

    const currentNumComenst = article?.num_comments

    await article?.update({
        num_comments: currentNumComenst + 1
    })

}


export const decrementComment = async ( article_id : string ) => {

    const article = await ArticleDb.findByPk(article_id);

    if (!article) {
        throw new Error("Article not exist")
    }

    const currentNumComenst = article?.num_comments
    
    await article?.update({
        num_comments: currentNumComenst - 1
    })

}
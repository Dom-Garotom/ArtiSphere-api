import ArticleDb from '../models/articleModels';
import TagsDB from '../models/tagsModels';
import ArticleTagsDB from '../models/articlesTagsModels';

// Configurar as associações muitos-para-muitos entre Article e Tag
ArticleDb.belongsToMany(TagsDB, {
    through: ArticleTagsDB, // Tabela intermediária
    foreignKey: 'article_id', // Campo na tabela intermediária para o ID do artigo
    otherKey: 'tags_id' // Campo na tabela intermediária para o ID da tag
});

TagsDB.belongsToMany(ArticleDb, {
    through: ArticleTagsDB, // Tabela intermediária
    foreignKey: 'tags_id', // Campo na tabela intermediária para o ID da tag
    otherKey: 'article_id' // Campo na tabela intermediária para o ID do artigo
});


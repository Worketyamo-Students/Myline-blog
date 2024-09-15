import { Router } from "express";
import blogControllers from "../controllers/blog";

const routes = {
    GET_ONE_ARTICLE: '/article/:id',
    GET_ALL_ARTICLES: '/articles',
    CREATE_ARTICLE: '/article',
    CREATE_ARTICLES: '/articles',
}

const blog = Router();

blog.get(routes.GET_ONE_ARTICLE, blogControllers.getOneArticle)
blog.get(routes.GET_ALL_ARTICLES, blogControllers.getAllArticles)
blog.post(routes.CREATE_ARTICLE, blogControllers.createArticle)
blog.post(routes.CREATE_ARTICLES, blogControllers.createManyArticles)

export default blog
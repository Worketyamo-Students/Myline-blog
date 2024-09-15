import { Router } from "express";
import blogControllers from "../controllers/blog";

const routes = {
    GET_ONE_ARTICLE: '/article/:id',
    GET_ALL_ARTICLES: '/articles',
    CREATE_ARTICLE: '/article',
}

const blog = Router();

blog.get(routes.GET_ONE_ARTICLE, blogControllers.getOneArticle)
blog.get(routes.GET_ALL_ARTICLES, blogControllers.getAllArticles)

export default blog
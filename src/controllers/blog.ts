import { Request, Response } from "express";
import { HttpCode } from "../core/constants";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const blogControllers = {
    getOneArticle: async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const article = await prisma.post.findUnique({
                where:
                    { id }
            })
            res.send({ msg: article }).status(HttpCode.OK)
        }
        catch (error) {
            console.error(error)
        }
    },

    getAllArticles: async (req: Request, res: Response) => {
        try {
            const articles = await prisma.post.findMany()

            res.status(HttpCode.OK).send({ msg: articles })
        }

        catch (error) {
            console.error(error)
        }
    },

    createArticle: async (req: Request, res: Response) => {
        try {
            const { title, content } = req.body

            const article = await prisma.post.create({
                data: {
                    title,
                    content
                },
            })
            if (article)
                res.status(HttpCode.CREATED).json(article)
            else
                res.status(HttpCode.BAD_REQUEST).json({ msg: "article could not be created !" })
        }
        catch (error) {
            console.error(error)
        }
    },


    createManyArticles: async (req: Request, res: Response) => {
        try {
            const { title, content } = req.body

            const articles = await prisma.post.createMany({
                data: {
                    title,
                    content
                },
            })
            if (articles)
                res.status(HttpCode.CREATED).json(articles)
            else
                res.status(HttpCode.BAD_REQUEST).json({ msg: "articles could not be created !" })
        }
        catch (error) {
            console.error(error)
        }
    },


}

export default blogControllers
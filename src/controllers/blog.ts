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
    }

}

export default blogControllers
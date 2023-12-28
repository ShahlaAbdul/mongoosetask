import { Router } from "express";
import { createBlogById, deleteBlogById, getAllBlogs, getByIdBlog, updateBlogById } from "../Controller/BlogController.js";
import { myLogger } from "../middleware/loggerMiddleWare.js";
export const blogRouter = Router();

blogRouter.get("/", myLogger, getAllBlogs);
blogRouter.get("/:id", myLogger, getByIdBlog);
blogRouter.post("/", myLogger, createBlogById)
blogRouter.delete("/:id", myLogger, deleteBlogById)
blogRouter.put("/:id", myLogger, updateBlogById);
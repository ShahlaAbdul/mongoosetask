import { Router } from "express";
import { createUserById, deleteUserById, getAllUsers, getbyIdUser, updateUserById } from "../Controller/UserController.js";
import { myLogger } from "../middleware/loggerMiddleWare.js";
export const UserRouter = Router();

UserRouter.get("/", myLogger, getAllUsers);
UserRouter.get("/:id", myLogger, getbyIdUser);
UserRouter.post("/", myLogger, createUserById)
UserRouter.delete("/:id", myLogger, deleteUserById)
UserRouter.put("/:id", myLogger, updateUserById);

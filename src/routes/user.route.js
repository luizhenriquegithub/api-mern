import express from "express";
import userController from "../controllers/user.controller.js";
import { validId, validUser } from "../middlewares/global.middlewares.js";

const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", validId, validUser, userController.getById);
router.patch("/:id", validId, validUser, userController.update);

export default router;

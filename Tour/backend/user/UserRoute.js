import express from "express";

import userController from "./userController"
const router = express();

router.post("/signup", userController.signup);

router.post("/login", userController.login);

export default router;
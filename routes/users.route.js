import { Router } from "express";
import { getUser } from "../controllers/users.controller.js";

const router = Router();

router.route("/").get((req, res) => res.send("Hello World!"));
router.route("/user").get(getUser);

export default router;
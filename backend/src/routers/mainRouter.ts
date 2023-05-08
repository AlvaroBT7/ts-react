import { Router } from "express";
import users from "../data/users";

const router = Router();

router.get("/", (req, res) => res.json("Welcome to the server !"));
router.get("/users", (req, res) => res.json(users));

export default router;

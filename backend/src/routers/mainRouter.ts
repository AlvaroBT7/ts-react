import { Router } from "express";
import users from "../data/users";

const router = Router();

router.get("/api", (req, res) => res.json("Welcome to the server !"));
router.get("/api/users", (req, res) => res.json(users));

// middleware para mostrar error al no encontrar ruta
router.use((req, res) => {
  res.status(404).json('Something went wrong !');
});

export default router;

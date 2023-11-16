import { Router } from "express";
import animalsRouter from "./animals.routes.js";

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor funcionado!" })
})

router.use("/animals", animalsRouter)

export default router;
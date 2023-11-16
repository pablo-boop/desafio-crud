import { Router } from "express";

import {
    getAnimals,
    getAnimalById,
    addAnimal,
    updateAnimal,
    deleteAnimal
} from '../controllers/animals.controlles.js';

const animalsRouter = Router();

animalsRouter.get("/", getAnimals);
animalsRouter.get("/:id", getAnimalById);
animalsRouter.post("/", addAnimal);
animalsRouter.put("/:id", updateAnimal);
animalsRouter.delete("/:id", deleteAnimal);
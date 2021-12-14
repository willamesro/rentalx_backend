import { Router } from "express";

import { CategoriesRespository } from "../repositories/CategoriesRespository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRespository
    );

    createCategoryService.execute({
        name,
        description,
    });

    return res.status(201).send();
});
categoriesRoutes.get("/", (req, res) => {
    const categories = categoriesRespository.list();
    return res.status(200).json(categories);
});

export { categoriesRoutes };

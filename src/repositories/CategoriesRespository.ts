import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRespository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }
    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }
    list(): Category[] {
        return this.categories;
    }
    findByName(name: string): Category {
        const cateory = this.categories.find(
            (category) => category.name === name
        );
        return cateory;
    }
}

export { CategoriesRespository };

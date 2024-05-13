const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");
const AppError = require("../utils/AppError");

class DishesController {
    async create(request, response) {
        const { name, description, category, price, ingredients } = request.body;
        const image = request.file.filename;
        const user_id = request.user.id;

        const diskStorage = new DiskStorage();
        const filename = await diskStorage.saveFile(image);

        const ingredientsArray = JSON.parse(ingredients || '[]');

        const [dish_id] = await knex("dishes").insert({
            name,
            description,
            category,
            price,
            image: filename,
        });

        const ingredientsInsert = ingredientsArray.map((name) => {
            return {
                dish_id,
                name,
            };
        });

        await knex("ingredients").insert(ingredientsInsert);

        return response.status(201).json();
    }

    async show(request, response) {
        const {id} = request.params;

        const dish = await knex("dishes").where({id}).first();
        const ingredients = await knex("ingredients").where({dish_id: id}).orderBy("name");

        return response.status(200).json({
            ...dish,
            ingredients,
        });
    }

    async delete(request, response) {
        const {id} = requset.params;

        await knex("dishes").where({id}).delete();

        return response.status(200).json();
    }

    async update(request, response) {
        const {id} = request.params;
        const {name, description, category, price, ingredients} = request.body;
        const imageFilename = request.file?.filename;

        const dish = await knex("dishes").where({id}).first();

        if(!dish) {
            throw new AppError("Dish not found", 404);
        }

        const dishUpdate = {
            name: name ?? dish.name,
            description: description ?? dish.description,
            category: category ?? dish.category,
            price: price ?? dish.price,
            updated_at: knex.fn.now(),
        };
        
        if(imageFilename !== undefined ) {
            const diskStorage = new DiskStorage();

            if(dish.image) {
                await diskStorage.deleteFile(dish.image);
            }

            const filename = await diskStorage.saveFile(imageFilename);
            dishUpdate.image = filename;
        }

        if(ingredients) {
            await knex("ingredients").where({dish_id: id}).delete();

            const ingredientsInsert = ingredients.map((name) => {
                return {
                    dish_id: id,
                    name,
                };
            });

            await knex("ingredients").insert(ingredientsInsert);
        }

        await knex("dishes").update(dishUpdate).where({id});

        return response.status(200).json();
    }

    async index(request, response) {
        const {search} = request.query;

        let dishes;

        if(search) {
            const keywords = search.split(" ").map((keyword) => `%${keyword}%`);

            dishes = await knex("dishes").select([
                "dishes.id",
                "dishes.name",
                "dishes.description",
                "dishes.category",
                "dishes.price",
                "dishes.image",
            ]).leftJoin("ingredients", "dishes.id", "ingredients.dish_id")
            .where((builder) => {
                builder.where((builder2) => {
                    keywords.forEach((keyword) => {
                        builder2.orWhere("dishes.name", "like", keyword);
                        builder2.orWhere("dishes.description", "like", keyword);
                    });
                });
                keywords.forEach((keyword) => {
                    builder.orWhere("ingredients.name", "like", keyword);
                });
            }).groupBy("dishes.id").orderBy("dishes.name");
        } else {
            dishes = await knex("dishes").select([
                "dishes.id",
                "dishes.name",
                "dishes.description",
                "dishes.category",
                "dishes.price",
                "dishes.image",
            ]).orderBy("dishes.name");
        }

        const dishesIngredients = await knex("ingredients");
        const dishesWithIngredients = dishes.map((dish) => {
            const dishIngredients = dishesIngredients.filter((ingredient) => ingredient.dish_id === dish.id);

            return {
               ...dish,
                ingredients: dishIngredients,
            };
        });

        return response.status(200).json(dishesWithIngredients);
    }
}

module.exports = DishesController;
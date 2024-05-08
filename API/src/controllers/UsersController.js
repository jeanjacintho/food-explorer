const knex = require("../database/knex");
const { hash }  = require("bcryptjs");
const AppError = require("../utils/AppError");

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const checkUserExists = await knex("users").where({email});

        if (checkUserExists.length > 0) {
            throw new AppError("User already exists", 400);
        }

        if (!emailRegex.test(email)) {
            throw new AppError("Invalid email. Please enter an email in this format: example@email.com", 400);
        }

        if (password.length < 6) {
            throw new AppError("Password must be at least 6 characters", 400);
        }

        const hashedPassword = await hash(password, 8);
        await knex("users").insert({name, email, password: hashedPassword});

        return response.status(201).json();
    }

    async update(request, response) {
        const user_id = request.user.id;
        const { name, email, password , old_password} = request.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const user = await knex("users").where({id: user_id}).first();

        if(!user) {
            throw new AppError("User not found", 404);
        }

        if (!emailRegex.test(email)) {
            throw new AppError("Invalid email. Please enter an email in this format: example@email.com", 400);
        }

        const userWithUpdateEmail = await knex("users").where({email}).first();

        if(userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
            throw new AppError("Email already exists", 400);
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password) {
            throw new AppError("Old password is required", 400);
        }

        if(password && old_password) {
            if(password.length < 6) {
                throw new AppError("Password must be at least 6 characters", 400);
            }

            const checkOldPassword = await compare(old_password, user.password);

            if(!checkOldPassword) {
                throw new AppError("Old password is incorrect", 400);
            }

            user.password = await hash(password, 8);
        }

        await knex("users").where({id: user_id}).update({
            name: user.name,
            email: user.email,
            password: user.password,
            updated_at: knex.fn.now()
        });

        return response.status(200).json();
    }
}

module.exports = UsersController;
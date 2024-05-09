const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const knex = require("../database/knex");
const authConfig = require("../config/auth");
const AppError = require("../utils/AppError");

class SessionsController {
    async create(request, response) {
        const { email, password } = request.body;
        const user = await knex("users").where({email}).first();

        if(!user) {
            throw new AppError("Incorrect email and/or password", 404);
        }

        const checkPassword = await compare(password, user.password);

        if(!checkPassword) {
            throw new AppError("Incorrect email and/or password", 400);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({role: user.role}, secret, {
            subject: String(user.id),
            expiresIn
        });

        response.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            maxAge: 15 * 60 * 1000
        });

        delete user.password;

        return response.status(201).json({user});
     }
}

module.exports = SessionsController;
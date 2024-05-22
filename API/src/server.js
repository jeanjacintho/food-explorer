require("dotenv/config");
require("express-async-errors");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const AppError = require("./utils/AppError");
const database = require("./database/sqlite");
const uploadConfig = require("./config/upload");

const app = express();
database();
app.use(express.json());
app.use(cookieParser());
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true
}));
app.use(routes);
app.use((err, request,response, next) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }

    console.log(err)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
})

const PORT = 3333;

app.listen(PORT, () =>  console.log(`Server is running on port ${PORT}`));
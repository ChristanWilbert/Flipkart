import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*", // Be sure to switch to your production domain
    optionsSuccessStatus: 200,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    allowedHeaders: "Content-Type, Origin, Accept, X-Requested-With",
  })
);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);
app.listen(PORT, () => console.log("SERVER RUNNING started"));
DefaultData();

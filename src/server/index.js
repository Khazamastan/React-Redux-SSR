import express from "express";
import cors from "cors";
import "source-map-support/register";
var bodyParser = require("body-parser");
import { renderDOM } from "./renderDOM";
import handleRoutes from "./routes";
import config from "./config";

const app = express();
// Set up mongoose connection
var mongoose = require("mongoose");
var dev_db_url = config.DEV_DB_URL;
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.static("public"));
handleRoutes(app);
renderDOM(app);
app.listen(process.env.PORT || config.PORT, () => {
  console.log("Server is listening");
});

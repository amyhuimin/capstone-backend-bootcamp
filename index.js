const cors = require("cors");
const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
//Import Routers
const PostDataRouter = require("./routers/PostDataRouter.js");
//Import Controllers
const PostDataController = require("./controllers/PostDataController.js");
//Import Models
const db = require("./models/index.js");
//Unwrap models
const { PostsData, IdeasData } = db;

//BackendURL
const PORT = process.env.PORT;
const app = express();

//Init Controllers
const PostsDataCon = new PostDataController(PostsData);

//Init Routers
const PostDataRoutes = new PostDataRouter(PostsDataCon).routes();

app.use(cors());
app.use(express.json());

app.use("/", PostDataRoutes);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

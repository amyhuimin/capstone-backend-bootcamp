const cors = require("cors");
const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
//Import Routers
const PostDataRouter = require("./routers/PostDataRouter.js");
const imageRouter = require("./routers/imageRouter.js");
//Import Controllers
const PostDataController = require("./controllers/PostDataController.js");
const ProgressingIdeasController = require("./controllers/ProgessingIdeasDataController.js");
//Import Models
const db = require("./models/index.js");
const ProgressingIdeasRouter = require("./routers/ProgressingIdeasRouter.js");
//Unwrap models
const { PostsData, IdeasData, ProgressingIdeas } = db;

//BackendURL
const PORT = process.env.PORT;
const app = express();

//Init Controllers
const PostsDataCon = new PostDataController(PostsData);
const ProgressingIdeasCon = new ProgressingIdeasController(ProgressingIdeas);
//Init Routers
const PostDataRoutes = new PostDataRouter(PostsDataCon).routes();
const ImageRouter = new imageRouter().routes();
const ProgressingIdeaRouter = new ProgressingIdeasRouter(
  ProgressingIdeasCon
).routes();

app.use(cors());
app.use(express.json());

app.use("/", PostDataRoutes);
app.use("/uploadimage", ImageRouter);
app.use("/progressingideas", ProgressingIdeaRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

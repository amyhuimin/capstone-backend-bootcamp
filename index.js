const cors = require("cors");
const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
//Import Routers
const PostDataRouter = require("./routers/PostDataRouter.js");
const imageRouter = require("./routers/imageRouter.js");
const IdeaRouter = require("./routers/IdeasRouter");
const userRouter = require("./routers/userRouter");
const ProgressingIdeasRouter = require("./routers/ProgressingIdeasRouter.js");
//Import Controllers
const PostDataController = require("./controllers/PostDataController.js");
const ProgressingIdeasDataController = require("./controllers/ProgessingIdeasDataController.js");
//Import Models
const db = require("./models/index.js");
//Unwrap models
const { PostsData, IdeasData, ProgressingIdeas } = db;

//BackendURL
const PORT = process.env.PORT;
const app = express();

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: "https://Proj3/api",
  issuerBaseURL: `https://dev-oa1xn--2.us.auth0.com/`,
});

//Init Controllers
const PostsDataCon = new PostDataController(PostsData);
const ProgressingIdeasDataCon = new ProgressingIdeasDataController(
  ProgressingIdeas
);

//Init Routers
const PostDataRoutes = new PostDataRouter(PostsDataCon).routes();
//const IdeaRoutes = new IdeaRouter(IdeaCon).routes();
const ImageRouter = new imageRouter().routes();
const ProgressingIdeaRouter = new ProgressingIdeasRouter(
  ProgressingIdeasDataCon
).routes();

app.use(cors());
app.use(express.json());

app.use("/", PostDataRoutes);
app.use("/uploadimage", ImageRouter);
app.use("/progressingideas", ProgressingIdeaRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

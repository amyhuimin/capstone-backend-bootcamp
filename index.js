const cors = require("cors");
const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
//Import Routers
const PostDataRouter = require("./routers/PostDataRouter.js");
const imageRouter = require("./routers/imageRouter.js");
const IdeaRouter = require("./routers/IdeasRouter");
const userRouter = require("./routers/userRouter");
//Import Controllers
const PostDataController = require("./controllers/PostDataController.js");
const IdeasController = require("./controllers/IdeasController");
const userController = require("./controllers/userController");
//Import Models
const db = require("./models/index.js");
//Unwrap models
const { PostsData, IdeasData, Users } = db;

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
const IdeaCon = new IdeasController(IdeasData);
const UserCon = new userController(Users);

//Init Routers
const PostDataRoutes = new PostDataRouter(PostsDataCon).routes();
const IdeaRoutes = new IdeaRouter(IdeaCon).routes();
const ImageRouter = new imageRouter().routes();
const UserRoutes = new userRouter(UserCon, checkJwt).routes();

app.use(cors());
app.use(express.json());

app.use("/", PostDataRoutes);
app.use("/uploadimage", ImageRouter);
app.use("/idea", IdeaRoutes);
app.use("/User", UserRoutes);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

const express = require("express");
const router = express.Router();
class PostDataRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/post", this.controller.postOne.bind(this.controller));
    router.get("/get/:PostId", this.controller.getOne.bind(this.controller));

    return router;
  }
}

module.exports = PostDataRouter;

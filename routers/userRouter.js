const express = require("express");
const router = express.Router();
class userRouter {
  constructor(controller, auth) {
    this.auth = auth;
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get(
      "/:UserEmail",
      this.controller.getOne.bind(this.controller),
      this.auth
    );

    router.post(
      "/",
      this.auth,
      this.controller.insertOne.bind(this.controller)
    );

    router.put(
      "/update/",
      this.auth,
      this.controller.updateOne.bind(this.controller)
    );
    return router;
  }
}

module.exports = userRouter;

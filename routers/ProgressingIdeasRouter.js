const express = require("express");
const router = express.Router();
class ProgressingIdeasRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    // router.post("/", this.controller.postOne.bind(this.controller));

    return router;
  }
}

module.exports = ProgressingIdeasRouter;

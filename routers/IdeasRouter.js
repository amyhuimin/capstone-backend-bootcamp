const express = require("express");
const router = express.Router();
class IdeasRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/post/", this.controller.postOne.bind(this.controller));

    // router.get("/:IdeaId", this.controller.getOne.bind(this.controller));
    // router.delete("/:id", this.controller.deleteOne.bind(this.controller));
    // router.put("/:id", this.controller.updateOne.bind(this.controller));
    // router.get("/all/all", this.controller.getAllProps.bind(this.controller));
    

    return router;
  }
}

module.exports = IdeasRouter;

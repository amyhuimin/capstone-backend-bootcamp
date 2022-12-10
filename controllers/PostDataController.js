const BaseController = require("./baseController.js");

class PostDataController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getAll(req, res) {
    try {
      const allPosts = await this.model.findAll();
      console.log(allPosts);
      return res.json(allPosts);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = PostDataController;

const BaseController = require("./baseController.js");

class PostDataController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getAll(req, res) {
    try {
      const allPosts = await this.model.findAll();
      return res.json(allPosts);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOne(req, res) {
    try {
      const { PostId } = req.params;
      const OnePosts = await this.model.findOne({
        where: { Id: PostId },
      });
      return res.json(OnePosts);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async postOne(req, res) {
    try {
      return res.json();
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = PostDataController;

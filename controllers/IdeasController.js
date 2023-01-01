const BaseController = require("./baseController.js");

class IdeasController extends BaseController {
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

  async getOne(req, res) {
    const { IdeaId } = req.params;
    try {
      const idea = await this.model.findByPk(IdeaId, {
        include: [
          {
            model: this.userModel,
            attributes: ["id"],
          },
        ],
      });
      return res.json(idea);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async postOne(req, res) {
    try {
      const data = req.body;
      console.log(data);
      const postResult = await this.model.create(data);
      return res.json(postResult);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = IdeasController;

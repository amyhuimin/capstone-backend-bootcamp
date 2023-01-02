const BaseController = require("./baseController.js");

class IdeasController extends BaseController {
  constructor(model, userModel) {
    super(model);
    this.userModel = userModel;
  }

  async getAll(req, res) {
    try {
      const allPosts = await this.model.findAll();
      return res.json(allPosts);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getUserIdeas(req, res) {
    try {
      const { UserId } = req.params;
      const allPosts = await this.model.findAll({
        where: { UserId: UserId },
      });
      return res.json(allPosts);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOne(req, res) {
    const { IdeaId } = req.params;
    try {
      const idea = await this.model.findOne({
        where: { IdeaId: IdeaId },
        include: [
          {
            model: this.userModel,
            attributes: ["Id"],
          },
        ],
      });
      console.log(idea);
      return res.json(idea);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async postOne(req, res) {
    try {
      const data = req.body;
      const postResult = await this.model.create(data);
      return res.json(postResult);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = IdeasController;

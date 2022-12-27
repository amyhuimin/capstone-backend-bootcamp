const BaseController = require("./baseController.js");

class userController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getOne(req, res) {
    try {
      const { UserEmail } = req.params;
      const CurrUser = await this.model.findOne({
        where: { UserEmail: UserEmail },
      });
      console.log(CurrUser);
      return res.json(CurrUser);
    } catch (err) {
      return res.status(400).json({ data: false });
    }
  }

  async insertOne(req, res) {
    const { UserEmail, UserName, ProfilePicURL } = req.body;
    try {
      // Create new user
      const newUser = await this.model.create({
        UserEmail: UserEmail,
        UserName: UserName,
        ProfilePicURL: ProfilePicURL,
        Ideas: 0,
        Followers: 0,
        Following: 0,
      });
      console.log(newUser);
      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async updateOne(req, res) {
    try {
      console.log(req.body);
      const { Id, Ideas } = req.body;
      const updatedUser = await this.model.update(
        {
          Ideas: Ideas,
        },
        {
          where: { Id: Id },
        }
      );
      return res.json(updatedUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = userController;

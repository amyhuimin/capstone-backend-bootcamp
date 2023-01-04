const BaseController = require("./baseController.js");

class UserController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getOne(req, res) {
    try {
      const { Data } = req.params;
      const checkId = parseInt(Data);
      var CurrUser;
      if (Number.isNaN(checkId)) {
        CurrUser = await this.model.findOne({
          where: { UserEmail: Data },
        });
      } else {
        CurrUser = await this.model.findOne({
          where: { Id: checkId },
        });
      }
      return res.json(CurrUser);
    } catch (err) {
      return res.status(400).json({ data: false });
    }
  }

  async getbyId(req, res) {
    try {
      const { UserId } = req.params;
      const CurrUser = await this.model.findOne({
        where: { Id: UserId },
      });
      return res.json(CurrUser), console.log(req.params);
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
      });
      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async updateOne(req, res) {
    try {
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
module.exports = UserController;

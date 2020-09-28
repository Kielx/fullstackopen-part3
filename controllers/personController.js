const Person = require("../models/Person");

module.exports = {
  createPerson: async (req, res, next) => {
    try {
      let created = await Person.create({
        name: req.body.name,
        phone: req.body.phone,
      });
      created = created.toJSON();
      delete created["__v"];
      res.status("200").json(created);
    } catch (error) {
      next(error);
    }
  },

  getPersons: async (req, res, next) => {
    try {
      const PersonsList = await Person.find({});
      res.status(200).json(PersonsList);
    } catch (error) {}
  },

  getSinglePerson: async (req, res) => {
    try {
      const foundUser = await Person.findById(req.params.id);
      res.json(foundUser);
    } catch (e) {
      return next(error);
    }
  },
};

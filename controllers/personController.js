const Person = require("../models/Person");

module.exports = {
  createPerson: async (name, phone) => {
    try {
      return await Person.create({ name: name, phone: phone });
    } catch (e) {
      console.log("caught");
      return e;
    }
  },

  getPersons: async (req, res, next) => {
    try {
      const PersonsList = await abc.find({});
      res.status(200).json(PersonsList);
    } catch (error) {
      return next(error);
    }
  },
};

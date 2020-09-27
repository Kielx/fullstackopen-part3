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

  getPersons: () => {
    const PersonsList = Person.find({});
    return PersonsList;
  },
};

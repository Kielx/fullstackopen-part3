const Person = require("../models/Person");

module.exports = {
  createPerson: () => {
    Person.create({ name: "Kielx", phone: 123456789 }, function (err, small) {
      if (err) return handleError(err);
      console.log("saved");
    });
  },

  getPersons: async () => {
    const PersonsList = await Person.find({});
    return PersonsList;
  },
};

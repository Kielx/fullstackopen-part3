const Person = require("../models/Person");

module.exports = {
  getSiteInfo: async (req, res) => {
    let persons = await Person.find({});
    res.send(
      `
      <p>Phonebook has info for ${
        persons.length
      } persons </p> <p>${new Date()}</p>`
    );
  },
};

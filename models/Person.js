const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log("dupa", err);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to mongoDB");
});

const personSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  phone: String,
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;

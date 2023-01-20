const mongoose = require("mongoose");

const locations = new mongoose.Schema({
  Locations: { type: String, require: true },
  Attractions: { type: Object, require: true },
  Lodging: { type: Object, require: true },
});

const Locations = mongoose.model("Locations", locations);
module.exports = Locations;

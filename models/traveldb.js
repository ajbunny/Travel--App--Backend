const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema ({
    Lodging: {type: String, require: true},
    Attractions: {type: String, require: true},
    Location: {type: String, require: true},
    Availability: {type: String, require: true},
    Price: {type: Number, require:true}
})



const Booking = mongoose.model('Booking', travelSchema);
module.exports = Booking;
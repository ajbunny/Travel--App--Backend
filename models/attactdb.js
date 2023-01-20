const mongoose = require('mongoose');

const attractions = new mongoose.Schema ({
    Name: {type: String, require: true},
    Address: {type: String, require: true},
    Price: {type: Number, require:true}
})



const Attractions = mongoose.model('Attractions', attractions);
module.exports = Attractions;
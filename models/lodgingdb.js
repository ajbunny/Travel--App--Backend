const mongoose = require('mongoose');

const lodging = new mongoose.Schema ({
    Name: {type: String, require: true},
    Address: {type: String, require: true},
    Price: {type: Number, require:true},
    PersonLimit: {type:Number, require:true}
})



const Lodging = mongoose.model('Lodging', lodging);
module.exports = Lodging;
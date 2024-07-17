const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,
    description : String,
});


const MobileModel = mongoose.model("Mobile", MobileSchema);
module.exports = MobileModel;
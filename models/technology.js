const mongoose = require("mongoose")
const technologySchema = mongoose.Schema({
    brand: String,
    price: {type: Number, max: [4000, 'Too expensive']},
    category: String
})

module.exports = mongoose.model("technology", technologySchema)



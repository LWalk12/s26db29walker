const mongoose = require("mongoose")
const technologySchema = mongoose.Schema({
    brand: String,
    price: Number,
    category: String
})

module.exports = mongoose.model("technology", technologySchema)



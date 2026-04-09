const mongoose = require("mongoose")
const technologySchema = mongoose.Schema({
    brand: String,
    price: Number,
    catergory: String
})

module.exports = mongoose.model("technology", technologySchema)



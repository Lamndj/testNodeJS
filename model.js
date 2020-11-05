const mongoose = require("mongoose")

const bannerSchema = mongoose.Schema({
    bannerName:String,
    productURL:String
})

module.exports = mongoose.model("e_banners",bannerSchema)
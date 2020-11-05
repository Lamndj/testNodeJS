const express = require("express")
const mongoose = require("mongoose")
const bannerSchema = require("./model")

const app = express()

const port = process.env.PORT || 8080

mongoose.connect("mongodb+srv://hunter:hunt_vk@cluster0-x3aca.mongodb.net/IRS_ECOMMERCE?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () => console.log("mongodb connected"))

app.get("/", (req,res) => {
    bannerSchema.find({}).then(docs => {
        res.json(docs)
    })
})

app.listen(port, () => console.log(`app listening at port ${port}`))
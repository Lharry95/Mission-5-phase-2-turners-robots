const mongoose = require('mongoose')

const searchSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, required: true},
    image: { type: String, required: true},
})

module.exports = mongoose.model('Search', searchSchema)
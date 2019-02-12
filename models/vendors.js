const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vendorSchema = mongoose.Schema({
    email: String,
    password: String,
    vendorName: String,
    location: String,
    image: String,
    schedule: [String],
    category: String,
    phone: Number,
    website: String,
    googleId: String
})

const Vendor = mongoose.model('Vendor', vendorSchema)

module.exports = Vendor
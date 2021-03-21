const mongoose = require('mongoose')
const Schema = mongoose.Schema

const College = new Schema(
    {   
        name: { type: String, required: false },
        year: { type: Number, required: false },
        city: { type: String, required: false },
        state: { type: String, required: false },
        country: { type: String, required: false },
        noOfStudents: { type: Number, required: false},
        courses: { type: [String], required: false },

    },
    { timestamps: true },
)

module.exports = mongoose.model('colleges', College)
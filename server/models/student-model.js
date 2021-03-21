const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema(
    {
        name: { type: String, required: false },
        yearOfBatch: { type: Number, required: false },
        collegeId: { type: String, required: false },
        skills: {type: [String], required :false}

    },
    { timestamps: true },
)

module.exports = mongoose.model('students', Student)
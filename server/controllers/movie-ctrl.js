const Movie = require('../models/movie-model')
const College  = require('../models/college-model')
const Student = require('../models/student-model')

createStudent = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const student = new Student(body)

    if (!student) {
        return res.status(400).json({ success: false, error: err })
    }

    student
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: student._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
}
createCollege = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const college = new College(body)

    if (!college) {
        return res.status(400).json({ success: false, error: err })
    }

    college
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: college._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
}

getStudentById = async (req, res) => {
    await Student.findOne({ _id: req.params.id }, (err, student) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!student) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: student })
    }).catch(err => console.log(err))
}

getCollegeById = async (req, res) => {
    await College.findOne({ _id: req.params.id }, (err, college) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!college) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: college })
    }).catch(err => console.log(err))
}

getStudents = async (req, res) => {
    await Student.find({}, (err, students) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!students.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: students })
    }).catch(err => console.log(err))
}
getColleges = async (req, res) => {
    await College.find({}, (err, colleges) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!colleges.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: colleges })
    }).catch(err => console.log(err))
}

module.exports = {
    createCollege,
    createStudent,
    getStudents,
    getColleges,
    getStudentById,
    getCollegeById
}
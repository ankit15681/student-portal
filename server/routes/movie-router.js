const express = require('express')

const MovieCtrl = require('../controllers/movie-ctrl')

const router = express.Router()

router.post('/student', MovieCtrl.createStudent)
router.post('/college', MovieCtrl.createCollege)
router.get('/colleges/:id', MovieCtrl.getCollegeById)
router.get('/students/:id', MovieCtrl.getStudentById)
router.get('/students', MovieCtrl.getStudents)
router.get('/colleges', MovieCtrl.getColleges)

module.exports = router
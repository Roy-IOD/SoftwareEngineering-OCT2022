const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.studentController.getStudents(res);
})

router.post('/', (req, res) => {
    Controllers.studentController.createStudents(req.body, res)
})

router.put('/:studentID', (req, res) => {
    Controllers.studentController.updateStudentDetails(req, res)
})

router.delete('/:studentID', (req, res) => {
    Controllers.studentController.deleteStudent(req, res)
})

module.exports = router;
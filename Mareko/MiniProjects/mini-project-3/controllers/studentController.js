"use strict";

const Models = require("../models");

const getStudents = (res) => {
    Models.Student.findAll({})
        .then((data) => {res.send({result: 200 , data: data})})
        .catch(err => { console.log(err); res.send({result: 500, error: err.message})})
}

const createStudents = (data, res) => {
    Models.Student.create(data)
        .then((data) => { res.send({ result: 200 , data: data})})
        .catch(err => { console.log(err); res.send({result: 500, error: err.message})})
}

const updateStudentDetails = (req, res) => {
    Models.Student.update(req.body, { where: {studentID: req.params.studentID} })
    .then(data => res.send({ result: 200, data: data }))
    .catch (err => { console.log(err); res.send({result: 500, error: err.message})})
}

const deleteStudent = (req, res) => {
    Models.Student.destroy({ where: {studentID: req.params.studentID} })
    .then(data => res.send({ result: 200, data: data }))
    .catch (err => { console.log(err); res.send({result: 500, error: err.message})})
}


module.exports = {
    getStudents, createStudents, updateStudentDetails, deleteStudent
}
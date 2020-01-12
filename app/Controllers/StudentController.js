// contactController.js
// Import contact model
Student = require('../Models/Student');
// Handle index actions
exports.index = function (req, res) {
    Student.get(function (err, students) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Students retrieved successfully",
            data: students
        });
    });
};

// Handle create student actions
exports.new = function (req, res) {
    let student = new Student();
    student.first_name = req.body.first_name ? req.body.first_name : student.first_name;
    student.last_name = req.body.last_name ? req.body.last_name : student.last_name;
    student.gender = req.body.gender;
    student.state = req.body.state;
    student.dob = req.body.dob;
    student.marital_status = req.body.marital_status;
    student.email = req.body.email;
    student.phone = req.body.phone;
    student.institution = req.body.institution;
    student.department = req.body.department;
// save the student and check for errors
    student.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            status: "success",
            message: 'Student created successfully!',
            data: student
        });
    });
};

// Handle view student info
exports.view = function (req, res) {
    Student.findById(req.params.student_id, function (err, student) {
        if (err){
            res.send(err);
        }
        res.json({
            status: "success",
            message: "Student's details was retrieved successfully",
            data: student
        });
    });
};

// Handle update student info
exports.update = function (req, res) {
Student.findById(req.params.student_id, function (err, student) {
        if (err)
            res.send(err);
            student.first_name = req.body.first_name;
            student.last_name = req.body.last_name;
            student.gender = req.body.gender;
            student.state = req.body.state;
            student.dob = req.body.dob;
            student.marital_status = req.body.marital_status;
            student.email = req.body.email;
            student.phone = req.body.phone;
            student.institution = req.body.institution;
            student.department = req.body.department;
// save the student and check for errors
        student.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                status: "success",
                message: 'Student Info was updated successfully',
                data: student
            });
        });
    });
};

// Handle delete student
exports.delete = function (req, res) {
    Student.remove({
        _id: req.params.student_id
    }, function (err, student) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Student deleted successfully'
        });
    });
};

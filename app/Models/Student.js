// StudentModel.js
let mongoose = require('mongoose');

// Setup schema
let studentSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    gender: String,
    state: String,
    dob: String,
    marital_status: String,
    email: {
        type: String,
        required: true
    },
    phone: String,
    institution: String,
    department: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
let Student = module.exports = mongoose.model('student', studentSchema);
module.exports.get = function (callback, limit) {
    Student.find(callback).limit(limit);
}
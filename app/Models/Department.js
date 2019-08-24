// StudentModel.js
let mongoose = require('mongoose');

// Setup schema
let departmentSchema = mongoose.Schema({
    name: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
let Department = module.exports = mongoose.model('department', departmentSchema);
module.exports.get = function (callback, limit) {
    Department.find(callback).limit(limit);
}
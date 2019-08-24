// StudentModel.js
let mongoose = require('mongoose');

// Setup schema
let institutionSchema = mongoose.Schema({
    name: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
let Institution = module.exports = mongoose.model('institution', institutionSchema);
module.exports.get = function (callback, limit) {
    Institution.find(callback).limit(limit);
}
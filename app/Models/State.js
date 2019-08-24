// StudentModel.js
let mongoose = require('mongoose');

// Setup schema
let stateSchema = mongoose.Schema({
    name: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
let State = module.exports = mongoose.model('state', stateSchema);
module.exports.get = function (callback, limit) {
    State.find(callback).limit(limit);
}
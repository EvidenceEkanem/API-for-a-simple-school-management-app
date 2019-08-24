// contactController.js
// Import contact model
State = require('../Models/State');
// Handle index actions
exports.index = function (req, res) {
    State.get(function (err, state) {
        if (err) {
            res.json({
                status: "error",
                message: error,
            });
        }
        res.json({
            status: "success",
            message: "States retrieved successfully",
            data: state
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    
    const saveState = []
    const data = 
    [
        'Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',
        'Federal Capital Territory',
        'International',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara'
        ];
    data.map((i) => {
        let state = new State(data[i])
        state.name = i
        state.save()
        .then((result) => {
            saveState.push(result)
            if (saveState.length === data.length) {
                res.json({
                    status: 'success',
                    message: 'States created successfully!', 
                    data: saveState
                });
            }
        })
        .catch((err) => {
            console.error(err)
            res.json({
                status: "error",
                message: error,
            });
        })
    })

}

exports.delete = function (req, res) {
    State.remove({
    }, function (err, state) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'States deleted successfully'
        });
    });
};
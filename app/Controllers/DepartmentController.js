// contactController.js
// Import contact model
Department = require('../Models/Department');
// Handle index actions
exports.index = function (req, res) {
    Department.get(function (err, department) {
        if (err) {
            res.json({
                status: "error",
                message: error,
            });
        }
        res.json({
            status: "success",
            message: "Departments retrieved successfully",
            data: department
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    
    const saveDepartment = []
    const data = 
    [
        'Agricultural Economics And Extension',
        'Home Economics',
        'Fisheries And Aquaculture',
        'Environmental Health Management',
        'Agronomy',
        'Animal Science',
        'Soil Science',
        'Forestry And Wildlife',
        'Food Science And Technology',
        'Crop Science',
        'Agro Forestry',
        'History And International Studies',
        'Foreign Languages',
        'Religious Cultural Studies',
        'Communication Arts',
        'Music',
        'Linguistics And Nigerian Languages',
        'French',
        'Theatre Arts',
        'English',
        'Philosophy',
        'Liguistics',
        'Biochemistry',
        'Physiology',
        'Anatomy',
        'Marketing',
        'Banking And Finance',
        'Accounting',
        'Insurance',
        'Business Management',
        'Business Administration',
        'Medicine And Surgery',
        'Educational Technology And Library Science',
        'Early Childhood And Special Education',
        'Vocational Education',
        'Physical And Health Education',
        'Postgraduate Diploma In Education',
        'Educational Foundation',
        'Curriculum Studies Educational Mgt. And Planning',
        'Science Education',
        'Institute Of Education',
        'Chemical Engineering',
        'Mechanical Engineering',
        'Electrical/Electronics Engineering',
        'Computer Engineering',
        'Agricultural Engineering',
        'Petroleum Engineering',
       'Food Engineering',
        'Civil Engineering',
        'Law',
        'Pharmacy'
    ];
    data.map((i) => {
        let department = new Department(data[i])
        department.name = i
        department.save()
        .then((result) => {
            saveDepartment.push(result)
            if (saveDepartment.length === data.length) {
                res.json({
                    status: 'success',
                    message: 'Department created successfully!', 
                    data: saveDepartment
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
    Department.remove({
    }, function (err, department) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Departments deleted successfully'
        });
    });
};
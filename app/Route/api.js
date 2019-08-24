let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Basic Student Information system API crafted by Evidence Ekanem!',
    });
});
// Import contact controller
var StudentController = require('../Controllers/StudentController');
var StateController = require('../Controllers/StateController');
var InstitutionController = require('../Controllers/InstitutionController');
var DepartmentController = require('../Controllers/DepartmentController');

// Contact routes
router.route('/students')
    .get(StudentController.index)
    .post(StudentController.new);

router.route('/students/:student_id')
    .get(StudentController.view)
    .patch(StudentController.update)
    .put(StudentController.update)
    .delete(StudentController.delete);

router.route('/states')
    .get(StateController.index)
    .post(StateController.new)  
    .delete(StateController.delete); 
    
router.route('/institutions')
    .get(InstitutionController.index)
    .post(InstitutionController.new)  
    .delete(InstitutionController.delete); 

router.route('/departments')
    .get(DepartmentController.index)
    .post(DepartmentController.new)  
    .delete(DepartmentController.delete); 

// Export API routes
module.exports = router;
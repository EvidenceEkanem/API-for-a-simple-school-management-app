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

// Contact routes
router.route('/students')
    .get(StudentController.index)
    .post(StudentController.new);

router.route('/students/:student_id')
    .get(StudentController.view)
    .patch(StudentController.update)
    .put(StudentController.update)
    .delete(StudentController.delete);
    
// Export API routes
module.exports = router;
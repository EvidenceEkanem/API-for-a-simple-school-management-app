// contactController.js
// Import contact model
Institution = require('../Models/Institution');
// Handle index actions
exports.index = function (req, res) {
    Institution.get(function (err, institution) {
        if (err) {
            res.json({
                status: "error",
                message: error,
            });
        }
        res.json({
            status: "success",
            message: "Institutions retrieved successfully",
            data: institution
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    
    const saveInstitution = []
    const data = 
    [
        'Abubakar Tafawa Balewa University', 
        'Ahmadu Bello University', 
        'Bayero University', 
        'Federal University Gashua', 
        'Federal University of Petroleum Resources',
        'Federal University of Technology, Akure',
        'Federal University of Technology, Minna',
        'Federal University of Technology, Owerri',
        'Federal University, Dutse, Jigawa State',
        'Federal University, Dutsin-Ma, Katsina',
        'Federal University, Kashere, Gombe State',
        'Federal University, Lafia, Nasarawa State',
        'Federal University, Lokoja, Kogi State',
        'Alex Ekwueme University, Ndufu-Alike, Ebonyi State',
        'Federal University, Otuoke, Bayelsa',
        'Federal University, Oye-Ekiti, Ekiti State',
        'Federal University, Wukari, Taraba State',
       'Federal University, Birnin Kebbi',
        'Federal University, Gusau Zamfara',
        'Michael Okpara University of Agricultural, Umudike',
        'Modibbo Adama University of Technology, Yola',
        'National Open University of Nigeria, Lagos',
        'Nigeria Police Academy, Wudil',
        'Nigerian Defence Academy Kaduna',
        'Nnamdi Azikiwe University, Awka',
        'Obafemi Awolowo University,Ile-Ife',
        'University of Abuja, Gwagwalada',
        'Federal University of Agriculture, Abeokuta',
        'University of Agriculture, Makurdi',
        'University of Benin',
       'University of Calabar',
        'University of Ibadan',
        'University of Ilorin',
        'University of Jos',
        'University of Lagos',
        'University of Maiduguri',
       'University of Nigeria, Nsukka',
        'University of Port-Harcourt',
       ' University of Uyo',
        'Usumanu Danfodiyo University',
        'Nigerian Maritime University Okerenkoko, Delta State',
        'Air Force Institute of Technology, Kaduna',
        'Nigerian Army University Biu'
    ];
    data.map((i) => {
        let institution = new Institution(data[i])
        institution.name = i
        institution.save()
        .then((result) => {
            saveInstitution.push(result)
            if (saveInstitution.length === data.length) {
                res.json({
                    status: 'success',
                    message: 'Institutions created successfully!', 
                    data: saveInstitution
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
    Institution.remove({
    }, function (err, institution) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Institutions deleted successfully'
        });
    });
};
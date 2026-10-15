const validator = require('../helpers/validate');

const validateCustomer = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        email: 'required|email',
        subscriptionPlan: 'required|string',
        joinedDate: 'required|string',
        magazinesSubscribed: 'array'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed: ' + JSON.stringify(err),
                data: err
            });
        } else {
            next();
        }
    });
};

const validateArtist = (req, res, next) => {
    const validationRule = {
        picture_id: Number,
        name: String,
        description: String,
        location: String,
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed: ' + JSON.stringify(err),
                data: err
            });
        } else {
            next();
        }
    });
};

const validateLogin = (req, res, next) => {
    const validationRule = {
        email: 'required|email',
        password: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed: ' + JSON.stringify(err),
                data: err
            });
        } else {
            next();
        }
    });
};

const validateMagazine = (req, res, next) => {
    const validationRule = {
        title: 'required|string',
        publisher: 'required|string',
        genre: 'required|string',
        price: 'required|numeric',
        releaseDate: 'required|string',
        availableCopies: 'required|numeric'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed: ' + JSON.stringify(err),
                data: err
            });
        } else {
            next();
        }
    });
};

const validatePicture = (req, res, next) => {
    const validationRule = {
         artist_id: Number,
        first_name: String,
        middle_name: String,
        last_name: String,
        birth_location: String,
        death_location: String,
        birth_year: Number,
        death_year: Number,
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed: ' + JSON.stringify(err),
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    validateCustomer,
    validateArtist,
    validateLogin, 
    validateMagazine,
    validatePicture
};
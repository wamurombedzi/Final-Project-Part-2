const express = require('express');
const router = require('express').Router();
const picture = require('./picture.js');
const artist = require('./artist.js');
const customer = require('./customer.js');
const magazine = require('./magazine.js');
const passport = require('passport');

router.use('/', require('./swagger'));
router.use('/customer', require('./customer.js'));
router.use('/magazine', require('./magazine.js'));
router.use('/artist', require('./artist.js'));
router.use('/picture', require('./picture.js'));

router.get('/login', passport.authenticate('github'), (req, res) => { })

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});
   

module.exports = router;
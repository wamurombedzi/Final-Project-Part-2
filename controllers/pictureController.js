const mongodb = require('../data/database');
const Picture = require('../models/Picture');
const bcrypt = require('bcrypt');

exports.createPicture = async (req, res) => {
    try {
        const picture = new Picture(req.body);
        await Picture.save();
        res.status(201).send(Picture);
    } catch (error) {
        res.status(500).send({ error: 'Server error while creating picture: ' + error.message });
    }
};

exports.getAllPicture = async (req, res) => {
    try {
        const picture = await Picture.find();
        res.status(200).send(picture);
    } catch (error) {
        res.status(500).send({ error: 'Server error while retrieving picture: ' + error.message });
    }
};

exports.updatePicture = async (req, res) => {
    try {
        const picture = await Picture.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!picture) return res.status(404).send({ error: 'Picture not found.' });
        res.send(picture);
    } catch (error) {
        res.status(500).send({ error: 'Server error while updating picture: ' + error.message });
    }
};

exports.deletePicture = async (req, res) => {
    try {
        const picture = await Picture.findByIdAndDelete(req.params.id);
        if (!picture) {
            return res.status(404).json({ error: 'Picture not found.' });
        }
        res.status(204).send(); // No Content
    } catch (error) {
        res.status(500).json({ error: 'Server error while deleting picture: ' + error.message });
    }
};
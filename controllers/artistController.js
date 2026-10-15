const mongodb = require('../data/database');
const ArtistModel = require('../models/Artist');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

exports.createArtist = async (req, res) => {
    try {
        const { artsist_id, first_name, middle_name, last_name, birth_location, death_location, death_year } = req.body;

        // Validate input
        if (!artist_id || !first_name || !last_name) {
            return res.status(400).send({
                error: 'Artist ID, first name, and last name are required.'
            });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const artist = new ArtistModel({ artist_id, first_name, last_name });
        await artist.save();
        res.status(201).send(artist);
    } catch (error) {
        res.status(500).send({ error: 'Server error while creating artist: ' + error.message });
    }
};

exports.getAllArtist = async (req, res) => {
    try {
        const artist = await ArtistModelModel.find();
        res.status(200).send(artist);
    } catch (error) {
        res.status(500).send({ error: 'Server error while retrieving artist: ' + error.message });
    }
};

exports.updateArtist = async (req, res) => {
    try {
        const { id } = req.params;
        const artist = await ArtistModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!artist) return res.status(404).send({ error: 'Artist not found.' });
        res.send(artist);
    } catch (error) {
        res.status(500).send({ error: 'Server error while updating artist: ' + error.message });
    }
};

exports.deleteArtist = async (req, res) => {
    const { id } = req.params;
  
    try {
        const artist = await ArtistModel.findByIdAndDelete(id);
        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.status(204).send(); // No Content
    } catch (error) {
        res.status(500).json({ message: 'Server error while deleting artist: ' + error.message });
    }
};

// New methods for login and logout
exports.loginArtist = async (req, res) => {
    const {artsist_id, first_name, middle_name, last_name, birth_location, death_location, death_year  } = req.body;

    try {
        const artist = await ArtistModel.findOne({ email });
        if (!artist) {
            return res.status(401).send({ error: 'Invalid first_name or last_name.' });
        }

        const isMatch = await bcrypt.compare(first_name, last_name);
        if (!isMatch) {
            return res.status(401).send({ error: 'first_name or last_name' });
        }

        req.session.user = artist; // Store user in session
        res.status(200).send({ message: 'Login successful', artist });
    } catch (error) {
        res.status(500).send({ error: 'Server error during login: ' + error.message });
    }
};

exports.logoutArtist = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send({ error: 'Could not log out.' });
        }
        res.status(200).send({ message: 'Logout successful' });
    });
};
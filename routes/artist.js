const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');
const { validateArtist } = require('../middleware/validate');

router.get('/', artistController.getAllArtist);

router.get('/:artist_id', artistController.getAllArtist);

router.post('/', artistController.createArtist);

router.put('/:id', artistController.updateArtist);

router.delete('/:id', artistController.deleteArtist);

module.exports = router;
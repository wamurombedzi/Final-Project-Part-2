const express = require('express');
const router = express.Router();
const pictureController = require('../controllers/pictureController');
const { validatePicture } = require('../middleware/validate');

router.get('/', pictureController.getAllPicture);

router.get('/:picture_id', pictureController.getAllPicture);

router.post('/', pictureController.createPicture);

router.put('/:id', pictureController.updatePicture);

router.delete('/:id', pictureController.deletePicture);

module.exports = router;
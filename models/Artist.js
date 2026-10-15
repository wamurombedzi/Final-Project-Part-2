const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema(
     {
        picture_id: Number,
        name: String,
        description: String,
        location: String,
      },
    )

module.exports = mongoose.model('Artist', artistSchema);
const mongoose = require('mongoose')

const PublisherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  country: { type: String, required: false, trim: true },
  picture: { type: String, required: false, trim: true },
  boardgames: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Boardgame' }],
})

const Publisher = mongoose.model('Publisher', PublisherSchema)

module.exports = Publisher

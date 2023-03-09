// const mongoose = require('mongoose')

// const BoardgameSchema = mongoose.Schema({
//   name: { type: String, required: false, trim: true },
//   genre: {
//     type: String,
//     required: false,
//     trim: true,
//     enum: ['eurogame', 'ameritrash', 'party', 'family'],
//   },
//   picture: { type: String, required: false, trim: true },
//   publisher: { type: String, required: false, trim: true },
// })

// const Boardgame = mongoose.model('Boardgame', BoardgameSchema)

// module.exports = Boardgame

const mongoose = require('mongoose')

const BoardgameSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  author: { type: String, required: false, trim: true },
  maxPlayers: { type: Number, required: false },
  minPlayers: { type: Number, required: false },
  genre: {
    type: String,
    required: true,
    trim: true,
    enum: ['eurogame', 'ameritrash', 'party', 'family'],
  },
  publisher: { type: String, trim: true },
})

const Boardgame = mongoose.model('Boardgame', BoardgameSchema)

module.exports = Boardgame

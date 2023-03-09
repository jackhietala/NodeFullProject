const express = require('express')

const BoardgameRoutes = express.Router()

const { upload } = require('../middlewares/files.middleware')
const { isAuth } = require('../middlewares/auth.middleware')

const {
  getAllBoardgames,
  getBoardgameByID,
  createBoardgame,
  updateBoardgame,
  deleteBoardgame,
} = require('../controllers/boardgames.controller')

BoardgameRoutes.get('/', [isAuth], getAllBoardgames)
BoardgameRoutes.get('/:id', getBoardgameByID)
BoardgameRoutes.post('/', upload.single('image'), createBoardgame)
BoardgameRoutes.put('/:id', updateBoardgame)
BoardgameRoutes.delete('/:id', deleteBoardgame)

module.exports = BoardgameRoutes

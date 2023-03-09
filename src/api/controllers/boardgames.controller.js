const Boardgame = require('../models/boardgames.models')

//getAll
const getAllBoardgames = async (req, res, next) => {
  try {
    const boardgames = await Boardgame.find()
    return res.status(200).json(boardgames)
  } catch (error) {
    return next(error)
  }
}

//getbyID

const getBoardgameByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const boardgame = await Boardgame.findById(id)
    return res.status(200).json(boardgame)
  } catch (error) {
    return next(error)
  }
}

//create

const createBoardgame = async (req, res, next) => {
  try {
    const newBoardgame = new Boardgame({
      ...req.body,
      image: req.file ? req.file.path : 'Not image found',
    })
    const createdBoardgame = await newBoardgame.save()
    return res.status(201).json(createdBoardgame)
  } catch (error) {
    return next(error)
  }
}

//update

const updateBoardgame = async (req, res, next) => {
  try {
    const { id } = req.params
    const updatedBoardgame = await Boardgame.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    return res.status(200).json(updatedBoardgame)
  } catch (error) {
    return next(error)
  }
}

//delete

const deleteBoardgame = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedBoardgame = await Boardgame.findByIdAndDelete(id)
    res.status(200).json(deletedBoardgame)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getAllBoardgames,
  getBoardgameByID,
  createBoardgame,
  updateBoardgame,
  deleteBoardgame,
}

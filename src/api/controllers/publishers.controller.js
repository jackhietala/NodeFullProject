const Publisher = require('../models/publishers.model')

const getAllPublishers = async (req, res, next) => {
  try {
    const publishers = await Publisher.find().populate('boardgames')
    return res.status(200).json(publishers)
  } catch (error) {
    return next(error)
  }
}

const getPublisherByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const Publisher = await Publisher.findById(id)
    return res.status(200).json(Publisher)
  } catch (error) {
    return next(error)
  }
}

//create

const createPublisher = async (req, res, next) => {
  try {
    const newPublisher = new Publisher(req.body)
    const createdPublisher = await newPublisher.save()
    return res.status(201).json(createdPublisher)
  } catch (error) {
    return next(error)
  }
}

//update

const updatePublisher = async (req, res, next) => {
  try {
    const { id } = req.params
    const updatedPublisher = await Publisher.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    return res.status(200).json(updatedPublisher)
  } catch (error) {
    return next(error)
  }
}

//delete

const deletePublisher = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedPublisher = await Publisher.findByIdAndDelete(id)
    res.status(200).json(deletedPublisher)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getAllPublishers,
  getPublisherByID,
  createPublisher,
  updatePublisher,
  deletePublisher,
}

const express = require('express')

const PublisherRoutes = express.Router()

const {
  getAllPublishers,
  getPublisherByID,
  createPublisher,
  updatePublisher,
  deletePublisher,
} = require('../controllers/publishers.controller')

PublisherRoutes.get('/', getAllPublishers)
PublisherRoutes.get('/:id', getPublisherByID)
PublisherRoutes.post('/', createPublisher)
PublisherRoutes.put('/:id', updatePublisher)
PublisherRoutes.delete('/:id', deletePublisher)

module.exports = PublisherRoutes

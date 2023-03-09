const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connect = require('./utils/connect')
const BoardgameRoutes = require('./api/routes/boardgame.routes')
const PublisherRoutes = require('./api/routes/publisher.routes')
const UsersRoutes = require('../src/api/routes/users.routes')
const { configCloudinary } = require('../src/api/middlewares/files.middleware')
configCloudinary()
dotenv.config()
const PORT = process.env.PORT

const server = express()
connect()
server.use(
  cors({
    origin: '*',
    credentials: true,
  })
)

server.use(express.json({ limit: '5mb' }))
server.use(express.urlencoded({ limit: '5mb', extended: true }))

server.use('/api/v1/boardgames', BoardgameRoutes)
server.use('/api/v1/publishers', PublisherRoutes)
server.use('/api/v1/users', UsersRoutes)

server.use('*', (req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  return next(error)
})

server.disable('x-powered-by')

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

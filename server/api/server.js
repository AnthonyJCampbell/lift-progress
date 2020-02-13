const express = require('express');
const cors = require('cors')
const helmet = require('helmet');

const server = express();

server.use(helmet())
server.use(express.json());
server.use(cors())

// Import Routes
// const routes = require('./location');
const router = require('../routes')

// Routing && prefixing URLs
// server.use('URL', _ROUTES_);
server.use('/api', router)

server.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Server's alive!"
  })
})

server.get('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Invalid route!'
  });
});

module.exports = server;
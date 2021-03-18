const express = require('express');

const helmet = require('helmet');

const db = require('./../data/db-config');

const server = express();

server.use(helmet());

server.use(express.json());

server.get('/', (req, res) => {
    res.json({ message: 'hey I am working!' });
});

server.get('/api/', (req, res) => {
    res.json({ message: 'this working?' });
});

module.exports = server;
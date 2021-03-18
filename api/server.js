const express = require('express');

const helmet = require('helmet');

const db = require('./../data/db-config');

const server = express();

server.use(helmet());

server.use(express.json());

server.get('/', (req, res) => {
    res.json({ message: 'hey I am working!' });
});

server.get('/api', async (req, res) => {
    const data = await db.select('*').from('recipes');

    res.status(200).json(data);
});

module.exports = server;
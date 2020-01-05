const express = require('express');
const helmet = require('helmet');

const server = express();

const BusinessRouter = require('./business/business-routes');

server.use(helmet());
server.use(express.json());

server.use('/api', BusinessRouter);


server.get('/', (req, res) => {
    res.send(`
        <h1>Jenn Hott-Leitsch</h1>
        <p>Node DB Sprint Challenge</p>
    `);
});

module.exports = server;
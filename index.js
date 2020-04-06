const express = require("express");

const server = express();

let users = [
  {
    id: 1,
    name: 'Jane Doe',
    bio: "Not Tarzan's Wife, another Jane",
  },
];

// middlware
server.use(express.json());

// end points
server.get('/api/users', (req, res) => {

});

server.get('/api/users/:id', (req, res) => {

});

server.post('/api/users', (req, res) => {

});

server.delete('/api/users/:id', (req, res) => {

});

server.patch('/api/users/:id', (req, res) => {

});

const port = 5000;
server.listen(port, () => console.log(`\n== api on port ${port} ==\n`));

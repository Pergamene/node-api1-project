const express = require("express");

const server = express();

const port = 5000;
server.listen(port, () => console.log(`\n== api on port ${port} ==\n`));

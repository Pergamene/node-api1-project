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

// END POINTS

/**
 * If there is an error retrieving from the db:
 *    status code 500
 *    return `{ errorMessage: "The users information could not be retrieved." }`
 */
server.get('/api/users', (req, res) => {

});

/**
 * If the user with the id is not found:
 *    status code 404
 *    return `{ message: "The user with the specified ID does not exist." }`
 * 
 * If there is an error in retrieving the user from db:
 *    status code 500
 *    return `{ errorMessage: "The user information could not be retrieved." }`
 */
server.get('/api/users/:id', (req, res) => {

});

/**
 * If the request body is missing the `name` or `bio` property:
 *    status code 400
 *    return: `{ errorMessage: "Please provide name and bio for the user." }`
 * 
 * If the information is valid:
 *    save new user to db
 *    status code 201
 *    return user document
 * 
 * If there's an error while saving:
 *    status code 500
 *    return: `{ errorMessage: "There was an error while saving the user to the database" }`
 */
server.post('/api/users', (req, res) => {
  const userInfo = req.body;
});

/**
 * If the user with the id is not found:
 *    status code 404
 *    return `{ message: "The user with the specified ID does not exist." }`
 * 
 * If there's an error in removing the user from db:
 *    status code 500
 *    return `{ errorMessage: "The user could not be removed" }`
 */
server.delete('/api/users/:id', (req, res) => {

});

/**
 * If the user with the id is not found:
 *    status code 404
 *    return `{ message: "The user with the specified ID does not exist." }`
 * 
 * If the request body is missing the name or bio property:
 *    status code 400
 *    return `{ errorMessage: "Please provide name and bio for the user." }`
 * 
 * If there is an error updating the user:
 *    status code 500
 *    return `{ errorMessage: "The user information could not be modified." }`
 * 
 * If the user is found and the new information is valid:
 *    status code 200
 *    return user document
 */
server.put('/api/users/:id', (req, res) => {

});

const port = 5000;
server.listen(port, () => console.log(`\n== api on port ${port} ==\n`));

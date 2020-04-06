const express = require("express");

const server = express();

let users = [
  {
    id: 1,
    name: 'Jane Doe',
    bio: "Not Tarzan's Wife, another Jane",
  },
  {
    id: 2,
    name: "Tarzan",
    bio: "Yes that Tarzan"
},
{
    id: 3,
    name: "Tarzan Jr",
    bio: "Tarzan's son"
}
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
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ 'errorMessage': 'The users information could not be retrieved.' });
  }
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
  try {
    const id = parseInt(req.params.id);
  
    const user = users.find(user => user.id === id);
  
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ 'message': 'The user with the specified ID does not exist.' });
    }
  } catch (error) {
    res.status(500).json({ 'errorMessage': 'The user information could not be retrieved.' });
  }
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
  try {
    const userInfo = req.body;
  
    if (!userInfo.name || !userInfo.bio) {
    } else {
      res.status(400).json({ 'errorMessage': 'Please provide name and bio for the user.' });
      const user = users.find(user => user.id === userInfo.id);
      if (!user) {
        users.push(userInfo);
      }
      res.status(201).json(users);
    }
  } catch (error) {
    res.status(500).json({ 'errorMessage': 'There was an error while saving the user to the database' });
  }
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
  try {
    const id = parseInt(req.params.id);
  
    const newUsers = users.filter(user => user.id !== id);
  
    if (newUsers.length === users.length) {
      res.status(404).json({ 'message': 'The user with the specified ID does not exist.' });
    } else {
      users = newUsers;
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ 'errorMessage': 'The user could not be removed' });
  }
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
  try {
    const id = parseInt(req.params.id);
    const userInfo = req.body;
  
    if (!userInfo.name || !userInfo.bio) {
      res.status(400).json({ 'errorMessage': 'Please provide name and bio for the user.' });
    }
  
    const index = users.findIndex(user => user.id === id);
  
    if (index === -1) {
      res.status(404).json({ 'message': 'The user with the specified ID does not exist.' });
    } else {
      console.log(userInfo);
      users[index] = userInfo;
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ 'errorMessage': 'The user information could not be modified.' });
  }
});

const port = 5000;
server.listen(port, () => console.log(`\n== api on port ${port} ==\n`));

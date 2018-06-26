const express = require('express');

// create a router object
const users = express.Router();

// handle requests, these are automatically prefixed with "/users"
users.get('/', (req, res) => {
  res.send('requested users page');
});

users.get(/^\/(\d+)$/, (req, res) => {
  res.send(`requested page for user with id: ${req.params[0]}`);
});

// export router object
module.exports = users;

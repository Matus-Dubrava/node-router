const express = require('express');

// path to router
const usersRouter = require('./users/user-routes.js');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('requested home page');
});

// pass request to the user router prefixed with "/users"
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`application is running on port:${port}`);
});

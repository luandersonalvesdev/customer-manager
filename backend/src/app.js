const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.send(`
    Server is healthy!
    <a href="https://github.com/luandersonalvesdev/customer-manager"> Click here</a> to see the documentation.
    `);
});

module.exports = app;

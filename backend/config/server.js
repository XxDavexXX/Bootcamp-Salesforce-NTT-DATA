const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/api/users', require('../routes/userRoutes'));

module.exports = app;
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require("cors");
const authMiddle = require('./middleware/authMiddle');
const authRouter = require('./routes/authRouter');
const projectRouter = require("./routes/projectRouter");
require('dotenv').config();
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/auth', authRouter);
app.use('/api/projects', authMiddle.validateToken, projectRouter);


module.exports = app;

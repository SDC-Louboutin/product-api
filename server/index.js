require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require('./routes/index.js');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.use(router);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

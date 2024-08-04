const express = require('express');
const connectDatabase = require('./connect');

const app = express();

const PORT = 8001;
app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`));

connectDatabase("mongodb://localhost:27017/url-shortener");
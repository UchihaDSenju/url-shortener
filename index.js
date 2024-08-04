const express = require('express');
const urlRoute = require('./route/url')
const connectDatabase = require('./connect');
const Url = require('./model/url');

const app = express();

const PORT = 8001;
app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`));

connectDatabase("mongodb://localhost:27017/url-shortener");

app.use(express.urlencoded({extended: false}));
app.get('/', (req, res)=> res.send("wORKING"))
app.use('/url', urlRoute);

app.get('/:shortUrl', async (req, res)=>{
    const shortUrl = req.params.shortUrl;
    console.log(shortUrl);
    const result = await Url.findOneAndUpdate(
        {shortenedUrlId: shortUrl,},
        {$push: {visitHistory: {timestamp: Date.now()}}}
    );
    console.log(result.originalUrl);
    res.redirect(result.originalUrl);
});

// shortid/ nanoid
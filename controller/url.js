const shortid = require('shortid');
const Url = require('../model/url');

async function generateShortUrl(req, res){
    console.log("route working");
    const body = req.body;
    if(!body.url){
        res.json({error: "No link found"});
    }
    const shortId = shortid(7);
    await Url.create({
        shortenedUrlId: shortId,
        originalUrl: body.url,
        visitHistory:[],
    })

    res.json({msg: "Link Created Successfully",
        linkId: shortId,
    });
}

module.exports = {
    generateShortUrl,
}
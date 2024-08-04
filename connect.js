const mongoose = require('mongoose');

async function connectMongoDB(url){
    mongoose.set('strictQuery', true);
    mongoose.connect(url, ()=>console.log("Connected To Database"))
}

module.exports = connectMongoDB;
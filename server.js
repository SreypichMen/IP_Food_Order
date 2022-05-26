const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
    //const mongoose = require('mongoose')
const PORT = process.env.PORT || 3300
    //Database
    // const url = 'mongodb+srv://Food_Order:pich130820@cluster0.oz7wcbw.mongodb.net/?retryWrites=true&w=majority'
    // mongoose.connect(url, {
    //     useNewUrlParser: true,
    //     UseCreateIndex: true,
    //     useUnifiedTopology: true,
    //     UseFindAndModify: true
    // });
    // const connection = mongoose.connection;
    // connection.once('open', () => {
    //     console.log('Databese connection...');
    // }).catch(err => {
    //     console.log('Connection failed..')
    // });



//set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
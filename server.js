require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3300
const session = require('express-session')
const flash = require('express-flash')
const { connect } = require('http2')
const { connection } = require('mongoose')
const MongoDbStore = require('connect-mongo')(session)
    // const bodyParser = require('body-parser')
    // const cookieParser = require('cookie-parser')
    //     // const dotenv = require('dotenv').config()


//Database
require("./configs/db")();
// Session store
let mongoStore = new MongoDbStore({
    mongooseConnection: connection,
    collection: 'sessions'
})

//Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    store: mongoStore,
    saveUninitialized: false,
    resave: false,
    //cookie: { maxAge: 1000 * 15 }
    cookie: { maxAge: 1000 * 60 * 60 * 24 } //24 hours
}))
app.use(flash())


//Asset
app.use(express.static('public'))
    //Data parsing
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//Set cookie parser, session & flash

// app.use(session({
//     secret: process.env.COOKIE_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     // cookie: { maxAge: 1000 * 60 * 60 * 24 } //24 hours
// }));

//Global middleware
app.use((req, res, next) => {
        res.locals.session = req.cookies
        next()
    })
    //set Template engineS
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
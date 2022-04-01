const express = require('express')
const bodyParser = require("body-parser")
const urlencoded = require('body-parser/lib/types/urlencoded')
const { default: mongoose } = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const passportLocal = require("passport-local").Strategy;
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const User = require('./model/user')

const app = express()

// -------- APP USEAGE THINGS -------------------
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser(process.env.SECRET))


// ----------- CORS -------------------------------
const options = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(options))


// --------- CONFIGURING EXPRESS SESSION ------------
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

// --------- CONFIGURING PASSPORT ------------
app.use(passport.initialize())
app.use(passport.session())
require('./passportConfig')(passport)


// ------ CONNECTING TO MONGODB DATABASE SERVER -----
mongoose.connect(process.env.MONGO_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("Connected to DB")
        }
    }
)

// -------- USING OTHER API ROUTES --------------
const taskRouter = require('./routes/task')
app.use(taskRouter)

const authRouter = require('./routes/auth')
app.use(authRouter)


// ---------------- ROUTES ----------------
app.listen(3500, () => {
    console.log("App is running on port: " + 3000)
})
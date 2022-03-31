const express = require('express')
const bodyParser = require("body-parser")
const urlencoded = require('body-parser/lib/types/urlencoded')
const { default: mongoose } = require('mongoose')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

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


app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.listen(3000, () => {
    console.log("App is running on port: " + 3000)
})
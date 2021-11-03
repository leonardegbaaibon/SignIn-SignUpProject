const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const sessions = require('express-session')


const app = express()
const db = require('./server/database/connection');
const cookieParser = require('cookie-parser');

dotenv.config({path :'config.env'})
const PORT = process.env.PORT || 4600

//log request
app.use(cookieParser())
app.use(morgan('tiny'))
db()


const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.set('view engine','ejs')
// app.set("Views",path.resolve(__dirname,"Views/ejs"))

//load asets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', require('./server/routes/router'))

// app.get('/',services.homeRoutes)
// app.post('/signup', services.signUp)
// app.post('/login', services.login)
// app.get('/dashboard', services.authMiddleware, services.dashboard)


app.listen(PORT, ()=> {console.log(`server running on port ${PORT}`)})

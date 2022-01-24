const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const morgane = require('morgan');
const fs = require('fs');
require('dotenv/config');

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

morgane.token('body', (req) => JSON.stringify(req.body));
app.use(morgane(':status :method :url :body :response-time ms',{stream: fs.createWriteStream('./Logger.log', {flags: 'a'})}))

mongoose.connect(

    process.env.DB_CONNECTION,
    (err) =>{
        if (err) {
            console.log(err);
        }
        console.log('connected !!');
    }

);

// ----------------------- Admin General -----------------------

const admin_General = require('./routes/AdminG.route')

app.use('/api/Admin_General',admin_General);

// ----------------------- Manager -----------------------

const Manager = require('./routes/Manager.route')

app.use('/api/Manager',Manager);

// ----------------------- Driver -----------------------

const Driver = require('./routes/Driver.route')

app.use('/api/Driver',Driver);


// ---------------- Commands ----------------

const Command = require('./routes/Command.route');

app.use('/api/Command',Command);

// ---------------- Prime ----------------

const Prime = require('./routes/Prime.route');
const morgan = require('morgan');
const req = require('express/lib/request');

app.use('/api/Prime',Prime);

app.listen(4000);
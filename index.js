"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Parse json data:
app.use(express.json())

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})

/* ------------------------------------------------------- */
// Sequlize

const { Sequelize, DataTypes } = require('sequelize')

// Creating new instance 
const sequelize = new Sequelize('sqlite:./db.sqlite3')




// COnnecting to DB
sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(()=>console.log('* DB Not Connected *'))













const errorHandler = (err, req, res, next) => {
    const statusCode = res.errorStatusCode ?? 500
    res.status(statusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
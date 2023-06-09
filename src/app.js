const express = require("express");
const mongoose = require("mongoose");
const { body, validationResult } = require('express-validator');

const app = express();
const path = require("path");
const resCollection= require("./model/model");


const temp_path=path.join(__dirname,"../template/views");
require("./db/db");
app.set("view engine", "hbs");
app.set("views", temp_path);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res) =>{
    res.render("index")
});

app.get("/new", (req, res) => {
    res.send("new page")
})
app.post('/resdata',  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const resdata = new resCollection({
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword,
        });

        const postdata = await resdata.save();
        res.send(postdata);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error saving data' });
    }
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});


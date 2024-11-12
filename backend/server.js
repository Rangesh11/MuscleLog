const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const workoutroute = require('./routes/workout');

// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/workout', workoutroute);

app.get('/', (req, res) => {
    res.json({ msg: "hello I am rangesh" });
});

// db connect
mongoose.connect(process.env.mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log("Error in DB connection", error);
    });

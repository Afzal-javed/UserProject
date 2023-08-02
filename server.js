const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const cors=require("cors");
// const User = require("./model/userScheema");
const userRoute=require("./Route/userRoute");
app.use(cors());
app.use(express.json())
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true }).
then(() => {
    console.log("connected successfully")
    app.listen(process.env.PORT || 8000, (e) => {
        if (e) console.log("error", e);
        console.log("running successfully at :", process.env.PORT);
    });
})
.catch((e) => {
    console.log("error", e);
})

app.use(userRoute)


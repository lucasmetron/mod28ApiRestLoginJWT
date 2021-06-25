require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },

    (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Mongo Connected")
        }

    }
)

app.use('/user', express.json(), userRouter);

app.get('/admin', express.json(), adminRouter);

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
});




require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(process.env.TESTE)
})

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})




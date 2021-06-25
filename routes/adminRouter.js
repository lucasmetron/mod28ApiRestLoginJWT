const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/', auth, (req, res) => {
    res.send("Esse dado só deve ser visto pelo admin")
})

module.exports = router;
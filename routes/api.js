const express = require('express');
const router = express.Router();
const data = require('../db/db.json')

// Router test API
router.get('/', (req, res) => { // gets entire JSON file 
    // res.send(console.log(data))
    res.json(data)
});

module.exports = router;
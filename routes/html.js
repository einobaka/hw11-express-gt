// Dependencies
const express = require('express');
const router = express.Router();
const path = require('path');

// Router test HTML
router.get('/', (req, res) => {
    // res.send(console.log(data))
    // res.json(data)
    res.sendFile(path.join(__dirname, '../public', 'notes.html'));

});

module.exports = router;
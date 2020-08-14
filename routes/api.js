const express = require('express');
const router = express.Router();
const data = require('../db/db')

// Get request for api/notes
router.get('/api/notes', (req, res) => {
    res.json(data)
});

// Post request for api/notes
router.post('/api/notes', (req, res) => {

    const newEntry = {
        title: req.body.title,
        text: req.body.text
    }

    data.push(newEntry)
    res.json(data);
});



module.exports = router;
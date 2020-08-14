const express = require('express');
const router = express.Router();
const data = require('../db/db.json')

// Get request for api/notes
router.get('/api/notes', (req, res) => {
    res.json(data)
});

// Post request for api/notes
router.post('/api/notes', (req, res) => {
    // console.log(req.body.note)
    // data.push(req.body.note)
    res.json(data);
})





module.exports = router;
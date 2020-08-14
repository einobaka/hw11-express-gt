// Dependencies
const express = require('express');
const router = express.Router();
const data = require('../db/db');
const uuid = require('uuid');
const update = require('../db/update');

// Get request for api/notes
router.get('/api/notes', (req, res) => {

    update.view(data)

});

// Post request for api/notes
router.post('/api/notes', (req, res) => {

    const newEntry = {
        id: uuid.v4(),
        // id: '1',
        title: req.body.title,
        text: req.body.text
    }

    data.push(newEntry)
    res.json(data);

});

// Delete request for api/notes
router.delete('/api/notes/:id', (req, res) => {

    const found = data.some(entry => entry.id === req.params.id)

    if (found) {

        update.delete(req.params.id)
        res.json(update.data)

        // res.json({ msg: 'Entry Deleted', data: data.filter(entry => entry.id !== req.params.id) }) // filter through an array data

        // } else {
        //     res.status(400).json({ msg: `No member with ${req.params.id} data not found` })
    }

});


module.exports = router;
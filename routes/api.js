// Dependencies
const express = require('express');
const router = express.Router();
const data = require('../db/db');
const uuid = require('uuid');
const update = require('../db/update');
const fs = require('fs');

// Get request for api/notes
router.get('/api/notes', (req, res) => {

    // Call for view on current notes
    update.view()
        .then((notes) => res.json(notes));


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

    // update.create(newEntry)

    // update.write(newEntry)

    res.json(data);

});

// Delete request for api/notes
router.delete('/api/notes/:id', (req, res) => {

    const found = data.some(entry => entry.id === req.params.id)
    console.log(found)

    let filtered = data.filter(entry => entry.id !== req.params.id)

    fs.writeFile('db/db.json', filtered)

    // console.log(data)
    // res.json(data)

    if (found) {

        // update.delete(data) 

        // found.filter(entry => (entry.id !== req.params.id), entry)

        // console.log(entry);

        // res.json({ msg: 'Entry Deleted', data: data.filter(entry => entry.id !== req.params.id) }) // filter through an array data

        // } else {
        //     res.status(400).json({ msg: `No member with ${req.params.id} data not found` })
    }

});


module.exports = router;
// Dependencies
const express = require('express');
const router = express.Router();
const data = require('../db/db');
const update = require('../db/update');

// Get request for api/notes
router.get('/api/notes', (req, res) => {

    // Call for view on current notes
    update.view().then((notes) => res.json(notes)); // read() from udpate

});

// Post request for api/notes
router.post('/api/notes', (req, res) => {

    update.create(req.body);
    update.view().then((notes) => res.json(notes));
});

// Delete request for api/notes
router.delete('/api/notes/:id', (req, res) => {

    const found = data.some(entry => entry.id === req.params.id)

    if (found) {

        update.delete(req.params.id);
        update.view().then((notes) => res.json(notes));

    } else {
        res.status(400).json({ msg: `No member with ${req.params.id} data not found` })
    }

});

module.exports = router;
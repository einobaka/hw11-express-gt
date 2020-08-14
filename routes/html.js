// Dependencies
const express = require('express');
const router = express.Router();
const path = require('path');

// Router paths to public folders
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;
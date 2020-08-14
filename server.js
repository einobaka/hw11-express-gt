// Dependencies
const express = require("express");
const path = require("path");
const app = express();

// Sets up the Express app to handle data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// HTML and API handling routes
app.use('/', require('./routes/html'));
app.use('/', require('./routes/api'));

// Port handling
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

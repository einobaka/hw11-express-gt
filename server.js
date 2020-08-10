// // Require/import the HTTP module
// const http = require("http");


// // Define a port to listen for incoming requests
// const PORT = 8080;

// // Create a generic function to handle requests and responses
// function handleRequest(request, response) {

//     // Send the below string to the client when the user visits the PORT URL
//     response.end("It Works!! Path Hit: " + request.url);
// }

// // Use the Node HTTP package to create our server.
// // Pass the handleRequest function to empower it with functionality.
// const server = http.createServer(handleRequest);

// // Start our server so that it can begin listening to client requests.
// server.listen(PORT, function () {

//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT);
// });

// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
// setup routes
const apiRoutes = require("./routes/apiRoutes"); // added
const htmlRoutes = require("./routes/htmlRoutes"); // added

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
// app use routes



// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);

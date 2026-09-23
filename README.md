Node.js HTTP Server

A simple HTTP server built with Node.js core modules without using Express.js.

This project demonstrates how to:

Create an HTTP server using Node.js
Handle different URL routes
Parse URLs and query parameters
Log incoming requests into a file
Return different responses based on the requested route
Handle unknown routes with a 404 response
🚀 Technologies Used
Node.js
HTTP module
File System (fs) module
URL module
📁 Project Structure
practice/
│
├── server.js
├── file.txt
├── package.json
└── README.md

Replace server.js with the actual name of your JavaScript file if your file has a different name.

⚙️ How to Run
1. Clone the repository
git clone https://github.com/ahmed32-ux/nodejs-project1.git
2. Open the project
cd nodejs-project1
3. Start the server

If your JavaScript file is server.js:

node server.js

You should see:

Server Started

The server runs on:

http://localhost:8000
🌐 Available Routes
Home
GET /

Response:

Welcome to Home Page
About
GET /about

Response:

Welcome to About Page
Search
GET /search?search_query=hello

Response:

Here is your search results hello

The search_query value is read from the URL query parameters.

For example:

http://localhost:8000/search?search_query=javascript

Response:

Here is your search results javascript
Unknown Routes

Any route that is not defined will return:

404 page not found!
📝 Request Logging

Every incoming request is logged into file.txt.

The log contains:

Request timestamp
Requested URL
Request message

Example:

1790153754605 :/about : New Request Received.
1790153754707 :/search?search_query=javascript : New Request Received.

The logging is handled using Node.js's fs.appendFile() method.

🔍 How URL Parsing Works

The project uses Node.js's built-in url module:

const myUrl = url.parse(req.url, true);

The true parameter allows query parameters to be parsed into an object.

For example:

/search?search_query=hello

becomes:

myUrl.pathname
// "/search"

myUrl.query.search_query
// "hello"
🛠️ Example Code

The server is created using Node.js's built-in HTTP module:

const http = require("http");

const myServer = http.createServer((req, res) => {
    // Request handling
});

myServer.listen(8000, () => {
    console.log("Server Started");
});
🎯 Learning Goals

This project is part of learning Node.js fundamentals, especially:

HTTP servers
Routing
Request and response handling
URL parsing
Query parameters
File handling
Request logging
Git and GitHub workflow
📌 Future Improvements

Possible improvements for this project:

Add more routes
Use the modern URL API
Add HTML pages
Improve 404 handling
Add POST request handling
Store data using a database
Convert the project to Express.js
Add environment variables
👨‍💻 Author

Ahmad Waheed.

GitHub:
https://github.com/ahmed32-ux

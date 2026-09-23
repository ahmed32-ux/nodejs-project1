const http = require ("http");
const fs = require ("fs");
const url = require ("url");

const myServer = http.createServer((req, res) => {
if (req.url === "/favicon.ico") return res.end();
const log = `${Date.now()} :${req.url} : New Request Received.\n`;
const myUrl = url.parse(req.url, true)
console.log(myUrl)
fs.appendFile("file.txt", log, (err) => {

    if (err) {
        console.log("Error writing file:", err);
        return;
    }

    switch (myUrl.pathname) {
        case "/":
            res.end("Welcome to Home Page");
            break;
        case "/about":
            res.end("Welcome to About Page");
            break;

        case "/search":
            const search = myUrl.query.search_query
            res.end(`Here is your search results ${search}`);
            break;

        default:
            res.end("404 page not found!");
            break;
    }
});
    console.log("new request receive.");
    
});
myServer.listen(8000, () => console.log("Server Started"))

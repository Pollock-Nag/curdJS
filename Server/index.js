const http = require("http");
const hostname = "localhost";
const port = 3001;

//Creating Server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello world This is Pollock \n")
});


// Listing to port 3001

server.listen(port, hostname, () => {
    console.log("Server is running at port " + port)
});
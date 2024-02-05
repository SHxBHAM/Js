const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {

  // Send the response body
  res.write('Hello, World!');

  // End the response
  res.end();
  res.destroy();
  
});


// Define the port number
const PORT = 3000;

// Start the server on the specified port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

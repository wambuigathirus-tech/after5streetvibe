const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const MAX_PORT = 3100;

function startServer(listenPort) {
  const server = app.listen(listenPort, () => {
    console.log(`Server is running at http://localhost:${listenPort}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      if (listenPort < MAX_PORT) {
        console.warn(`Port ${listenPort} is in use. Trying port ${listenPort + 1}...`);
        startServer(listenPort + 1);
      } else {
        console.error(`No available ports between ${port} and ${MAX_PORT}. Please stop the existing server or set PORT to a free port.`);
        process.exit(1);
      }
    } else {
      throw err;
    }
  });
}

startServer(port);

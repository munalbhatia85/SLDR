const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// SLD JSON placeholder
let sldLayout = [];

app.get('/api/sld', (req, res) => res.json(sldLayout));
app.post('/api/sld', (req, res) => {
  sldLayout = req.body;
  res.sendStatus(200);
});

// Handle WebSocket connections
io.on('connection', socket => {
  console.log('Client connected');

  socket.on('control', data => {
    console.log('Control command received:', data);
    // Forward to Python bridge (next step)
  });

  // Forward updates from Python bridge here
});

server.listen(5000, () => console.log('Backend running on port 5000'));

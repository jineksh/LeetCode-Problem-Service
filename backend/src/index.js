const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server');
const connectDB = require('./config/db');
const routes = require('./Routes/index');

async function startServer() {
  const app = express();

  // Body-parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Mount main router at /api
  app.use('/api', routes);

  app.get('/get', (req, res) => {
    res.send('Hello, world! from lEEtcode project');
  });
  await connectDB();
  console.log('MongoDB connected successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();

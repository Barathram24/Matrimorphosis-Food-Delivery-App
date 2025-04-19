const express = require('express');
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurantRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', restaurantRoutes); // All routes go through /api prefix

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

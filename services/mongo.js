const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Database Connected');
});

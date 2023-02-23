const express = require('express');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/auth');
const authController = require('./controllers/auth');
const userRoutes = require('./routes/user');

require('./services/mongo');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(authMiddleware);

app.post('/signup', authController.signup);
app.post('/login', authController.login);
app.post('/logout', authController.logout);

app.use('/user', userRoutes);

module.exports = app;

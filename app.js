const express = require('express');
const path = require('path');
const blogController = require('./controllers/blogController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

// Use the blog controller for routes
app.use('/', blogController);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const Blog = require('./model/blogs');
const Comment = require('./model/comments')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const blogRoutes = require('./routes/blogs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(blogRoutes);
app.use(errorController.get404);

Comment.belongsTo(Blog, {constraints : true, onDelete : 'CASCADE'});
Blog.hasMany(Comment);

const port = 4560;

sequelize
.sync()
// .sync({force : true})
.then(() => {
    // console.log(comment);
    app.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}/blogs
            `);
    });
})
.catch(err => {
    console.log(err);
});


const Blogs = require('../model/blogs');

const Comments = require('../model/comments')

exports.getBlogs = (req, res, next) => {
  Blogs.findAll({includes : [Comments]})
  .then(blogs => {
    res.render('home/data', {
      blogs: blogs,
      path: '/',
      comments: blogs.map(blog => blog.comments)
    });
  })
  .catch(err => {
    console.log(err);
  })
};

exports.getAddBlogs = (req, res, next) => {
  res.render('home/form', {
      path: '/blogs',
      editing: false
  });
};

exports.postAddBlogs = (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;

  Blogs.create({ 
    title: title,
    author: author, 
    content: content 
  })
  .then(result => {
    res.redirect('/blogs');
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getAddComments = (req, res, next) => {
  const blogId = req.params.blogId; 
  Blogs.findByPk(blogId, { include: [Comments] })
      .then(blog => {
          res.render('home/data', {
              blogs: [blog],
              path: `/blogs`,
              comments: blog.comments || []
          });
      })
      .catch(err => {
          console.log(err);
      });
};

exports.postAddComments = (req, res, next) => {
  const blogId = req.body.blogId;
  const commentData = req.body.comments;

  Comments.create({ data: commentData, blogId: blogId })
      .then(result => {
          res.redirect(`/blogs`);
      })
      .catch(err => {
          console.log(err);
      });
};

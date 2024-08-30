const Blog = require('../model/blogs');
const Comment = require('../model/comments');

exports.getAddComments = (req, res, next) => {
    res.render('home/data', {
        path: '/blogs',
        editing: false
    });
};

exports.postAddComments = (req, res, next) => {
    const blogId = req.body.blogId;
    const data = req.body.data;
  
    Comment.create({ 
        data : data,
        blogId : blogId
    })
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
  };

  exports.deleteComments = (req, res, next) => {
    const cmntId = req.body.commentId;
    Comment.findByPk(cmntId)
    .then(comment => {
      return comment.destroy();
    })
    .then(() => {
      console.log("Product Deleted")
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
  };
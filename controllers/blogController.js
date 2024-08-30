const Blog = require('../model/blogs');
const Comment = require('../model/comments');

exports.getBlogs = async (req, res) => {
    try{
        const blogs = await Blog.findAll();
        const blogsWithComments = await Promise.all(blogs.map(async (blog) => {
            const comments = await Comment.findAll({
              where: { blogId: blog.id }
            });
            return {
                ...blog.dataValues,
                comments: comments
            };
        }));
        res.render('home/data', {
            blogs: blogsWithComments
        });
    }
    catch (err){
        console.error('Error fetching blogs or comments:', err);
        res.status(500).send('An error occurred while fetching data');
    }
}

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
  
    Blog.create({ 
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

const express = require('express');
const router = express.Router();

// Dummy data for blogs and comments
let blogs = [
    {
        id: 1,
        title: 'First Blog',
        author: 'Author 1',
        content: 'This is the content of the first blog.'
    },
    {
        id: 2,
        title: 'Second Blog',
        author: 'Author 2',
        content: 'This is the content of the second blog.'
    }
];

let comments = [
    { id: 1, blogId: 1, data: 'First comment on the first blog' },
    { id: 2, blogId: 2, data: 'First comment on the second blog' }
];

// Route to render the main page
router.get('/', (req, res) => {
    res.render('./home/data', { blogs, comments });
});

// Route to handle adding a new comment
router.post('/comments', (req, res) => {
    const blogId = parseInt(req.body.blogId, 10);
    const commentData = req.body.comments;

    if (commentData && blogId) {
        comments.push({
            id: comments.length + 1,
            blogId: blogId,
            data: commentData
        });
    }

    res.redirect('/');
});

// Route to handle deleting a comment
router.post('/comments/delete', (req, res) => {
    const commentId = parseInt(req.body.commentId, 10);

    comments = comments.filter(comment => comment.id !== commentId);

    res.redirect('/');
});

module.exports = router;

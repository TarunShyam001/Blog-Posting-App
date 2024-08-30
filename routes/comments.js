const path = require('path');

const express = require('express');

const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/blogs/:blogId/comments', commentController.getAddComments);

router.post('/blogs/:blogId/comments', commentController.postAddComments);

router.post('/blogs/delete-comment', commentController.deleteComments);

module.exports = router;
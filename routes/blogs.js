const path = require('path');

const express = require('express');

const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/blogs', blogController.getBlogs)

router.get('/blogs', blogController.getAddBlogs);

router.post('/blogs', blogController.postAddBlogs);

module.exports = router;

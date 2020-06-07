const express = require('express');
const router = express.Router();

const PostController = require('../../controllers/post.controller');

router.get('/get_posts', PostController.getAllPosts);
router.post('/add_post', PostController.createAnotherPost);
router.put('/edit_post/:id', PostController.editPost);
router.delete('/remove_post/:id', PostController.removePost);

router.get('/getAllPostWithTag/:id', PostController.getAllPostsWithTag);

module.exports = router;

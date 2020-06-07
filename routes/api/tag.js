const express = require('express');
const router = express.Router();

const TagController = require('../../controllers/tag.controller');

router.get('/get_tags', TagController.getAllTags);
router.post('/add_tagToPost/:id', TagController.addTagToPost);
router.put('/edit_tag/:id', TagController.editTag);
router.delete('/remove_tag/:id', TagController.removeTag);


router.get('/getAllTagsFromPost/:id', TagController.getAllTagsWithPost);

module.exports = router;

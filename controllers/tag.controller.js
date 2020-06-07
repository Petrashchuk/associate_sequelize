const db = require('../models/index');

module.exports.getAllTags = async (req, res) => {
    const teams = await db.Tags.findAll({include: [{model: db.Posts}]});
    res.status(200).json(teams);
};

module.exports.addTagToPost = async (req, res) => {
    const {id} = req.params;
    try {
        const post = await db.Posts.findByPk(id);
        const tag = await db.Tags.create(req.body);
        const response = await post.addTags(tag);
        res.status(200).json(response);
    } catch (e) {
        res.status(422).json({errors: e.message})
    }
};
module.exports.getAllTagsWithPost = async (req, res) => {
    const {id} = req.params;
    try {
        const post = await db.Posts.findByPk(id, {include: [{model: db.Tags}]});
        res.status(200).json(post);
    } catch (e) {
        res.status(422).json({errors: e.message})
    }
};

module.exports.getAllPostWithTag = async (req, res) => {
    const {id} = req.params;
    try {
        const post = await db.Posts.findByPk(id);
        const tag = await db.Tags.create(req.body);
        const response = await post.addTags(tag);
        res.status(200).json(response);
    } catch (e) {
        res.status(422).json({errors: e.message})
    }
};

module.exports.editTag = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await db.Tags.update(req.body, {where: {id}});
        res.status(200).json(response)
    } catch (e) {
        res.status(422).json({errors: e.message});
    }
};

module.exports.removeTag = async (req, res) => {
    const {id} = req.params;
    const response = await db.Tags.destroy({where: {id}});
    res.status(200).json(response)
};

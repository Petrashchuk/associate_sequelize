const db = require('../models/index');

module.exports.getAllPosts = async (req, res) => {
    const teams = await db.Posts.findAll({include: [{model: db.Tags}]});
    res.status(200).json(teams);
};

module.exports.createAnotherPost = async (req, res) => {
    try {
        const post = await db.Posts.create(req.body);
        res.status(200).json(post);
    } catch (e) {
        res.status(422).json({errors: e.message})
    }
};
module.exports.getAllPostsWithTag = async (req, res) => {
    const {id} = req.params;
    try {
        const posts = await db.Tags.findByPk(id, {include: [{model: db.Posts}]});
        res.status(200).json(posts);
    } catch (e) {
        res.status(422).json({errors: e.message})
    }
};

module.exports.editPost = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await db.Posts.update(req.body, {where: {id}});
        res.status(200).json(response)
    } catch (e) {
        res.status(422).json({errors: e.message});
    }
};

module.exports.removePost = async (req, res) => {
    const {id} = req.params;
    const response = await db.Posts.destroy({where: {id}});
    res.status(200).json(response)
};

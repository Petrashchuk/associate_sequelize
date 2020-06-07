const db = require('../models/index');

module.exports.getPlayers = async (req, res) => {
    const players = await db.Players.findAll({
        include: [{
            model: db.Teams,
        }]
    });
    res.status(200).json(players);
};

module.exports.addPlayers = async (req, res) => {
    try {
        const player = await db.Players.create(req.body, {include: [{model: db.Teams}]});
        res.status(200).json(player);
    } catch (e) {
        res.status(422).json({errors: e.message})
    }
};

module.exports.editPlayers = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await db.Players.update(req.body, {where: {id}});
        res.status(200).json(response)
    } catch (e) {
        res.status(422).json({errors: e.message});
    }
};

module.exports.removePlayers = async (req, res) => {
    const {id} = req.params;
    const response = await db.Players.destroy({where: {id}});
    res.status(200).json(response)
};

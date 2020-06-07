const db = require('../models/index');


module.exports.getAnotherTeams = async (req, res) => {
    const teams = await db.Teams.findAll({include: [{model: db.Players}]});
    res.status(200).json(teams);
};

module.exports.addAnotherTeams = async (req, res) => {
    try {
        const team = await db.Teams.create(req.body);
        res.status(200).json(team);
    } catch (e) {
        res.status(422).json({errors: e.message})
    }
};

module.exports.editTeams = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await db.Teams.update(req.body, {where: {id}});
        res.status(200).json(response)
    } catch (e) {
        res.status(422).json({errors: e.message});
    }
};

module.exports.removeTeams = async (req, res) => {
    const {id} = req.params;
    const response = await db.Teams.destroy({where: {id}});
    res.status(200).json(response)
};

const express = require('express');
const router = express.Router();

const teamsController = require('../../controllers/teams.controller');

router.get('/get_teams', teamsController.getAnotherTeams);
router.post('/add_team', teamsController.addAnotherTeams);
router.put('/edit_team/:id', teamsController.editTeams);
router.delete('/remove_team/:id', teamsController.removeTeams);

module.exports = router;

const express = require('express');
const router = express.Router();

const PlayerController = require('../../controllers/players.controller');

router.get('/get_players', PlayerController.getPlayers);
router.post('/add_player', PlayerController.addPlayers);
router.put('/edit_player/:id', PlayerController.editPlayers);
router.delete('/remove_player/:id', PlayerController.removePlayers);

module.exports = router;

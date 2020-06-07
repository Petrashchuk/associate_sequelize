const db = require('../models/index');


module.exports = async function syncDb() {
    db.sequelize.sync().then(res => {
    });
};

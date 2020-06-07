const express = require('express');
const app = express();
const syncDb = require('./services/sync-db');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


(() => {

    app.use(require('./routes'));
    syncDb();
    app.listen(3000, () => console.log('Example app listening on port 3000!'));
})();


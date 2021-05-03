const fs = require('fs');


module.exports = function (app) {

    app.get('/api/notes', function(req, res) {
        res.json(data);
    });

    app.get("/api/notes/:id", function(req, res) {
        res.json(data[Number(req.params.id)]);
    });
}

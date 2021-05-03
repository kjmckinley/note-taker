// NOTE TAKER

// require the path package to get accurate filepath
const path = require ('path');


module.exports = function(app) {
    // get requests
    app.get('/', function (req, res){
        res.sendFile(path.join(__dirname, '/../develop/public/index.html'));
    });

    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '/../develop/public/notes.html'));
    });
}
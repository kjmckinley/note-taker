const fs = require('fs');
var noteData = JSON.parse(fs.readFileSync("./develop/db/db.json", "utf8"));


module.exports = function (app) {

    app.get('/api/notes', function(req, res) {
        res.json(data);
    });

    app.get("/api/notes/:id", function(req, res) {
        res.json(data[Number(req.params.id)]);
    });

    app.post("/api/notes", function(req, res) {

        let uniqueId = (data.length).toString();
        let newNote = req.body;
        console.log(uniqueId);
        newNote.id = uniqueId;
        data.push(newNote);
        
        fs.writeFileSync("./develop/db/db.json", JSON.stringify(data), function(err) {
            if (err) throw (err);        
        }); 
    
        res.json(data);    
    
    });

}


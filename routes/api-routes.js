

const fs = require('fs');

var noteData = JSON.parse(fs.readFileSync("./develop/db/db.json", "utf8"));


module.exports = function (app) {

    // get requests
    app.get('/api/notes', function(req, res) {
        res.json(noteData);
    });

    app.get("/api/notes/:id", function(req, res) {
        res.json(noteData[Number(req.params.id)]);
    });

    // post request
    app.post("/api/notes", function(req, res) {

        let uniqueId = (noteData.length).toString();
        let newUserNote = req.body;
        console.log(uniqueId);
        newUserNote.id = uniqueId;
        noteData.push(newUserNote);
        
        fs.writeFileSync("./develop/db/db.json", JSON.stringify(noteData), function(err) {
            if (err) throw (err);        
        }); 
    
        res.json(noteData);    
    
    });

    // delete request
    app.delete("/api/notes/:id", function(req, res) {

        let newId = 0;
        let idNote = req.params.id;
        console.log(`Deleting note with id ${idNote}`);
        noteData = noteData.filter(currentNote => {
           return currentNote.id != idNote;
        });
        for (currentNote of noteData) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./develop/db/db.json", JSON.stringify(noteData));
        res.json(noteData);
    }); 

}


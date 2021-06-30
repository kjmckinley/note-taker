

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

        let specificId = (noteData.length).toString();
        let newUserNote = req.body;
        console.log(specificId);
        newUserNote.id = specificId;
        noteData.push(newUserNote);
        
        fs.writeFileSync("./develop/db/db.json", JSON.stringify(noteData), function(err) {
            if (err) throw (err);        
        }); 
    
        res.json(noteData);    
    
    });

    // delete request
    app.delete("/api/notes/:id", function(req, res) {

        let nextId = 0;
        let idNote = req.params.id;

        // confirms in the console that the selected note was deleted
        console.log(`Note Deleted - ID# ${idNote}`);

        noteData = noteData.filter(currentNote => {
           return currentNote.id != idNote;
        });

        for (currentNote of noteData) {
            currentNote.id = nextId.toString();
            nextId++;
        }

        // add new note information to the database
        fs.writeFileSync("./develop/db/db.json", JSON.stringify(noteData));

        res.json(noteData);
    }); 

}


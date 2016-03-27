/**
 * Created by tiennguyenm on 3/16/2016.
 */
var Note = require('./models/note');
var path = require('path');

module.exports = function (app, router) {
    router.route('/notes')
        .get(function (req, res) {
            Note.find({}, function (err, notes) {
                if (err) throw err;

                res.json(notes);
            });
        })
        .post(function (req, res) {
            var note = new Note();
            note.name = req.body.name;  // set the bears name (comes from the request)

            note.save(function (err) {
                if (err) throw err;

                res.json({message: 'Note created!'});
            });
        });

    router.route('/notes/:note_id')
        .get(function (req, res) {
            Note.findById(req.params.note_id, function (err, note) {
                if (err) throw err;

                res.json(note);
            });
        })
        .put(function (req, res) {
            Note.findByIdAndUpdate(req.params.note_id, {name: req.body.name}, function (err, note) {
                if (err) throw err;

                res.json({message: 'Note updated'});
            });
        })
        .delete(function (req, res) {
            Note.findByIdAndRemove(req.params.note_id, function (err) {
                if (err) throw err;

                res.json({message: 'Note deleted!'});
            });
        });
    app.use('/api', router);
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });
};
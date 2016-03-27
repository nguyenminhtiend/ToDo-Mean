/**
 * Created by tiennguyenm on 3/15/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var NoteSchema = new Schema({
    id: ObjectId,
    name: String,
    isDelete: {type: Boolean, default: false},
    createdOn: Date,
    updatedOn: Date
});

module.exports = mongoose.model('Note', NoteSchema);
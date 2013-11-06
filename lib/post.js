var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    message: String
});

module.exports = mongoose.model('Post', postSchema);
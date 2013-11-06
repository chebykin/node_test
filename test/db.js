var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/node_test');
var connection = mongoose.connection;

before(function (done) {
    connection.on('open', function () {
        connection.db.dropDatabase(done)
    });
});

after(function (done) {
    connection.close(done);
});

module.exports = function () {
    afterEach(function (done) {
        connection.db.dropDatabase(done);
    })
};
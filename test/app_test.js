var app = require('../app'),
    http = require('http'),
    should = require('should'),
    assert = require('assert'),
    Browser = require('zombie'),
    port = 3011;

describe('app', function () {

    before (function (done) {
        this.server = app.listen(port, function (err, result) {
            if (err) {
                done(err);
            } else {
                done();
            }
        });
    });

    after (function () {
        this.server.close();
    });

    it ('should be listening on 3011 port', function () {
        var headers = defaultGetOptions();
        http.get(headers, function (res) {
            res.statusCode.should.eql(200);
        });
    });

});

function defaultGetOptions(path) {
    path = path || '/';
    var options;
    options = {
        "host": "localhost",
        "port": port,
        "path": path,
        "method": "GET",
        "headers": {}
    };
    return options;
}

var app = require('../app'),
    http = require('http'),
    should = require('should'),
    assert = require('assert'),
    Browser = require('zombie'),
    port = 3011;

describe('page content', function () {
    before(function (done) {
        this.server = http.createServer(app).listen(port);
        this.browser = new Browser({site: 'http://localhost:' + port});
        this.browser.visit('/', done);
    });

    after(function () {
        this.server.close();
    });

    it('should ask for some data on main page', function () {
        var browser = this.browser;
        browser.success.should.be.ok;
        browser.text('h4').should.eql('submit next form ...');
        browser.text('form button').should.eql('Submit form');
    });

    it('should accept form', function (done) {
        var browser = this.browser,
            title = 'Weekly news',
            message = 'Lorem impsum';
        browser.fill('title', title);
        browser.fill('message', message);

        browser.pressButton('Submit form').then(function () {
            browser.success.should.be.ok;
            browser.text('h4').should.eql('Post accepted:');
            browser.text('.title').should.eql(title);
            browser.text('.message').should.eql(message);

        }).then(done, done);
    });
});

var Post = require('../lib/post'),
    db = require('./db');

describe('Post', function () {
    db();

    describe('save', function () {
        it('should save post', function (done) {
            var data = {title: 'Some things happened.', message: 'Lorem ipsum twice'},
                post = new Post(data);

            post.save(function (err, post) {
                if (err) {
                    done(err);
                }

                post.title.should.eql(data.title);
                post.message.should.eql(data.message);
                done();
            })
        })
    })
});
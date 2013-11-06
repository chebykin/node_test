var Post = require('../lib/post');
/*
 * GET home page.
 */

exports.index = function (req, res) {
    var title = req.body.title,
        message = req.body.message,
        drop = req.body.drop,
        locals = {},
        saved_post;

    if (req.method === 'POST' && title && message) {
        var post_data = {
            title: title,
            message: message
        };

        var post = new Post(post_data);
        post.save(function (err, data) {
            if (!err) {
                locals = 'Post saved successfully';
                saved_post = data;
            }

            rnd({post: saved_post})
        });
    } else if (req.method === 'POST' && drop === 'y') {
        Post.remove({}, function (err) {
            rnd({})
        });
    } else {
        rnd({})
    }

    function rnd (reder_options) {
        Post.find({}, function (err, posts) {
            reder_options.all = posts;
            reder_options.title = 'Express test app';
            res.render('index', reder_options);
        });
    }
};
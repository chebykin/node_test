var Post = require('../lib/post');
/*
 * GET home page.
 */

exports.index = function (req, res) {
    var title = req.body.title,
        message = req.body.message,
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

            var render_options = {
                title: 'Express test app',
                post: saved_post
            };

            res.render('index', render_options);
        });
    } else {
        res.render('index', {title: 'Express test app'});
    }
};
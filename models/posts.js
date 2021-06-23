const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = (app) => {

  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB AND REDIRECT TO THE ROOT
    post.save(() => res.redirect('/'));
  });

};

app.get('/', (req, res) => {
  Post.find({}).lean()
    .then((posts) => res.render('posts-index', { posts }))
    .catch((err) => {
      console.log(err.message);
    })
});

app.get('/posts/:id', (req, res) => {
  Post.findById(req.params.id).lean()
    .then((post) => res.render('posts-show', { post }))
    .catch((err) => {
      console.log(err.message);
    });
});

app.get('/n/:subreddit', (req, res) => {
  Post.find({ subreddit: req.params.subreddit }).lean()
    .then((posts) => res.render('posts-index', { posts }))
    .catch((err) => {
      console.log(err);
    });
});

it('Should create with valid attributes at POST /posts/new', function(done) {

...

});

app.post('/posts/:postId/comments', (req, res) => {
  // INSTANTIATE INSTANCE OF MODEL
  const comment = new Comment(req.body);

  // SAVE INSTANCE OF Comment MODEL TO DB
  comment
    .save()
    .then(() => Post.findById(req.params.postId))
    .then((post) => {
      post.comments.unshift(comment);
      return post.save();
    })
    .then(() => res.redirect('/'))
    .catch((err) => {
      console.log(err);
    });
});

subreddit: { type: String, required: true },
comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],

after(function () {
  Post.findOneAndDelete(newPost);
});

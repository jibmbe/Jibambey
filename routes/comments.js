const router = require("express").Router()
const User =  require("../models/User")
const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"))

//create comment
router.post("./data/:id/comments",  (req, res) => {
    const commentPost = User.create({ comment })
    commentPost.save()
    .then(() => res.redirect('/'))
    .catch((err) => {
        res.status(400).json(err)
        })
})

//Associating comments with the data
router.post("./data/:id/comments",  (req, res) => {
    const commentPost = User.create({ comment })
    commentPost.save()
    .then(() => data.findById(req.params.id))
    .then((data) => {
        data.comment.unshift(commentPost)
     return data.save()
})
    .then(() => res.redirect('/'))
    .catch((err) => {
        res.status(400).json(err)
        })
})

//Look up the post from data
router.post("./data/:id/comments",  (req, res) => {
data.findById(req.params.id).lean().populate('comments')
.then((data) => res.sender('data-show', { data }))
.catch((err) => {
    console.log(err)
})
})

module.exports = router
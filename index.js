const getAllPosts = require("./app")
const config = require("./config")
const path = require("path")
const express = require("express")
const app = express()

// using an expernal css file
app.use('/public', express.static('public'))
// setting the view engine to ejs
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    const posts = getAllPosts()
    res.render("pages/index", {posts:posts, config: config})
})

app.get("/:path", (req, res) => {
    const posts = getAllPosts()
    const path = req.params.path
    for (post of posts){
        if (post.attributes.title === path){
            res.render("pages/post", {post: post})
        }
    }
    res.end()
})

app.listen(3000)
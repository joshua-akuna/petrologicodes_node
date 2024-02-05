const express = require("express")
const router = express.Router()
const config = require("./config")
const posts = require('./get_posts')
const port = process.env.port || 5001
const app = express()

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

router.get('/', (req, res) => {
    res.render("pages/index", {posts: posts(), config: config})
})

router.get("/:path", (req, res) => {
    const path = req.params.path
    for (post of posts()){
        if (post.attributes.title === path){
            res.render("pages/post", {post: post})
        }
    }
})

app.use('/', router)

app.listen(port)
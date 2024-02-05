const express = require("express")
const app = express()
const router = express.Router()
const config = require("../config")
const posts = require('../get_posts')
const serverless = require('serverless-http')

app.set('view engine', 'ejs')
app.use('public', express.static('public'))

router.get('/', (req, res) => {
    res.render("pages/index")
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

app.listen(7500)
module.exports.handler = serverless(app)
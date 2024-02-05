const config = require("./config")
const fs = require("fs")
const {createPost} = require('./create_posts')
const path = require("path")

const getAllPosts = () =>{
    console.log(__dirname)
    const posts = fs
        .readdirSync(path.join(__dirname, config.dev.postsdir))
        .map(post => post.slice(0, -3))
        .map(post => createPost(post))
        
    if (!fs.existsSync(path.join(__dirname, config.dev.outdir))) {
        fs.mkdirSync(path.join(__dirname, config.dev.outdir))
    }

    return posts
}

module.exports = getAllPosts
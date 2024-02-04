const config = require("./config")
const fs = require("fs")
const {createPost} = require('./create_posts')

const getAllPosts = () =>{
    const posts = fs
        .readdirSync(config.dev.postsdir)
        .map(post => post.slice(0, -3))
        .map(post => createPost(post))
        
    if (!fs.existsSync(config.dev.outdir)) {
        fs.mkdirSync(config.dev.outdir)
    }

    return posts
}

module.exports = getAllPosts
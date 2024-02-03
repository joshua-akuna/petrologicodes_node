const config = require("./config")
const fm = require("front-matter")
const fs = require("fs")
const { marked } = require("marked")

const createPost = postPath => {
    const data = fs.readFileSync(`${config.dev.postsdir}/${postPath}.md`, "utf8")
    const content = fm(data)

    content.path = postPath
    content.body = marked(content.body)
    
    return content
}

module.exports = {
    createPost: createPost,
}
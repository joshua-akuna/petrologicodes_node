const { marked } = require("marked")

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: (code, language) => {
        const hljs = require("highlight.js")
        const validLangue = hljs.getLanguage(language) ? language : "plaintext"
        return hljs.highlight (validLangue, code).value
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
})

module.exports = marked
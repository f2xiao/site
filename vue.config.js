// frontmatter-markdown-loader options
const Mode = require('frontmatter-markdown-loader/mode')
// markdown parser
const markdownIt = require('markdown-it')
// Preset to use highlight.js with markdown-it.
const markdownItHlJs = require('markdown-it-highlightjs')
// Link attributes plugin for markdown-it 
const markdownItLA = require('markdown-it-link-attributes')

module.exports = {
  publicPath: "/site",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: {
            // import the compiled markdown body as Vue component.
            mode: [Mode.VUE_COMPONENT],
            markdownIt: markdownIt({ html: true })
              //enable inline code highlighting
              .use(markdownItHlJs, {
                inline: true,
              })
              // Each link parsed with this config will have the passed attributes.
              .use(markdownItLA, {
                attrs: {
                  target: '_blank'
                }
              })
          }
        }
      ]
    }
  }
}
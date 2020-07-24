const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\jlee9\\Desktop\\cs4001finalproject\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\jlee9\\Desktop\\cs4001finalproject\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\jlee9\\Desktop\\cs4001finalproject\\src\\pages\\index.js"))),
  "component---src-templates-chapters-js": hot(preferDefault(require("C:\\Users\\jlee9\\Desktop\\cs4001finalproject\\src\\templates\\chapters.js"))),
  "component---src-templates-content-page-js": hot(preferDefault(require("C:\\Users\\jlee9\\Desktop\\cs4001finalproject\\src\\templates\\content-page.js")))
}


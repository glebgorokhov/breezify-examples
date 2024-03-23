/** @type {import('breezify').BreezifyOptions} */
module.exports = {
  "files": {
    "buildDir": "dist",
    "pattern": "**/*.{css,js,html}",
    "ignore": []
  },
  "css": {
    "minify": true,
    "extractClassesFromHtml": true,
  },
  "js": {
    "mode": "acorn",
    "minify": true
  },
  "html": {
    "attributes": [
      "class"
    ],
    "minify": true
  }
}

# Base-gobierno-chile
Base gráfica framework

## WebPack StartedKit
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack --save-dev
npm install webpack-cli --save-dev
https://webpack.js.org/guides/getting-started/

## Orde for import scss component into webpack
Import Bootstrap 4 Sass Media Breakpoints for npm webpack
// avoid importing entire .scss as it might cause duplicate css styles
// @import '~bootstrap/scss/bootstrap.scss'
// safer to import variables and mixins only to avoid duplicate css styles
@import '~bootstrap/scss/_functions'
@import '~bootstrap/scss/_variables'
@import '~bootstrap/scss/mixins/_breakpoints'
https://code.luasoftware.com/tutorials/bootstrap/import-bootstrap4-sass-breakpoints/

const mix = require("laravel-mix");
const path = require("path");
require('laravel-mix-clean');

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  output: {
    chunkFilename: "[name].js",
    filename: "[name].js",
  },
  stats: {
    children: true,
  },
});

mix.alias({
  '@': path.join(__dirname, 'src'),
});

mix.clean({ dry: false, })
  .copy("public/**/*", "dist")
  .js("src/main.js", "js")
  .vue()
  .postCss("src/assets/css/main.css", "css", [
    require('postcss-import'),
    require('tailwindcss')("tailwind.config.js"),
    require("autoprefixer")
  ])
  .extract(['vue'])
  .setPublicPath('dist');

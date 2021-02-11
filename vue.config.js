module.exports = {
  pages: {
    main: {
      entry: './src/views/main/main.js',
      template: './src/views/template.html',
      filename: 'main.html',
      title: "主页",
    },
    blog: {
      entry: './src/views/blog/blog.js',
      template: './src/views/template.html',
      filename: 'blog.html',
      title: '我的博客',
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "././" : "/",
  outputDir: "dist",
  chainWebpack: config => {
    const path = require("path");
    config.resolve.alias
      // 常用的位置做成别名，引用的时候使用别名，webpack打包的时候可以生成对应的相对目录
      .set("@imgs", path.resolve("public/img"))
      .set("@comps", path.resolve("src/components"))
      .set("@assets", path.resolve("src/assets"))
      .set("@views", path.resolve("src/views"))
    .end();
    config.module.rule("eslint").use("eslint-loader");
  }
};

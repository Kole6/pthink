module.exports = {
  presets: ["@vue/app"],
  plugins: [
    // element按需引入
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
/*
module.exports = {
  presets: [
    '@vue/app'
  ]
}
*/
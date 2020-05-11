const getConfig = require("vuepress-bar");
const path = require("path");

const { nav, sidebar } = getConfig(`${__dirname}/..`, {
  addReadMeToFirstGroup: false,
  navPrefix: "step",
});

module.exports = {
  title: "ScriptGuru",
  dest: path.join(__dirname, "../../../docs"),
  themeConfig: {
    searchMaxSuggestions: 20,
    nav: [
      ...nav,
      { text: "GitHub", link: "https://github.com/davismcphee/script-guru" },
    ],
    sidebar,
  },
};

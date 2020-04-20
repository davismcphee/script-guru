const getConfig = require("vuepress-bar");
const path = require("path");

module.exports = {
  title: "ScriptGuru",
  dest: path.join(__dirname, "../../../docs"),
  themeConfig: {
    logo: "/assets/img/logo.svg",
    searchMaxSuggestions: 20,
    ...getConfig(`${__dirname}/..`, {
      addReadMeToFirstGroup: false,
      navPrefix: "step",
    }),
  },
};

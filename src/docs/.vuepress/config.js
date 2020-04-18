const getConfig = require("vuepress-bar");

module.exports = {
  title: "ScriptGuru",
  themeConfig: {
    logo: "/assets/img/logo.svg",
    searchMaxSuggestions: 20,
    ...getConfig(`${__dirname}/..`, {
      addReadMeToFirstGroup: false,
      navPrefix: "step",
    }),
  },
};

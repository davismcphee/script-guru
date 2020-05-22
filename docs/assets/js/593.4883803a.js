(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{911:function(e,t,o){"use strict";o.r(t);var n=o(33),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"contribute"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contribute"}},[e._v("#")]),e._v(" Contribute")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("HEY THERE!")]),e._v(" "),o("p",[e._v("The ScriptGuru website uses VuePress to generate documentation.\nIf you'd like to learn more about VuePress and Markdown, visit "),o("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("their website"),o("OutboundLink")],1),e._v("!")])]),e._v(" "),o("p",[e._v("Interested in contributing? All you need to do is fork the ScriptGuru source from "),o("a",{attrs:{href:"https://github.com/davismcphee/script-guru",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),o("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[o("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),e._v(" "),o("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])]),e._v(", add or update some documentation, and create a pull request. Here's some info you might find useful when creating documentation:")]),e._v(" "),o("h2",{attrs:{id:"yarn-scripts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#yarn-scripts"}},[e._v("#")]),e._v(" Yarn Scripts")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("// Generate documentation files\nyarn docs:gen\n\n// Generate docs, run VuePress build in dev mode\nyarn docs:dev\n\n// Generate docs, run VuePress build in prod mode\nyarn docs:build\n")])])]),o("h2",{attrs:{id:"build-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-process"}},[e._v("#")]),e._v(" Build Process")]),e._v(" "),o("p",[e._v("The ScriptGuru build process generates default Markdown documentation for functions based on lists of function names found in the "),o("code",[e._v("src/function-names/")]),e._v(" directory. The name of each text file in "),o("code",[e._v("function-names/")]),e._v(" corresponds to the name of a directory in "),o("code",[e._v("src/docs/step.2.docs/")]),e._v(", which is the directory where the default Markdown files for each function in the list will be generated. The file names of the generated Markdown files will match the function names (excluding parameters) in the list, for example "),o("code",[e._v("MyFunction.md")]),e._v(".")]),e._v(" "),o("p",[e._v("Completed Markdown files are kept in the "),o("code",[e._v("src/functions/")]),e._v(" directory, which has the same structure as "),o("code",[e._v("src/docs/step.2.docs/")]),e._v(". These files are copied on top of the default Markdown files at the end of the build process to ensure completed documentation will overwrite the default documentation. The file name of a completed Markdown file should match the file name of the same function's default Markdown file.")]),e._v(" "),o("h2",{attrs:{id:"creating-documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-documentation"}},[e._v("#")]),e._v(" Creating Documentation")]),e._v(" "),o("p",[e._v("To update the global variable documentation for a documentation category, find the "),o("code",[e._v("README.md")]),e._v(" located in "),o("code",[e._v("src/docs/step.2.docs/{category}/")]),e._v(". Any changes you would like to make to the global variable documentation can be made here.")]),e._v(" "),o("p",[e._v("To create documentation for a function, ensure the function name is listed in one of the text files in "),o("code",[e._v("src/function-names/")]),e._v(". If the function name does not exist, add it to the appropriate list on a new line. Run "),o("code",[e._v("yarn docs:gen")]),e._v(" to generate default documentation, and locate the default file which was generated for the function you want to document. Copy this file to "),o("code",[e._v("src/functions/{category}/")]),e._v(". Make any neccessary changes to the file, then run "),o("code",[e._v("yarn docs:dev")]),e._v(" to re-generate documentation and test your changes.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("VuePress supports hot reloading, so you can see changes to Markdown files without rebuilding or refreshing the page. If you want to take advantage of this feature, run "),o("code",[e._v("yarn docs:dev")]),e._v(" and edit the Markdown file for your function directly in "),o("code",[e._v("src/docs/step.2.docs/{category}/")]),e._v(" until you are satisfied with your changes. But don't forget to copy the file to "),o("code",[e._v("src/functions/{category}/")]),e._v(" when you're done, or else your file will be overwritten by default documentation the next time you run one of the Yarn scripts.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);
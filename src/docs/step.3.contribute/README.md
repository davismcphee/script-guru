# Contribute

::: tip HEY THERE!
The ScriptGuru website uses VuePress to generate documentation.
If you'd like to learn more about VuePress and Markdown, visit [their website](https://vuepress.vuejs.org/)!
:::

Interested in contributing? All you need to do is fork the ScriptGuru source from <a href="https://github.com/davismcphee/script-guru" target="_blank" rel="noopener noreferrer">GitHub<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>, add or update some documentation, and create a pull request. Here's some info you might find useful when creating documentation:

## Yarn Scripts

```
// Generate documentation files
yarn docs:gen

// Generate docs, run VuePress build in dev mode
yarn docs:dev

// Generate docs, run VuePress build in prod mode
yarn docs:build
```

## Build Process

The ScriptGuru build process generates default Markdown documentation for functions based on lists of function names found in the `src/function-names/` directory. The name of each text file in `function-names/` corresponds to the name of a directory in `src/docs/step.2.docs/`, which is the directory where the default Markdown files for each function in the list will be generated. The file names of the generated Markdown files will match the function names (excluding parameters) in the list, for example `MyFunction.md`.

Completed Markdown files are kept in the `src/functions/` directory, which has the same structure as `src/docs/step.2.docs/`. These files are copied on top of the default Markdown files at the end of the build process to ensure completed documentation will overwrite the default documentation. The file name of a completed Markdown file should match the file name of the same function's default Markdown file.

## Creating Documentation

To update the global variable documentation for a documentation category, find the `README.md` located in `src/docs/step.2.docs/{category}/`. Any changes you would like to make to the global variable documentation can be made here.

To create documentation for a function, ensure the function name is listed in one of the text files in `src/function-names/`. If the function name does not exist, add it to the appropriate list on a new line. Run `yarn docs:gen` to generate default documentation, and locate the default file which was generated for the function you want to document. Copy this file to `src/functions/{category}/`. Make any neccessary changes to the file, then run `yarn docs:dev` to re-generate documentation and test your changes.

::: tip
VuePress supports hot reloading, so you can see changes to Markdown files without rebuilding or refreshing the page. If you want to take advantage of this feature, run `yarn docs:dev` and edit the Markdown file for your function directly in `src/docs/step.2.docs/{category}/` until you are satisfied with your changes. But don't forget to copy the file to `src/functions/{category}/` when you're done, or else your file will be overwritten by default documentation the next time you run one of the Yarn scripts.
:::

const fs = require("fs-extra");
const readline = require("readline");
const path = require("path");
const glob = require("glob");

function readByLine(path, lineCallback, completeCallback) {
  const fileStream = fs.createReadStream(path);

  const readlineInterface = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  readlineInterface.on("line", (line) => {
    lineCallback(line);
  });

  readlineInterface.on("close", completeCallback);
}

function createTags(functionName) {
  const tags = [functionName, ...functionName.split(/(?=[A-Z])/g)];
  const lastTag = tags[tags.length - 1];

  tags[tags.length - 1] = lastTag.substring(0, lastTag.indexOf("("));

  const formattedTags = tags.reduce(
    (content, tag) => `${content}\n  - ${tag}`,
    ""
  );

  return `tags:${formattedTags}`;
}

const undocumented = `::: danger UNDOCUMENTED
This function has not been documented yet. :cry:
<p>If you know what it does and would like to help, consider writing some documentation and submitting a pull request on [GitHub](https://github.com/davismcphee/script-guru).</p>
:::`;

function generateDocs(docName) {
  glob
    .sync(path.join(__dirname, `src/docs/step.2.docs/${docName}/*.md`))
    .forEach((file) => {
      if (file.endsWith("README.md")) {
        return;
      }

      fs.removeSync(file);
    });

  readByLine(
    path.join(__dirname, `src/function-names/${docName}.txt`),
    (line) => {
      line = line.trim();

      if (!line || line.startsWith("#")) {
        return;
      }

      const mdPath = path.join(
        __dirname,
        `src/docs/step.2.docs/${docName}/${line.substring(
          0,
          line.indexOf("(")
        )}.md`
      );

      fs.writeFileSync(
        mdPath,
        `---\n${createTags(line)}\n---\n\n# ${line}\n\n${undocumented}`
      );
    },
    () => {
      const functionsPath = path.join(__dirname, `src/functions/${docName}/`);

      if (!fs.existsSync(functionsPath)) {
        return;
      }

      fs.copySync(
        functionsPath,
        path.join(__dirname, `src/docs/step.2.docs/${docName}/`)
      );
    }
  );
}

glob.sync(path.join(__dirname, "src/function-names/*.txt")).forEach((path) => {
  const functionName = path.substring(
    path.lastIndexOf("/") + 1,
    path.lastIndexOf(".")
  );

  generateDocs(functionName);
});

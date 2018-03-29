let fs = require("fs"),
  path = require("path");
console.log(path.resolve());
module.exports = {
  readFile(pathName) {
    pathName = `${path.resolve()}/database/${pathName}`;
    return new Promise((resolve, reject) => {
      fs.readFile(pathName, { encoding: "utf8" }, (e, data) => {
        if (e) {
          reject("error");
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  },
  writeFile(pathName, content) {
    pathName = `${path.resolve()}/database/${pathName}`;
    content = typeof content === "string" ? content : JSON.stringify(content);
    return new Promise((resolve, reject) => {
      fs.writeFile(pathName, content, "utf8", e => {
        if (e) {
          reject("error");
        } else {
          resolve("success");
        }
      });
    });
  }
};

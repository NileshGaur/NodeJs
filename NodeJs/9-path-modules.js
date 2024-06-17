const path = require("path");

// path.sep is a property that returns the separator used in the path
console.log(path.sep); // output: \

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// path.basename() returns the last portion of a path
const base = path.basename(filePath);
console.log(base); // output: test.txt

// path.resolve() returns an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); // output: C:\Users\username\Documents\Node.js\content\subfolder\test.txt

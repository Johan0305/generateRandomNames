let fs = require("fs");
const { faker } = require("@faker-js/faker");

let arr = [];

let generator = () => {
  for (i = 1; i <= 1000; i++) {
    arr.push(faker.name.findName());
  }
};

generator();
arr = arr.toString();
fs.writeFileSync("names.txt", arr);

try {
  fs.writeFileSync("names.txt", arr); //'a+' is append mode
  console.log("File written successfully");
} catch (err) {
  console.error(err);
}

const fs = require('fs');

function writeDataToFile(data, outputPath) {
  const writeStream = fs.createWriteStream(outputPath);
  const json = JSON.stringify(data);
  writeStream.write(json);
  writeStream.end();
}

module.exports = {
  writeDataToFile,
};

var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("node:path");

router.post("/", function (req, res, next) {
  console.log(req.body);
  console.log(req.body.password);

  const searchWord = req.body.password;

  // Create a read stream for the file
  const stream = fs.createReadStream(
    path.resolve(__dirname, "../public/files/realhuman_phill.txt"),
    "utf8"
  );

  let result = false;

  // Keep track of the line number
  let lineNumber = 0;

  // Listen for the 'data' event, which is emitted whenever a chunk of data is read from the file
  stream.on("data", (chunk) => {
    // Split the chunk into lines
    const lines = chunk.split("\n");

    // Loop through each line and check if it contains the search word
    for (let i = 0; i < lines.length; i++) {
      lineNumber++;

      if (lines[i] == searchWord) {
        //if you're looking just for a substring: lines[i].includes(searchWord)
        console.log("Found search word!");
        // console.log(`The password '${searchWord}' was found in line ${lineNumber}.`);
        console.log(lines[i]);
        result = true;
        break;
      }
    }
  });

  // Listen for the 'end' event, which is emitted when the entire file has been read
  stream.on("end", () => {
    res.json({ result: result });
    console.log("Done.");
  });

  // Listen for errors
  stream.on("error", (err) => {
    console.error(err);
  });
});

module.exports = router;

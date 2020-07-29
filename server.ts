import makeTextImage from "./makeImage";

import addTyposToString, { defaultSettings } from "./typos/addTyposToString";
var express = require("express");
var app = express();

app.get("/typos/:pathname", async function (req, res) {
  const { params } = req;
  const inputString = params?.pathname;

  const settings = {
    ...defaultSettings,
    extraCharacters: 40,
    frequency: 25,
    missedCharacters: 25,
  };

  const inputWithTypos = addTyposToString({
    inputString,
    settings,
  });

  const image = await makeTextImage(inputWithTypos);

  res.writeHead(200, {
    "Content-Type": "image/jpg",
    "Content-Length": image.length,
  });
  res.end(image);
});

app.get("/images/:pathname", async function (req, res) {
  const { params } = req;
  const pathname = params?.pathname;
  const image = await makeTextImage(pathname);
  //   res.set("Content-Type", "img/jpg");
  //   res.send(image);
  //var img = Buffer.from(image, "base64");

  res.writeHead(200, {
    "Content-Type": "image/jpg",
    "Content-Length": image.length,
  });
  res.end(image);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  //   var port = server.address().port;
  var port = process.env.PORT;

  console.log("Example app listening at http://%s:%s", host, port);
});

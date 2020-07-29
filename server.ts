import { doSomething } from "./makeImage";

var express = require("express");
var app = express();

app.get("/:pathname", async function (req, res) {
  const { params } = req;
  const pathname = params?.pathname;
  const image = await doSomething(pathname);
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
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

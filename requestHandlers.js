const exec = require("child_process").exec;
const querystring = require("querystring");
const fs = require("fs");

function start(response, postData) {
  console.log("Request handler for start was called.");

  var body = '<!DOCTYPE = html>' +
    '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=utf-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';

  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.write(body);
  response.end();
}

function upload(response, postData) {
  console.log("Request handler for upload was called.");
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.write("You've sent the text: " + querystring.parse(postData).text);
  response.end();
}
function show(response){
  console.log("Request handler for show was called.");
  response.writeHead(200, {
    "Content-Type": "image/png"
  });
  fs.createReadStream("./tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;

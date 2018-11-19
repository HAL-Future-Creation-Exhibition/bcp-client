const DEFINE_DEFAULT_SRC = {
  html: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./index.css">
  </head>
  <body>
    <h1>Hello World</h1>
    <script src="./index.js"></script>
  </body>
</html>`,
  css: `body {
  width: 100%;
  height: 100%;
}`,
  js: `console.log("Hello World");`
}

class WebServer {

  getSrc() {
    const src = JSON.parse(localStorage.getItem("MISOTEN_WEB_SRC")) || DEFINE_DEFAULT_SRC;
    return src;
  }

  setSrc(src) {
    localStorage.setItem("MISOTEN_WEB_SRC", JSON.stringify(src));
  }

}
export default new WebServer();
import axios from "axios";

class Client {

  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:8080"
    })
  }

  webUpdate({html, css, js}) {
    return this.http.post("/web/upload", {
      html,
      css,
      js
    });
  }

  fileDelete(path, name) {
    return this.http.delete(`/delete/file?path=${path}`, {
      name
    });
  }

  async download(paths) {
    const res = await this.http.post("/download", {
      paths
    });
    console.log(res.data);

    // const blob = res.data;
    // const a = document.createElement("a");
    // const blobURL = window.URL.createObjectURL(new Blob([blob], {
    //   type: blob.type
    // }));
    // a.style = "display: none";
    // document.body.appendChild(a);
    // a.href = blobURL;
    // a.download = "hoge.txt";
    // a.click();
  }

  getStorage(path) {
    if(path) {
      return this.http.get(`/file?path=${path}`);
    } else {
      return this.http.get(`/file`);
    }
  }

  uploadFile(files) {
    const fd = new FormData();
    for(const file of files) {
      fd.append("file", file);
    }
    return this.http.post("/upload/file", fd);
  }

  async uploadDir(current_dir ,files) {
    const fd = new FormData();
    fd.append("path", current_dir);
    for(const file of files) {
      fd.append("files", file);
      fd.append("filePath", file.webkitRelativePath);
    }
    return this.http.post("/upload/dir", fd);
  }

}

export default new Client();
import axios from "axios";
import JSZip from "jszip";

class Client {

  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:8080"
    })
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

  async uploadDir(files) {
    const zip = new JSZip();
    const fd = new FormData();
    for(const file of files) {
      zip.file(file.name, file);
      fd.append("filePath", file.webkitRelativePath);
    }
    const content = await zip.generateAsync({ type: "blob" });
    fd.append("files", content);
    return this.http.post("/hoge", fd);
  }

}

export default new Client();
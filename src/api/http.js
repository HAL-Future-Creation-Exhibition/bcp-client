import axios from "axios";
import JSZip from "jszip";

class Client {

  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:3001"
    })
  }

  uploadFile(files) {
    const fd = new FormData();
    for(const file of files) {
      fd.append("file", file);
    }
    return this.http.post("/hh", fd);
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
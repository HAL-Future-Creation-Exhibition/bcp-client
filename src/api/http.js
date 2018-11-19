import axios from "axios";

class Client {

  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:8080"
    })
  }

  deleteDir(path, name) {
    return this.http.delete(`/delete/dir?path=${path}`, {
      data: {
        name
      }
    })
  }

  createDir(path, name) {
    return this.http.post(`/create/dir?path=${path}`, {
      name
    });
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
      data: {
        name
      }
    });
  }

  async downloadFile(path, file_name) {
    const res = await this.http.post(`/download/file?path=${path}`, {
      paths: [file_name]
    }, {
      responseType: "arraybuffer"
    });

    const blob = res.data;
    const a = document.createElement("a");
    const blobURL = window.URL.createObjectURL(new Blob([blob], { type : 'application/octet-stream' }));
    a.style = "display: none";
    document.body.appendChild(a);
    a.href = blobURL;
    a.download = file_name;
    a.click();
    a.remove();
  }

  async downloadDir(path, file_name) {
    const res = await this.http.post(`/download/dir?path=${path}`, {
      paths: [file_name]
    }, {
      responseType: "arraybuffer"
    });

    const blob = res.data;
    const a = document.createElement("a");
    const blobURL = window.URL.createObjectURL(new Blob([blob], { type : 'application/octet-stream' }));
    a.style = "display: none";
    document.body.appendChild(a);
    a.href = blobURL;
    a.download = file_name + ".zip";
    a.click();
    a.remove();
  }

  getStorage(path) {
    if(path) {
      return this.http.get(`/file?path=${path}`);
    } else {
      return this.http.get(`/file`);
    }
  }

  uploadFile(current_dir, files) {
    const fd = new FormData();
    for(const file of files) {
      fd.append("file", file);
    }
    return this.http.post(`/upload/file?path=${current_dir}`, fd);
  }

  async uploadDir(current_dir ,files) {
    const fd = new FormData();
    fd.append("path", current_dir);
    for(const file of files) {
      fd.append("files", file);
      fd.append("filePath", file.webkitRelativePath);
    }
    return this.http.post(`/upload/dir?path=${current_dir}`, fd);
  }

}

export default new Client();
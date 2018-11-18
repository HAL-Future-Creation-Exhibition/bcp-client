<template>
  <div class="row">
    <div class="col-12">
      <label for="file-upload-input" style="margin-right: 10px;">
        <span class="btn">ファイルアップロード</span>
        <input type="file" style="display: none;" id="file-upload-input" multiple @change="uploadFiles">
      </label>

      <label for="dir-upload-input">
        <span class="btn">フォルダアップロード</span>
        <input type="file" style="display: none;"  id="dir-upload-input" webkitdirectory @change="uploadDir">
      </label>

      <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" style="cursor: pointer;" @click="navigation(-1)">
            <span>TOP</span>
          </li>
          <li class="breadcrumb-item" v-for="(b, index) in breadcrumbs" style="cursor: pointer;" @click="navigation(index)" :key="`breadcrumbs-index-${index}`">
            <span>{{b}}</span>
          </li>
        </ol>
      </nav>

      <div class="files-wrapper">
        <card class="text-center dir-card" v-for="(dir, index) in dirs" :key="`dir-index-${index}`">
          <div class="card-body" @click="dig(dir.name)">
            <h4 class="card-title">{{ dir.name }}</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018 / 01 / 19</p>
          </div>
        </card>
      </div>

      <table class="table" style="margin-top: 10px;">
        <thead>
            <tr>
                <th class="text-center">#</th>
                <th>Name</th>
                <th>Owner</th>
                <th>UpdatedAt</th>
                <th class="text-right">Actions</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(file, index) in files" :key="`file-index-${index}`">
            <td class="text-center">{{index + 1}}</td>
            <td>{{file.name}}</td>
            <td>konojunya</td>
            <td>2018 / 11 / 14</td>
            <td class="td-actions text-right">
              <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                <i class="material-icons" @click="download(file)">download</i>
              </button>
              <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                <i class="material-icons" @click="fileDelete(file)">delete</i>
              </button>
            </td>
          </tr>
        </tbody>
    </table>

    </div>
  </div>
</template>
<script>
import client from "../../api/http";
import { BaseTable, BaseButton } from "@/components";
const tableColumns = ["Name", "Owner", "UpdatedAt"];
export default {
  mounted() {
    this.getStorage();
  },
  components: {
    BaseTable,
    BaseButton
  },
  data() {
    return {
      files: [],
      dirs: [],
      breadcrumbs: []
    }
  },
  methods: {
    fileDelete(file) {
      client.fileDelete("/", file.name);
    },
    uploadFiles(e) {
      client.uploadFile(e.target.files);
    },
    uploadDir(e) {
      client.uploadDir(e.target.files);
    },
    async download(file) {
      const target = file.current_path.split("/").filter(r => !!r);
      target.push(file.name);
      await client.download(target);
    },
    async navigation(index) {
      if(index === -1) {
        this.breadcrumbs = [];
        this.getStorage();
      } else {
        this.getStorage(this.breadcrumbs[index]);
      }
    },
    async dig(name) {
      const current_dir = this.breadcrumbs.join("/");
      this.breadcrumbs.push(name);
      await this.getStorage(`${current_dir}/${name}`);
    },
    async getStorage(name) {
      const res = await client.getStorage(name);
      const raws = res.data.raws;
      this.breadcrumbs = raws[0].current_path.split("/").filter(r => !!r);
      this.files = raws.filter(raw => !raw.isDir);
      this.dirs = raws.filter(raw => raw.isDir);
    }
  }
}
</script>

<style lang="scss" scoped>
.files-wrapper {
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  .text-center {
    max-width: 15vw;
    min-width: 15vw;
    margin: 0 1vw 0 0;
    box-sizing:border-box;
    padding: 10px;
    .card-text {
      font-size: 12px;
    }
  }
}
.table {
  .btn-info {
    margin-right: 10px!important;
  }
}
.dir-card {
  cursor: pointer;
}
</style>

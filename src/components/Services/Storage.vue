<template>
  <div class="row">
    <div class="col-12">
      <label for="file-upload-input" style="margin-right: 10px;">
        <span class="btn">ファイルアップロード</span>
        <input type="file" style="display: none;" id="file-upload-input" @change="uploadFiles">
      </label>

      <label for="dir-upload-input" style="margin-right: 10px;">
        <span class="btn">フォルダアップロード</span>
        <input type="file" style="display: none;"  id="dir-upload-input" webkitdirectory @change="uploadDir">
      </label>

      <span class="btn" @click="createDir">フォルダ作成</span>

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
        <card class="text-center dir-card" v-for="(dir, index) in dirs" :key="`dir-index-${index}`" :data-id="index">
          <div class="card-body" @click="dig(dir.name)" @contextmenu.prevent="contextMenu" :data-id="index">
            <h4 class="card-title" :data-id="index">{{ dir.name }}</h4>
            <p class="card-text" :data-id="index">管理者: konojunya</p>
            <p class="card-text" :data-id="index">更新日: 2018 / 01 / 19</p>
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
                <i class="material-icons" @click="downloadFile(file)">download</i>
              </button>
              <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                <i class="material-icons" @click="fileDelete(file)">delete</i>
              </button>
            </td>
          </tr>
        </tbody>
    </table>

    <div class="card context-menu" style="width: 20rem;" ref="context_menu">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" @click="downloadDir">フォルダのダウンロード</li>
        <li class="list-group-item" @click="deleteDir">フォルダの削除</li>
      </ul>
    </div>

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
    document.body.addEventListener("click", this.documentClickHandler);
  },
  beforeDestroy() {
    document.body.removeEventListener("click", this.documentClickHandler);
  },
  components: {
    BaseTable,
    BaseButton
  },
  data() {
    return {
      files: [],
      dirs: [],
      breadcrumbs: [],
      select_context_dir: "0"
    }
  },
  methods: {
    documentClickHandler(e) {
      if(this.$refs.context_menu.classList.contains("active")) {
        this.$refs.context_menu.classList.remove("active");
        return false;
      }
    },
    contextMenu(e) {
      const pageX = e.pageX;
      const pageY = e.pageY;
      this.$refs.context_menu.style.left = pageX + "px";
      this.$refs.context_menu.style.top = pageY + "px";
      this.$refs.context_menu.classList.add("active");
      this.select_context_dir = e.target.dataset.id;
    },
    async downloadDir() {
      const current_dir = this.breadcrumbs.join("/");
      await client.downloadDir(current_dir, this.dirs[this.select_context_dir].name);
    },
    async deleteDir() {
      const current_dir = this.breadcrumbs.join("/");
      await client.deleteDir(current_dir, this.dirs[this.select_context_dir].name);
      await this.reloadStorageView();
    },
    async createDir() {
      const dirName = prompt("フォルダ名を指定してください", "");
      if(!dirName) {
        return;
      }
      const current_dir = this.breadcrumbs.join("/");
      await client.createDir(current_dir, dirName);
      await this.reloadStorageView();
    },
    async fileDelete(file) {
      await client.fileDelete(file.current_path, file.name);
      await this.reloadStorageView();
    },
    async uploadFiles(e) {
      const current_dir = this.breadcrumbs.join("/");
      await client.uploadFile(current_dir, e.target.files);
      await this.reloadStorageView();
    },
    async uploadDir(e) {
      const current_dir = this.breadcrumbs.join("/");
      await client.uploadDir(current_dir, e.target.files);
      await this.reloadStorageView();
    },
    async downloadFile(file) {
      await client.downloadFile(file.current_path, file.name);
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
      const rows = res.data.rows;
      if(rows) {
        this.breadcrumbs = rows[0].current_path.split("/").filter(r => !!r);
        this.files = rows.filter(raw => !raw.isDir);
        this.dirs = rows.filter(raw => raw.isDir);
      } else {
        this.files = [];
        this.dirs = [];
      }
    },
    async reloadStorageView() {
      const current_dir = this.breadcrumbs.join("/");
      await this.getStorage(current_dir);
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
  .card {
    user-select: none;
  }
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
.context-menu {
  &.active {
    display: block;
  }
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  ul {
    cursor: pointer;
    li {
      color: #0d0d0d;
    }
  }
}
</style>

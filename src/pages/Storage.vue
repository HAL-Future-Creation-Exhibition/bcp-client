<template>
  <div class="row">
    <div class="col-12">

      <label for="file-upload-input">
        <span class="btn">ファイルアップロード</span>
        <input type="file" style="display: none;" id="file-upload-input" multiple @change="uploadFiles">
      </label>

      <label for="dir-upload-input">
        <span class="btn">フォルダアップロード</span>
        <input type="file" style="display: none;"  id="dir-upload-input" webkitdirectory @change="uploadDir">
      </label>
      <card>
        <div class="table-responsive">
          <base-table
            :data="table.data"
            :columns="table.columns"
            thead-classes="text-primary"
          />
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { BaseTable, BaseButton } from "@/components";
import http from "@/api/http";
const tableColumns = ["Name", "Owner", "UpdatedAt"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    owner: "konojunya",
    updatedat: "2018/11/13"
  },
  {
    id: 2,
    name: "Minerva Hooper",
    owner: "konojunya",
    updatedat: "2018/11/13"
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    owner: "konojunya",
    updatedat: "2018/11/13"
  },
  {
    id: 4,
    name: "Philip Chaney",
    owner: "konojunya",
    updatedat: "2018/11/13"
  },
  {
    id: 5,
    name: "Doris Greene",
    owner: "konojunya",
    updatedat: "2018/11/13"
  },
  {
    id: 6,
    name: 'Mason Porter',
    owner: "konojunya",
    updatedat: "2018/11/13"
  },
  {
    id: 7,
    name: 'Jon Porter',
    owner: "konojunya",
    updatedat: "2018/11/13"
  }
];
export default {
  components: {
    BaseTable,
    BaseButton
  },
  data() {
    return {
      table: {
        columns: [...tableColumns],
        data: [...tableData]
      }
    }
  },
  methods: {
    uploadFiles(e) {
      http.uploadFile(e.target.files);
    },
    uploadDir(e) {
      http.uploadDir(e.target.files);
    }
  }
}
</script>

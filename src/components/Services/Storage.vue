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
          <li class="breadcrumb-item"><a href="#top">TOP</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>

      <div class="files-wrapper">
        <card class="text-center">
          <div class="card-body">
            <h4 class="card-title">hoge</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018/01/19</p>
          </div>
        </card>
        <card class="text-center">
          <div class="card-body">
            <h4 class="card-title">hoge</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018/01/19</p>
          </div>
        </card>
        <card class="text-center">
          <div class="card-body">
            <h4 class="card-title">hoge</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018/01/19</p>
          </div>
        </card>
        <card class="text-center">
          <div class="card-body">
            <h4 class="card-title">hoge</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018/01/19</p>
          </div>
        </card>
        <card class="text-center">
          <div class="card-body">
            <h4 class="card-title">hoge</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018/01/19</p>
          </div>
        </card>
        <card class="text-center">
          <div class="card-body">
            <h4 class="card-title">hoge</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018/01/19</p>
          </div>
        </card>
        <card class="text-center">
          <div class="card-body">
            <h4 class="card-title">hoge</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018/01/19</p>
          </div>
        </card>
        <card class="text-center">
          <div class="card-body">
            <h4 class="card-title">hoge</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018/01/19</p>
          </div>
        </card>
        <card class="text-center">
          <div class="card-body">
            <h4 class="card-title">hoge</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018/01/19</p>
          </div>
        </card>
        <card class="text-center">
          <div class="card-body">
            <h4 class="card-title">hoge</h4>
            <p class="card-text">管理者: konojunya</p>
            <p class="card-text">更新日: 2018/01/19</p>
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
            <tr>
                <td class="text-center">1</td>
                <td>Andrew Mike</td>
                <td>Develop</td>
                <td>2013</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                    <i class="material-icons">download</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
            </tr>
            <tr>
                <td class="text-center">2</td>
                <td>John Doe</td>
                <td>Design</td>
                <td>2012</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                    <i class="material-icons">download</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
            </tr>
            <tr>
                <td class="text-center">3</td>
                <td>Alex Mike</td>
                <td>Design</td>
                <td>2010</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                    <i class="material-icons">download</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
            </tr>
            <tr>
                <td class="text-center">3</td>
                <td>Alex Mike</td>
                <td>Design</td>
                <td>2010</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                    <i class="material-icons">download</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
            </tr>
            <tr>
                <td class="text-center">3</td>
                <td>Alex Mike</td>
                <td>Design</td>
                <td>2010</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                    <i class="material-icons">download</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
            </tr>
            <tr>
                <td class="text-center">3</td>
                <td>Alex Mike</td>
                <td>Design</td>
                <td>2010</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                    <i class="material-icons">download</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
            </tr>
            <tr>
                <td class="text-center">3</td>
                <td>Alex Mike</td>
                <td>Design</td>
                <td>2010</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                    <i class="material-icons">download</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
            </tr>
            <tr>
                <td class="text-center">3</td>
                <td>Alex Mike</td>
                <td>Design</td>
                <td>2010</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                    <i class="material-icons">download</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
            </tr>
            <tr>
                <td class="text-center">3</td>
                <td>Alex Mike</td>
                <td>Design</td>
                <td>2010</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                    <i class="material-icons">download</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
            </tr>
            <tr>
                <td class="text-center">3</td>
                <td>Alex Mike</td>
                <td>Design</td>
                <td>2010</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                    <i class="material-icons">download</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
            </tr>
        </tbody>
    </table>

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
    updatedat: "2018/11/13",
    isDir: true
  },
  {
    id: 2,
    name: "Minerva Hooper",
    owner: "konojunya",
    updatedat: "2018/11/13",
    isDir: true
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    owner: "konojunya",
    updatedat: "2018/11/13",
    isDir: false
  },
  {
    id: 4,
    name: "Philip Chaney",
    owner: "konojunya",
    updatedat: "2018/11/13",
    isDir: false
  },
  {
    id: 5,
    name: "Doris Greene",
    owner: "konojunya",
    updatedat: "2018/11/13",
    isDir: false
  },
  {
    id: 6,
    name: 'Mason Porter',
    owner: "konojunya",
    updatedat: "2018/11/13",
    isDir: false
  },
  {
    id: 7,
    name: 'Jon Porter',
    owner: "konojunya",
    updatedat: "2018/11/13",
    isDir: false
  }
];
export default {
  components: {
    BaseTable,
    BaseButton
  },
  data() {
    return {
      breadcrumbs: [],
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
</style>

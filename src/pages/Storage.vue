<template>
  <div class="row">
    <div class="col-12">
      <base-button>ファイルアップロード</base-button>
      <base-button>フォルダアップロード</base-button>
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
  }
}
</script>

<template>
  <div class="plan">
    <div class="title">应急预案管理</div>
    <div class="body mt-3">
      <div class="head">
        <span class="fs-2">输入预案名称</span>
        <el-input v-model="input" placeholder="请输入名称"></el-input>
      </div>
      <div class="tabel">
        <el-table align="center" :data="tableData" stripe style="width: 100%">
          <el-table-column align="center" prop="date" label="日期" width></el-table-column>
          <el-table-column align="center" prop="name" label="预案名称" width></el-table-column>
          <el-table-column align="center" prop="address" label="预案类型"></el-table-column>
          <el-table-column align="center" prop="user" label="制定人"></el-table-column>
          <el-table-column align="center" prop="leve" label="紧急程度">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.leve === '中' ? 'warning' : 'danger'"
                disable-transitions
              >{{scope.row.leve}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "公司失电应急程序",
          address: "工程阻碍",
          user: "李主任",
          leve: "中",
        },
        {
          date: "2016-05-04",
          name: "预防化工事故预案",
          address: "预防演练",
          user: "李主任",
          leve: "中",
        },
        {
          date: "2016-05-01",
          name: "发生火灾应急程序",
          address: "紧急事故",
          user: "张队长",
          leve: "高",
        },
        {
          date: "2016-05-03",
          name: "安全演练流程预案",
          address: "预防演练",
          user: "李主任",
          leve: "中",
        },
        {
          date: "2016-05-03",
          name: "电力事故应急预案",
          address: "紧急事故",
          user: "张队长",
          leve: "中",
        },
        {
          date: "2016-05-03",
          name: "塌陷事故应急预案",
          address: "紧急事故",
          user: "张队长",
          leve: "高",
        },
        {
          date: "2016-05-03",
          name: "地震事故应急预案",
          address: "自然灾害",
          user: "张队长",
          leve: "高",
        },
        {
          date: "2016-05-03",
          name: "溺水事故应急预案",
          address: "自然灾害",
          user: "张队长",
          leve: "高",
        },
        {
          date: "2016-05-03",
          name: "污染物泄露环保应急预案",
          address: "紧急事故",
          user: "张队长",
          leve: "高",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
.plan {
  height: 100vh;
  background-color: #f1f1f1;
}
.title {
  height: 6rem;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 2.5rem;
  font-size: 2rem;
  box-sizing: border-box;
}
.body {
  overflow: hidden;
  height: calc(100vh - 9rem);
  background-color: white;
  padding: 2.5rem;
  box-sizing: border-box;
}
::v-deep .el-input {
  width: auto;
}
.mt-3 {
  margin-top: 3rem;
}
.fs-2{
    font-size: 1.8rem;
    margin-right: 2rem;
}
</style>

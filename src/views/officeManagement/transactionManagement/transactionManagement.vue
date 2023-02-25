<template>
  <div class="box">
    <el-page-header class="pb-2" @back="goBack" content="事务管理">
    </el-page-header>
    <div class="box-top">
      <div class="box-select">
        <el-select class="" placeholder="全部类型" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select class="ml-5" placeholder="全部单位" size="small">
          <el-option
            v-for="item in unit"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select ml-5"
          size="small"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="box-search">
        <el-button
          type="primary"
          size="small"
          @click="dialogFormVisible = true"
          plain
          >发起事务</el-button
        >
        <el-dialog title="发起事务" class="" :visible.sync="dialogFormVisible">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="事务名称">
              <el-input v-model="sizeForm.name"></el-input>
            </el-form-item>
            <el-form-item label="部门">
              <el-select v-model="sizeForm.region" placeholder="请选择部门">
                <el-option label="全部门" value="shanghai"></el-option>
                <el-option label="服务部" value="beijing"></el-option>
                <el-option label="维修部" value="shanghai"></el-option>
                <el-option label="拓展部" value="beijing"></el-option>
                <el-option label="消防部" value="shanghai"></el-option>
                <el-option label="运输部" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开始时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="sizeForm.startDate"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="sizeForm.startTime"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="结束时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="sizeForm.endDate"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="sizeForm.endTime"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="事务类型">
              <el-checkbox-group v-model="sizeForm.type">
                <el-checkbox-button
                  label="基础保障"
                  name="type"
                ></el-checkbox-button>
                <el-checkbox-button
                  label="证件年检"
                  name="type"
                ></el-checkbox-button>
                <el-checkbox-button
                  label="防范演练"
                  name="type"
                ></el-checkbox-button>
                <el-checkbox-button
                  label="会议"
                  name="type"
                ></el-checkbox-button>
                <el-checkbox-button
                  label="园区环卫"
                  name="type"
                ></el-checkbox-button>
                <el-checkbox-button
                  label="设备检修"
                  name="type"
                ></el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="事务详情">
              <el-input type="textarea" v-model="sizeForm.desc"></el-input>
            </el-form-item>
            <el-form-item size="large">
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
    </div>
    <div class="box-table mt-2">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="事务名称" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="time"
          align="center"
          label="事务类型"
          width="200"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="extent" align="center" label="时间">
          <template slot-scope="scope">
            <span>{{ scope.row.extent }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="unit" align="center" label="部门" width="300">
          <template slot-scope="scope">
            <span>{{ scope.row.unit }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="state" align="center" label="当前状态">
          <template slot-scope="scope">
            <el-tag size="medium" :type="scope.row.type">{{
              scope.row.state
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="massage" align="center" label="组织人员">
          <template slot-scope="scope">
            <span>{{ scope.row.massage }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination mt-2"
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      delivery: false,
      dialogFormVisible: false,
      options: [
        {
          value: "选项1",
          label: "紧急",
        },
        {
          value: "选项2",
          label: "普通",
        },
        {
          value: "选项3",
          label: "加急",
        },
      ],
      unit: [
        {
          value: "选项1",
          label: "策划部",
        },
        {
          value: "选项2",
          label: "招商部",
        },
        {
          value: "选项3",
          label: "服务部",
        },
        {
          value: "选项1",
          label: "投资部",
        },
        {
          value: "选项2",
          label: "拓展部",
        },
        {
          value: "选项3",
          label: "合作部",
        },
      ],
      value: "",
      tableData: [
        {
          name: "园区食材供给",
          time: "基础保障",
          extent: "每日",
          unit: "服务部",
          state: "进行中",
          type: "",
          massage: "刘伟波",
        },
        {
          name: "各部门饮水供给",
          time: "基础保障",
          extent: "每日",
          unit: "服务部",
          state: "进行中",
          massage: "秦明哲",
        },
        {
          name: "运输部证照年检",
          time: "证照年检",
          extent: "2023-03-01",
          unit: "运输部",
          state: "进行中",
          massage: "卫正阳",
          type: "",
        },
        {
          name: "防火演练",
          time: "防范演练",
          extent: "2023-02-25",
          unit: "服务部",
          state: "待进行",
          type: "warning",
          massage: "周永峰",
        },
        {
          name: "拓展部二月业务总结",
          time: "会议",
          extent: "2023-03-01",
          unit: "拓展部",
          state: "待进行",
          type: "warning",
          massage: "侯心如",
        },
        {
          name: "园区环卫清扫",
          time: "环境卫生",
          extent: "2023-03-01",
          unit: "全部门",
          state: "待进行",
          type: "warning",
          massage: "耿磊",
        },

        {
          name: "化工器材检修",
          time: "设备检修",
          extent: "2023-03-15",
          unit: "维修部",
          state: "待进行",
          massage: "马格轩",
          type: "warning",
        },

        {
          name: "化工器材检修",
          time: "设备检修",
          extent: "2023-02-15",
          unit: "维修部",
          state: "已完成",
          type: "success",
          massage: "马格轩",
        },
        {
          name: "化工器材检修",
          time: "设备检修",
          extent: "2023-01-15",
          unit: "维修部",
          state: "已完成",
          type: "success",
          massage: "马格轩",
        },
        {
          name: "缴纳园区一月用电费用",
          time: "园区杂务",
          extent: "2023-02-01",
          unit: "服务部",
          state: "已完成",
          type: "success",
          massage: "朱鑫鹏",
        },
      ],
      sizeForm: {
        name: "",
        region: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      input3:'',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
  <style scoped>
.box-btn {
  display: flex;
  justify-content: center;
}
.box-select {
  display: flex;
}
.title {
  font-weight: bold;
  height: 6rem;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 2.5rem;
  font-size: 2rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
}
.width-10 {
  width: 10%;
}
.width-20 {
  width: 20%;
}
.pb-2 {
  padding-bottom: 2rem;
}
.dialog {
  display: flex;
  flex-direction: column;
}
.box-lr {
  display: flex;
}
.box {
  padding: 2rem;
  box-sizing: border-box;
}
.pagination {
  display: flex;
  justify-content: center;
}
element.style {
  margin: 0;
}
.box-top {
  display: flex;
  justify-content: space-between;
}
.left {
  width: 50%;
}
.rigth {
  width: 50%;
}
.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.ml-3 {
  margin-left: 3rem;
}
.flex1 {
  display: flex;
  align-items: center;
}
.ml-5 {
  margin-left: 5rem;
}
.ml-4 {
  margin-left: 4.5rem;
}
.mt-2 {
  margin-top: 2rem;
}
.line.el-col.el-col-2 {
  display: flex;
  justify-content: center;
}
::v-deep .is-scrolling-none {
  overflow-x: hidden; /* 设置溢出滚动 */
  overflow-y: scroll;
  /* 隐藏滚动条 */
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
::v-deep .is-scrolling-none::-webkit-scrollbar {
  width: 0;
  display: none;
}
</style>
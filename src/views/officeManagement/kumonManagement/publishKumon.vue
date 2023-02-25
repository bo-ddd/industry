<template>
  <div class="box">
    <el-page-header class="pb-2" @back="goBack" content="公文管理">
</el-page-header>
    <div class="box-top">
      <div class="box-select">
        
        <el-select class="" placeholder="公文状态" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select class="ml-5" placeholder="公文类型" size="small">
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
          >发文拟稿</el-button
        >

        <el-dialog title="发文拟稿" class="" :visible.sync="dialogFormVisible">
          <div class="dialog">
            <div class="mt-2">
              <span class="width-10">发文类型：</span>
              <el-select class="ml-3" placeholder="全部类型" size="small">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="mt-2">
              <span>发文类型：</span>
              <el-select class="ml-3" placeholder="全部类型" size="small">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="flex1 mt-2">
              <div class="width-10">标题：</div>
              <el-input class="ml-3" size="small"></el-input>
            </div>
            <div class="flex1 mt-2">
              <div class="width-10">项目：</div>
              <el-input
                class="ml-3"
                size="small"
                placeholder="请先选择项目"
              ></el-input>
            </div>
            <div class="box-lr">
              <div class="left">
                <div class="flex mt-2">
                  <div class="width-20">拟稿部门</div>
                  <el-input class="ml-4" size="small" placeholder=""></el-input>
                </div>
                <div class="flex mt-2">
                  <div class="width-20">核稿人</div>
                  <el-input class="ml-4" size="small" placeholder=""></el-input>
                </div>
                <div class="flex mt-2">
                  <div class="width-20">发文份数</div>
                  <el-input
                    class="ml-4"
                    size="small"
                    placeholder="请填写发文数量"
                  ></el-input>
                </div>
                <div class="flex mt-2">
                  <div class="width-20">秘密等级</div>
                  <el-input
                    class="ml-4"
                    size="small"
                    placeholder="公开"
                  ></el-input>
                </div>
                <div class="flex mt-2">
                  <div class="width-20">办结期限</div>
                  <el-input
                    class="ml-4"
                    size="small"
                    placeholder="选择办结期限"
                  ></el-input>
                </div>
              </div>
              <div class="rigth ml-3">
                <div class="flex mt-2">
                  <div class="width-20">拟稿人</div>
                  <el-input class="ml-4" size="small" placeholder=""></el-input>
                </div>
                <div class="flex mt-2">
                  <div class="width-20">校稿人</div>
                  <el-input class="ml-4" size="small" placeholder=""></el-input>
                </div>
                <div class="flex mt-2">
                  <div class="width-20">发文日期</div>
                  <el-input
                    class="ml-4"
                    size="small"
                    placeholder="请填写发文日期"
                  ></el-input>
                </div>
                <div class="flex mt-2">
                  <div class="width-20">紧急程度</div>
                  <el-input
                    class="ml-4"
                    size="small"
                    placeholder="请填写紧急程度"
                  ></el-input>
                </div>
                <div class="flex mt-2">
                  <div class="width-20">定期提醒</div>
                  <el-input
                    class="ml-4"
                    size="small"
                    placeholder="填写提醒时间"
                  ></el-input>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <span>联合呈批</span>
              <el-switch class="ml-4" v-model="delivery"></el-switch>
            </div>
            <div class="flex1 mt-2">
              <div class="width-10">主题词：</div>
              <el-input class="ml-3" size="small" placeholder=""></el-input>
            </div>
            <div class="flex1 mt-2">
              <div class="width-10">主送：</div>
              <el-input
                class="ml-3"
                size="small"
                placeholder="请输入主送人和单位"
              ></el-input>
            </div>
            <div class="flex1 mt-2">
              <div class="width-10">抄送：</div>
              <el-input
                class="ml-3"
                size="small"
                placeholder="请输入抄送人和单位"
              ></el-input>
            </div>
          </div>
          <div class="box-btn mt-2">
            <el-button type="primary" size="small" plain>暂存草稿</el-button>
            <el-button type="success" size="small" plain>确认发布</el-button>
            <el-button type="danger" size="small" plain>确认取消</el-button>
          </div>
        </el-dialog>

      </div>
    </div>
    <div class="box-table mt-2">
      <el-table :data="tableData"  style="width: 100%">
        <el-table-column prop="name" label="文件信息" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="time"
          align="center"
          label="发文时间"
          width="200"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="extent" align="center" label="类型">
          <template slot-scope="scope">
            <span>{{ scope.row.extent }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="unit"
          align="center"
          label="所属单位"
          width="300"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.unit }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="state" align="center" label="当前状态">
          <template slot-scope="scope">
            <el-tag size="medium" :type="scope.row.type">{{ scope.row.state }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="massage" align="center" label="拟稿人">
          <template slot-scope="scope">
            <span>{{ scope.row.massage }}</span>  
          </template>
        </el-table-column>
        <el-table-column prop="operate" align="center" label="操作">
          <template slot-scope="scope">
            <span>{{ scope.row.operate }}</span>
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
      input3:'',
      delivery: false,
      dialogFormVisible: false,
      options: [
        {
          value: "选项1",
          label: "已阅",
        },
        {
          value: "选项2",
          label: "未阅",
        },
       
       
      ],
      unit: [
        {
          value: "选项1",
          label: "决议",
        },
        {
          value: "选项2",
          label: "决定",
        },
        {
          value: "选项3",
          label: "命令",
        }, {
          value: "选项4",
          label: "公报",
        },
        {
          value: "选项5",
          label: "公告",
        },
        {
          value: "选项6",
          label: "通知",
        }, {
          value: "选项7",
          label: "通报",
        }, {
          value: "选项8",
          label: "请示",
        }, {
          value: "选项9",
          label: "批复",
        }, {
          value: "选项10",
          label: "议案",
        }, {
          value: "选项11",
          label: "函",
        },
        {
          value: "选项12",
          label: "纪要",
        },
        {
          value: "选项13",
          label: "通报",
        },
        {
          value: "选项14",
          label: "通告",
        },
        {
          value: "选项15",
          label: "报告",
        },
      ],
      value: "",
      tableData: [
        {
          name: "园区新区施工警示",
          time: "2023-02-24",
          extent: "通告",
          unit: "拓展部",
          state: "未阅",
          type:"warning",
          massage: "卫正阳",
          operate: "查看",
        },
        {
          name: "员工补贴薪资参照单",
          time: "2023-02-24",
          extent: "通知",
          unit: "管理部",
          state: "未阅",
          type:"warning",
          massage: "王鹏程",
          operate: "查看",
        },
        {
          name: "园区月度优秀员工申请",
          time: "2023-02-23",
          extent: "通告",
          unit: "管理部",
          state: "未阅",
          type:"warning",
          massage: "刘伟波",
          operate: "查看",
        },
        {
          name: "园区工时修改通告",
          time: "2023-02-21",
          extent: "通告",
          unit: "管理部",
          state: "已阅",
          type:"success",
          massage: "耿磊",
          operate: "查看",
        },
        {
          name: "04号流水线设备更新决议",
          time: "2023-02-21",
          extent: "决议",
          unit: "投资部",
          state: "已阅",
          type:"success",
          massage: "王鹏程",
          operate: "查看",
        },
        {
          name: "园区环境清洁规划决议",
          time: "2023-02-20",
          extent: "决议",
          unit: "环卫部",
          state: "已阅",
          type:"success",
          massage: "秦明哲",
          operate: "查看",
        },
        {
          name: "园区季度发展规划",
          time: "2023-02-20",
          extent: "决定",
          unit: "管理部",
          state: "已阅",
          type:"success",
          massage: "耿磊",
          operate: "查看",
        },
        {
          name: "化工运输03车维修停工请示",
          time: "2023-02-17",
          extent: "请示",
          unit: "运输部",
          state: "已阅",
          type:"success",
          massage: "马格轩",
          operate: "查看",
        },
        {
          name: "拓展部招新请示",
          time: "2023-02-13",
          extent: "请示",
          unit: "拓展部",
          state: "已阅",
          type:"success",
          massage: "朱鑫鹏",
          operate: "查看",
        },
        {
          name: "拓展部新业务线考察报告",
          time: "2023-02-10",
          extent: "报告",
          unit: "拓展部",
          state: "已阅",
          type:"success",
          massage: "侯心如",
          operate: "查看",
        },
        {
          name: "化工用器故障检测报告",
          time: "2023-02-05",
          extent: "报告",
          unit: "维修部",
          state: "已阅",
          type:"success",
          massage: "马格轩",
          operate: "查看",
        },
        {
          name: "运输部车辆检测报告",
          time: "2023-02-04",
          extent: "报告",
          unit: "运输部",
          state: "已阅",
          type:"success",
          massage: "周永峰",
          operate: "查看",
        },
        {
          name: "服务部门23年整改议案",
          time: "2023-01-24",
          extent: "议案",
          unit: "服务部",
          state: "已阅",
          type:"success",
          massage: "卫正阳",
          operate: "查看",
        },
    
        
      ],

    };
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
.box-select{
  display: flex;

}
.box-btn {
  display: flex;
  justify-content: center;
}
.width-10 {
  width: 10%;
}
.width-20 {
  width: 20%;
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
.pb-2{
  padding-bottom: 2rem;
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
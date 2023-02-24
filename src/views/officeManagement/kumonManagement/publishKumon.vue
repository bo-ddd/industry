<template>
  <div class="box">
    <div class="box-top">
      <div class="box-select">
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

        <el-select class="ml-5" placeholder="全部类型" size="small">
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
      </div>
      <div class="box-search">
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
          size="small"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
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
        <el-table-column prop="extent" align="center" label="紧急程度">
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
            <el-tag size="medium">{{ scope.row.state }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="massage" align="center" label="拟稿信息">
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
        }, {
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
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        {
          name: "公司发文-测试1525536",
          time: "2016-05-02",
          extent: "普通",
          unit: "河南卫辉乌拉拉网络科技有限公司",
          state: "待会签",
          massage: "拟稿人：卫正阳",
          operate: "查看",
        },
        
      ],
    };
  },
};
</script>
<style scoped>
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
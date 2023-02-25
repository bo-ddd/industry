<template>
    <div class="user">

       <div class="header mtb-20">
        <el-link type="primary">已离职员工</el-link>
        <span class="shu">|</span>
        <el-link type="primary">历史员工</el-link>
       </div>

       <div class="add-user mtb-20">
        <el-button type="primary">添加员工</el-button>
       </div>

       <div class="announcement">
       <div>
        akjshdkashdkjashdkjashdkjlhaskjl 
        <el-link class="ml-20" type="primary">暂时不知道些什么>></el-link>
       </div>
        <i class="el-icon-close"></i>
       </div>

       <div class="user-info mtb-20">

        <div class="user-type flex">
            <div class="active flex">在职员工<span class="ml-20 four">4</span></div>
            <div class="active-type flex">
                <div class="active-type-child ">
                    <div class="pb-10">全职</div>
                    <div class="pt-10">2</div>
                </div>
                <div class="active-type-child ">
                    <div class="pb-10">兼职</div>
                    <div class="pt-10">5</div>
                </div>
                <div class="active-type-child ">
                    <div class="pb-10">实习</div>
                    <div class="pt-10">1</div>
                </div>
                <div class="active-type-child red">
                    <div class="pb-10">无员工类型</div>
                    <div class="pt-10">1</div>
                </div>
            </div>
        </div>

        <div class="active-stats flex">
                <div class="active-stats-child ">
                    <div class="pb-10">试用期</div>
                    <div class="pt-10">0</div>
                </div>
                <div class="active-type-child ">
                    <div class="pb-10">正式</div>
                    <div class="pt-10">5</div>
                </div>
                <div class="active-type-child ">
                    <div class="pb-10">待离职</div>
                    <div class="pt-10">0</div>
                </div>
                <div class="active-type-child ">
                    <div class="pb-10">无状态</div>
                    <div class="pt-10">1</div>
                </div>
            </div>

       </div>

       <div class="mtb-20">
        <el-input class="search" v-model="input" placeholder="搜索员工"></el-input>

        <el-select class="ml-20" v-model="value" placeholder="请选择">
    <el-option
    
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

        <el-date-picker
        class="ml-20"
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>

    <el-button class="ml-20" type="primary">搜索</el-button>

    </div>

    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="entryDate"
      label="入职日期"
      align = center
      width="200">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      align = center
      width="200">
    </el-table-column>
    <el-table-column
      prop="department"
      label="部门"
      align = center
      width="200">
    </el-table-column>
    <el-table-column
      prop="position"
      label="职位"
      align = center
      width="200">
    </el-table-column>
    <el-table-column
      prop="userType"
      label="员工类型"
      align = center
      width="350">
    </el-table-column>
    <el-table-column
      prop="phoneNumber"
      label="手机号"
      align = center
      width="350">
    </el-table-column>
    <el-table-column
      fixed="right"
      align = center
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
  class="mt-10"
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>

    </div>
</template>

<script>
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        tableData: [{
            entryDate: '2016-05-02',
            name: '朱大壮',
            department:'呜啦啦实训组',
            position:'班长',
            userType: '全职',
            phoneNumber : '15921376125'
          }, {
            entryDate: '2016-05-04',
            name: '柯梦',
            department:'呜啦啦码超组',
            position:'小兵',
            userType: '兼职',
            phoneNumber : '15920866125'
          }, {
            entryDate: '2016-05-01',
            name: '许鹏蒲',
            department:'呜啦啦菜鸡组',
            position:'小兵',
            userType: '实习',
            phoneNumber : '15567376125'
          }, {
            entryDate: '2016-05-03',
            name: '王胖胖',
            department:'呜啦啦实训组',
            position:'小兵',
            userType: '兼职',
            phoneNumber : '15921456725'
          },
          {
            entryDate: '2016-05-03',
            name: '王胖胖',
            department:'呜啦啦实训组',
            position:'小兵',
            userType: '兼职',
            phoneNumber : '15921456725'
          },
          {
            entryDate: '2016-05-03',
            name: '王胖胖',
            department:'呜啦啦实训组',
            position:'小兵',
            userType: '兼职',
            phoneNumber : '15921456725'
          },
          {
            entryDate: '2016-05-03',
            name: '王胖胖',
            department:'呜啦啦实训组',
            position:'小兵',
            userType: '兼职',
            phoneNumber : '15921456725'
          },
          {
            entryDate: '2016-05-03',
            name: '王胖胖',
            department:'呜啦啦实训组',
            position:'小兵',
            userType: '兼职',
            phoneNumber : '15921456725'
          },
          {
            entryDate: '2016-05-03',
            name: '王胖胖',
            department:'呜啦啦实训组',
            position:'小兵',
            userType: '兼职',
            phoneNumber : '15921456725'
          }],
        value: '',
        value1: '',
      }
    }

}
</script>

<style scoped>
.red{
  color: red;
}
.four{
    margin-top: .5rem;
}
.mtb-20{
    margin: 2rem 0;
}
.mt-10{
    margin-top: 1rem;
}
.pt-10{
    padding-top: 1rem;
}
.pb-10{
    padding-bottom: 1rem;
}
.mlr-20{
    margin: 0 2rem;
}
.ml-20{
    margin-left: 2rem;
}
.mr-20{
    margin-right: 2rem;
}
.flex{
    display: flex;
}
.user{
    width: 180rem;
    margin: 0 auto;
}
.header{
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
}
.shu{
    color: #ccc;
    font-size: 1.3rem;
}
.add-user{
    display: flex;
    justify-content: flex-end;
}
.announcement{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
    padding: 0.5rem;
    border: 1px solid #C8ECFF;
    border-radius: 0.5rem;
    text-indent: 2rem;
    background-color: #E5F7FF;
}
.el-icon-close{
    float: right;
    margin-right: 3rem;
}
.user-info{
    display: flex;
    font-size: 1.6rem;
    justify-content: space-between;
}
.user-type{
    border: 1px solid #ccc;
    border-radius: 1rem;
}
.active{
    width: 20rem;
    height: 10rem;
    color: #409EFF;
    border-right: 1px solid #ccc;
    align-items: center;
    justify-content: center;
}
.active-type{
    width: 80rem;
    align-items: center;
    justify-content: space-around;
}
.active-type-child{
text-align: center;
}
.active-stats{
    width: 60rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    align-items: center;
    justify-content: space-around;
}
.active-stats-child{
text-align: center;
}
.search{
    width: 20rem;
}
</style>
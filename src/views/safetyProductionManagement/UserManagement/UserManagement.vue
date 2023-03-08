<template>
  <div class="user">
    <div class="select flex">
      <div>
        <el-input class="search" v-model="userName" placeholder="搜索员工"></el-input>

        <el-select class="ml-20" v-model="department" placeholder="请选择部门">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>

        <el-date-picker class="ml-20" v-model="date" type="date" placeholder="选择入职日期">
        </el-date-picker>

        <el-button class="ml-20" type="primary" @click="searchUser">搜索</el-button>
      </div>

      <div class="add-user mtb-20">
        <el-button type="primary">添加员工</el-button>
      </div>

    </div>

    <div class="announcement mb-40">
      <div>
        工资条一对一发放至员工！安全可靠！
        <el-link class="ml-20" type="primary">免费使用>></el-link>
      </div>
      <i class="el-icon-close" @click="click"></i>
    </div>

    <el-table :data="currentList" border style="width: 100%">
      <el-table-column fixed prop="entryDate" label="入职日期" align=center width=auto>
      </el-table-column>
      <el-table-column prop="name" label="姓名" align=center width=auto>
      </el-table-column>
      <el-table-column prop="department" label="部门" align=center width=auto>
      </el-table-column>
      <el-table-column prop="position" label="职位" align=center width=auto>
      </el-table-column>
      <el-table-column prop="userType" label="员工类型" align=center width=auto>
      </el-table-column>
      <el-table-column prop="phoneNumber" label="手机号" align=center width=auto>
      </el-table-column>
      <el-table-column fixed="right" align=center label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination class="mt-10" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="pageNum" :page-sizes="[5, 15, 20, 25]" :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { getUserListApi } from '@/api/api'
import { computed } from 'vue'
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
      pageNum: 1,
      pageSize: 5,
      total: 0,
      currentList: [],
      startIndex: 0,
      endIndex: 0,
      userData: [
        {
        id:1,
        name:'shui',
        department:'小猴组'
      },
        {
        id:2,
        name:'马',
        department:'小猴组'
      },
        {
        id:3,
        name:'shui',
        department:'小猴组'
      },
        {
        id:4,
        name:'王',
        department:'小猴组'
      },
        {
        id:5,
        name:'朱',
        department:'小猴组'
      },
        {
        id:6,
        name:'李',
        department:'小猴组'
      },
        {
        id:7,
        name:'耿',
        department:'小猴组'
      },
    ],///用户列表
      searchUserData:[],///搜索后用户列表
      userName: '',
      department: '',
      date: '',
    }
  },
  methods: {
    click(e) {
      console.log(e);
    },
    getUserList() {
      getUserListApi().then(res => {
        if (res.status == 200) {
          console.log(res.data);
          // this.userData = res.data.data
          console.log('列表渲染成功');
          // console.log(this.userData);
          //分页总条数
          this.total = computed(() => this.userData.length)
          //当前每页列表数据
          this.currentList = computed(() => this.userData.slice(this.startIndex, this.endIndex))
          // //开始下标
          this.startIndex = computed(() => (this.pageNum - 1) * this.pageSize)
          //结束下标
          this.endIndex = computed(() => this.pageNum * this.pageSize)
        } else {
          console.log('失败');
        }
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pageNum = val
      console.log(`当前页: ${val}`);
    },
    searchUser(){
      if(this.userName==''){
       this.searchUserData=JSON.parse(JSON.stringify(this.userData))
      }else{
       this.searchUserData=JSON.parse(JSON.stringify(this.userData))
        this.searchUserData.forEach(item => {
           if(item.name.includes(this.userName)){
            this.searchUserData=[]
             this.searchUserData.push(item)
           }
           this.userData=this.searchUserData 
        });
      }
    }
    
  },
  created() {
    this.getUserList()
  },
  // watch: {
    
  // }

}
</script>

<style scoped>
.red {
  color: red;
}

.four {
  margin-top: .5rem;
}

.mtb-20 {
  margin: 2rem 0;
}

.mb-40 {
  margin-bottom: 4rem;
}

.mt-10 {
  margin-top: 1rem;
}

.pt-10 {
  padding-top: 1rem;
}

.pb-10 {
  padding-bottom: 1rem;
}

.mlr-20 {
  margin: 0 2rem;
}

.ml-20 {
  margin-left: 2rem;
}

.mr-20 {
  margin-right: 2rem;
}

.flex {
  display: flex;
}

.user {
  width: 180rem;
  margin: 0 auto;
  padding: 2rem 0;
}

.shu {
  color: #ccc;
  font-size: 1.3rem;
}

.announcement {
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

.el-icon-close {
  cursor: pointer;
  float: right;
  margin-right: 6rem;
}

.user-info {
  display: flex;
  font-size: 1.6rem;
  justify-content: space-between;
}

.user-type {
  border: 1px solid #ccc;
  border-radius: 1rem;
}

.active {
  width: 20rem;
  height: 10rem;
  color: #409EFF;
  border-right: 1px solid #ccc;
  align-items: center;
  justify-content: center;
}

.active-type {
  width: 80rem;
  align-items: center;
  justify-content: space-around;
}

.active-type-child {
  text-align: center;
}

.active-stats {
  width: 60rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  align-items: center;
  justify-content: space-around;
}

.select {
  justify-content: space-between;
  align-items: center;
}

.active-stats-child {
  text-align: center;
}

.search {
  width: 20rem;
}
</style>
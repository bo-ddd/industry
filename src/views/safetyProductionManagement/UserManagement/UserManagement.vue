<template>
  <div class="user">
    <div class="select flex">
      <div>
        <el-input class="search" v-model="userName" size="small" placeholder="搜索员工"></el-input>

        <el-select class="ml-20" v-model="department" size="small" placeholder="请选择部门">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>

        <el-date-picker class="ml-20" v-model="date" type="date" size="small" placeholder="选择入职日期">
        </el-date-picker>

        <el-button class="ml-20" type="primary" size="small" @click="searchUser">搜索</el-button>
      </div>

      <div class="add-user mtb-20">
        <el-button @click="dialogFormVisible = true" size="small" type="primary">添加员工</el-button>
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
      <el-table-column fixed prop="id" label="入职日期" align=center width=auto>
      </el-table-column>
      <el-table-column prop="avatarName" label="姓名" align=center width=auto>
      </el-table-column>
      <el-table-column prop="deptNo" label="部门" align=center width=auto>
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
          <el-button @click="edit = true,handleEditClick(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 点击添加员工后的弹窗 -->
    <el-dialog title="添加员工" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名称" prop="useName">
          <el-input v-model="ruleForm.useName" placeholder="请输入4-8位的用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psw">
          <el-input type="password" v-model="ruleForm.psw" autocomplete="off" placeholder="请输入6-10位密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPsw">
          <el-input type="password" v-model="ruleForm.checkPsw" autocomplete="off" placeholder="请再次输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false, addUser()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 点击编辑弹出框 -->
    <el-dialog title="编辑信息" :visible.sync="edit">
      <el-form :model="editUserInfo" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="部门" prop="department">
          <el-input v-model="editUserInfo.department" placeholder="请输入要更改的部门"></el-input>
        </el-form-item>
        <el-form-item label="职位" prop="position">
          <el-input v-model="editUserInfo.position" autocomplete="off" placeholder="请输入要更换的职位"></el-input>
        </el-form-item>
        <el-form-item label="员工类型" prop="employeeType">
          <el-input v-model="editUserInfo.employeeType" autocomplete="off" placeholder="请输入更换的员工类型"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phoneNumber">
          <el-input v-model="editUserInfo.phoneNumber" autocomplete="off" placeholder="请输入要更换的手机号"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="edit = false">取 消</el-button>
        <el-button type="primary" @click="edit = false, editInfo()">确 定</el-button>
      </div>
    </el-dialog>

    <el-pagination class="mt-10" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="pageNum" :page-sizes="[5, 15, 20, 25]" :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { getUserListApi, registerUserApi } from '@/api/api'
import rolesList from '@/config/roles'
import navStore from '@/store/nav'

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
      userData: [],///用户列表
      searchUserData: [],///搜索后用户列表
      userName: '',
      department: '',
      date: '',
      dialogFormVisible: false,
      edit : false,
      ruleForm: {
        useName: '',
        psw: '',
        checkPsw: ''
      },
      editUserInfo :{
        department :'',
        position :'',
        employeeType :'',
        phoneNumber :''
      },
      editId: '',
      formLabelWidth: '120px',
      rules: {
        psw: [
          { validator: this.validatePass, trigger: 'blur' }
        ],
        checkPsw: [
          { validator: this.validatePass2, trigger: 'blur' }
        ],
        useName: [
          { validator: this.checkUserName, trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
     tips(type, text) {
      this.$message({
        message: text,
        type: type
      });
    },
    checkUserName(rule, value, callback) {
      if (value === '') {
        return callback(new Error('用户名不能为空'));
      }
      if (value.length < 4 || value.length > 16) {
        callback(new Error('用户名长度为4-16位'));
      }
    },
    validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 6 || value.length > 10) {
        callback(new Error('密码名长度为6-10位'));
      }
      else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPsw');
        }
        callback();
      }
    },
    validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.psw) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    click(e) {
      console.log(e);
    },

    getUserList() {
      getUserListApi().then(res => {
        if (res.status == 200) {
          this.searchUserData = res.data.data
          res.data.data.forEach(item => {
            console.log(item);
            switch (item.deptNo) {
              case 1:
                item.deptNo = '总经理办公室'
                break;
              case 2:
                item.deptNo = '行政部门'
                break;
              case 3:
                item.deptNo = '人力资源部'
                break;
              case 4:
                item.deptNo = '财务部'
                break;
              case 5:
                item.deptNo = '生产技术部'
                break;
              case 6:
                item.deptNo = '安全监察部'
                break;
              case 7:
                item.deptNo = '保卫部'
                break;
              case 8:
                item.deptNo = '环保部门'
                break;
              default:
                break;
            }
          })
          this.userData = this.searchUserData
          console.log('列表渲染成功');
          console.log(this.userData);
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
    //点击搜索按钮
    searchUser() {
      console.log('搜索');
      // userData =>   // searchUserData;
      if (this.userName == '') {
        this.searchUserData = JSON.parse(JSON.stringify(this.userData));
      } else {
        // 根据用户名查询用户信息；
        this.searchUserData = this.userData.filter(user => user.avatarName == this.userName);
        console.log(this.searchUserData);
        // 模糊查询
        this.searchUserData = this.userData.filter(user => new RegExp(this.userName).test(user.avatarName))
      }
    },
    // 添加员工
    addUser() {
      registerUserApi({
        username: this.ruleForm.useName,
        password: this.ruleForm.psw
      }).then(res => {
        if (res.statusCode == 200) {
          console.log(res);
          this.tips(success, '添加成功')
          this.ruleForm.useName = '',
            this.ruleForm.psw = '',
            this.ruleForm.checkPsw = ''
        } else {
          this.$message.error(res.message);
        }
      })
    },
    //编辑用户信息
    handleEditClick(e){
      this.editId = e.id
    },  
    editInfo(){
      console.log(this.editId);
    }
  },
  mounted() {
    console.log(this.$store.dispatch(navStore.getUserInfo));
  },
  computed: {
    total() {
      return this.userData.length
    },
    currentList() {
      return this.searchUserData.slice(this.startIndex, this.endIndex)
    },
    startIndex() {
      return (this.pageNum - 1) * this.pageSize
    },
    endIndex() {
      return this.pageNum * this.pageSize
    }
  },
  created() {
    this.getUserList()
  },

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
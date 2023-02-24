<!-- 卡口管理 -->
<template>
    <div>
        <div class="header">
            <div class="time">
                <span class="title">日期查询</span>
                <el-date-picker v-model="value2" type="monthrange" align="right" unlink-panels range-separator="至"
                    start-placeholder="开始月份" end-placeholder="结束月份" :picker-options="pickerOptions">
                </el-date-picker>
                <el-button class="btn-search" type="primary">查询</el-button>
            </div>
            <div class="visitorName">
                <span class="title">访客查询</span>
                <el-input placeholder="请输入访客姓名" v-model="input" clearable>
                </el-input>
                <el-button class="btn-search" type="primary">查询</el-button>
            </div>
        </div>
        <div class="table">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="selection" align="center" width="55">
                </el-table-column>
                <el-table-column fixed prop="date" label="来访日期" align="center" width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名" align="center" width="120">
                </el-table-column>
                <el-table-column prop="department" label="来访部门" align="center" width="120">
                </el-table-column>
                <el-table-column prop="purpose" label="来访目的" align="center" width="120">
                </el-table-column>
                <el-table-column prop="peopleNum" label="来访人数" align="center" width="120">
                </el-table-column>
                <el-table-column prop="license" label="车牌号" align="center" width="160">
                </el-table-column>
                <el-table-column prop="phone" label="访客手机号" align="center" width="160">
                </el-table-column>
                <el-table-column prop="comeFrom" label="出发地" align="center" width="300">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button class="btn-operate" @click="handleClick(scope.row)" type="text"
                            size="small">查看</el-button>
                        <el-button class="btn-operate" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="paging">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage4" :page-sizes="[5, 10, 15, 20]" :page-size="10" background
                layout="total, sizes, prev, pager, next, jumper" :total="30">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick(row) {
            console.log(row);
        }
    },

    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                license: '京A00000',
                phone: '11111111111',
                comeFrom: '上海市普陀区金沙江路 1518 弄',
                department: '生产',
                purpose: '学习',
                peopleNum: 1
            }, {
                date: '2016-05-04',
                name: '王小虎',
                license: '京A00001',
                phone: '11111111111',
                comeFrom: '上海市普陀区金沙江路 1517 弄',
                department: '生产',
                purpose: '学习',
                peopleNum: 6
            }, {
                date: '2016-05-01',
                name: '王小虎',
                license: '京A00002',
                phone: '11111111111',
                comeFrom: '上海市普陀区金沙江路 1519 弄',
                department: '生产',
                purpose: '学习',
                peopleNum: 1
            }, {
                date: '2016-05-03',
                name: '王小虎',
                license: '京A00003',
                phone: '11111111111',
                comeFrom: '上海市普陀区金沙江路 1516 弄',
                department: '生产',
                purpose: '学习',
                peopleNum: 3
            }],
            pickerOptions: {
                shortcuts: [{
                    text: '本月',
                    onClick(picker) {
                        picker.$emit('pick', [new Date(), new Date()]);
                    }
                }, {
                    text: '今年至今',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date(new Date().getFullYear(), 0);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近六个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setMonth(start.getMonth() - 6);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value1: '',
            value2: ''
        }
    }
}
</script>
<style scoped>
.btn-search {
    margin-left: 2rem;
}

.title {
    margin-right: 2rem;
    width: 12rem;
    font-size: 1.6rem;
}

.time {
    padding-left: 2rem;
}

.visitorName {
    margin-left: 8rem;
    display: flex;
    align-items: center;
}


.header {
    height: 6rem;
    padding-top: 2rem;
    display: flex;
    align-items: center;
}

.table {
    margin: 4rem 0;
    padding: 0 2rem;
}

.paging {
    margin-left: 2rem;
}

.btn-operate {
    font-size: 1.6rem;
}
</style>
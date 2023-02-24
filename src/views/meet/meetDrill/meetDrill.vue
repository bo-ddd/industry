//应急模拟训练
<template>
    <div class="wraps">
        <div class="header">
            <span>应急模拟演练</span>
        </div>
        <div class="main">
            <div class="form">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="名称">
                        <el-input v-model="formInline.user" placeholder="请输入名称"></el-input>
                    </el-form-item>
                    <el-form-item label="演练种类">
                        <el-select v-model="formInline.region" placeholder="请选择类型">
                            <el-option label="防火" value="shanghai"></el-option>
                            <el-option label="防震" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="button" type="primary" @click="onSubmit">查询</el-button>
                        <el-button class="add-button button" type="primary" @click="onSubmit">添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table :data="tableData" stripe style=" width: 97%">
                <el-table-column prop="date" label="时间" width="160">
                </el-table-column>
                <el-table-column prop="subject" label="演练科目" width="160">
                </el-table-column>
                <el-table-column prop="personnel" label="人员" width="160">
                </el-table-column>
                <el-table-column prop="content" label="内容" width="160">
                </el-table-column>
                <el-table-column prop="commander" label="指挥人" width="160">
                </el-table-column>
                <el-table-column prop="createby" label="创建人" width="160">
                </el-table-column>
                <el-table-column prop="qualified" label="是否合格" width="160">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formInline: {
                user: '',
                currentPage: 1,
                region: '',
            },
            tableData: [{
                date: '2016-05-02',
                content: '应急避震',
                subject: '防震',
                personnel: '全体员工',
                name: '防震',
                commander: '张三',
                createby: '李四',
                qualified: '是',
            }, {
                date: '2016-05-04',
                content: '应急避震',
                subject: '防火',
                personnel: '全体员工',
                name: '防震',
                commander: '张三',
                createby: '李四',
                qualified: '是',
            }, {
                date: '2016-05-01',
                content: '应急避震',
                subject: '防震',
                personnel: '全体员工',
                name: '防震',
                commander: '张三',
                createby: '李四',
                qualified: '否',
            }, {
                date: '2016-05-03',
                content: '应急避震',
                subject: '防火',
                personnel: '全体员工',
                name: '防震',
                commander: '张三',
                createby: '李四',
                qualified: '是',
            }]
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
}
</script>

<style>
.wraps {
    height: 100vh;
    background-color: #f1f1f1;
}

.header {
    padding: 2rem;
    background: #fff;
}

.form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.el-form-item {
    margin-bottom: 0px;
}

.add-button {
    margin: 0 2rem;
}

.el-button {
    padding: 1rem 1.5rem;
}

.el-table {
    margin: 2rem;
}

.block {
    margin: 0 2rem;
}
.main{
    background: #fff;
    padding: 2rem 0;
    margin: 2rem 0;
}
</style>
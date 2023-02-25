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
                        <el-button class="add-button button" type="primary" @click="dialogFormVisible = true">添加</el-button>
                        <el-dialog :visible.sync="dialogFormVisible">
                            <el-form :model="form">
                                <el-form-item label="内容" :label-width="formLabelWidth">
                                    <el-input v-model="form.content" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="人员" :label-width="formLabelWidth">
                                    <el-input v-model="form.personnel" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="指挥人" :label-width="formLabelWidth">
                                    <el-input v-model="form.commander" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="创建人" :label-width="formLabelWidth">
                                    <el-input v-model="form.createby" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="演练科目" :label-width="formLabelWidth">
                                    <el-input v-model="form.subject" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="是否合格" :label-width="formLabelWidth">
                                    <el-select v-model="form.qualified" placeholder="请选择活动区域">
                                        <el-option label="是" value="shanghai"></el-option>
                                        <el-option label="否" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                    </el-form-item>
                </el-form>
            </div>
            <el-table :data="tableData" stripe style=" width: 100%">
                <el-table-column prop="date" label="时间" width="180">
                </el-table-column>
                <el-table-column prop="subject" label="演练科目" width="180">
                </el-table-column>
                <el-table-column prop="personnel" label="人员" width="180">
                </el-table-column>
                <el-table-column prop="content" label="内容" width="180">
                </el-table-column>
                <el-table-column prop="commander" label="指挥人" width="180">
                </el-table-column>
                <el-table-column prop="createby" label="创建人" width="180">
                </el-table-column>
                <el-table-column prop="qualified" label="是否合格" width="180">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini"
                            @click="handleEdit(scope.$index, scope.row), dialogFormVisibles = true">编辑</el-button>
                        <el-dialog :visible.sync="dialogFormVisibles">
                            <el-form :model="forms">
                                <el-form-item label="内容" :label-width="formLabelWidth">
                                    <el-input v-model="forms.content" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="人员" :label-width="formLabelWidth">
                                    <el-input v-model="forms.personnel" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="指挥人" :label-width="formLabelWidth">
                                    <el-input v-model="forms.commander" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="创建人" :label-width="formLabelWidth">
                                    <el-input v-model="forms.createby" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="演练科目" :label-width="formLabelWidth">
                                    <el-input v-model="forms.subject" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="是否合格" :label-width="formLabelWidth">
                                    <el-select v-model="forms.qualified" placeholder="请选择活动区域">
                                        <el-option label="是" value="shanghai"></el-option>
                                        <el-option label="否" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisibles = false, open3()" :plain="true">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisibles = false, open2()" :plain="true">确
                                    定</el-button>
                            </div>
                        </el-dialog>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
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
                region: '',
            },
            tableData: [{
                date: '2016-05-02',
                content: '应急避震',
                subject: '防震',
                personnel: '全体员工',
                commander: '普肖帅',
                createby: '李帅',
                qualified: '是',
            }, {
                date: '2016-05-04',
                content: '应急避火',
                subject: '防火',
                personnel: 'A区员工',
                commander: '周永峰',
                createby: '申少杰',
                qualified: '是',
            }, {
                date: '2016-05-01',
                content: '应急避洪',
                subject: '防洪',
                personnel: '全体员工',
                commander: '郝永祥',
                createby: '卫正阳',
                qualified: '否',
            }, {
                date: '2016-05-03',
                content: '应急避电',
                subject: '防电',
                personnel: 'C区员工',
                commander: '尚宇豪',
                createby: '朱鑫鹏',
                qualified: '是',
            }],
            dialogFormVisible: false,
            dialogFormVisibles: false,
            form: {
                qualified: '',
                type: [],
                content: '',
                personnel: '',
                subject: '',
                commander: '',
                createby: '',
            },
            forms: {
                qualified: '',
                type: [],
                content: '',
                personnel: '',
                subject: '',
                commander: '',
                createby: '',
            },
            formLabelWidth: '120px'
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
            this.forms = row;
        },
        open2() {
            this.$message({
                message: '修改成功',
                type: 'success'
            });
        },
        open3() {
            this.$message({
                message: '取消修改',
                type: 'warning'
            });
        },
    },
}
</script>

<style scoped>
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

.main {
    background: #fff;
    padding: 2rem 0;
    margin: 2rem 0;
    display: grid;
    box-sizing: border-box;
    grid-template-rows: min-content auto;

    height: 90vh;
    width: 100%;
    min-height: 40vh;
    
}
.el-table{
    overflow: scroll;
}

.el-form-item {
    padding: 1rem 0;
}
</style>
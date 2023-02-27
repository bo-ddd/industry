<template>
    <div class="wrap pollutant-box">
        <div class="title">污染物记录</div>
        <div class="mtb-10">
            <div class="second-title">信息检索</div>
            <div class="flex-start header">
                <div class="flex-center mtb-10">
                    <label class="third-title">事件内容：</label>
                    <el-input v-model="input" size="mini" class="text-kuang" label-width="100px"></el-input>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">事件来源：</label>
                    <el-select class="text-kuang" size="mini" label-width="100px" v-model="value" placeholder="请选择">
                        <el-option v-for="item in eventSourse" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">开始时间：</label>
                    <el-date-picker v-model="value1" type="datetime" size="mini" class="text-kuang" placeholder="选择日期时间">
                    </el-date-picker>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">结束时间：</label>
                    <el-date-picker v-model="value1" type="datetime" size="mini" class="text-kuang" placeholder="选择日期时间">
                    </el-date-picker>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">受理状态：</label>
                    <el-select class="text-kuang" size="mini" label-width="100px" v-model="value" placeholder="请选择">
                        <el-option v-for="item in eventSourse" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">所属网格：</label>
                    <el-select class="text-kuang" size="mini" label-width="100px" v-model="value" placeholder="请选择">
                        <el-option v-for="item in belongGrid" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">污染类型：</label>
                    <el-select class="text-kuang" size="mini" label-width="100px" v-model="value" placeholder="请选择">
                        <el-option v-for="item in pollutionType" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <el-button class="" size="mini" type="primary" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
        <div class="border"></div>
        <div>
            <div class="flex-center mtb-10">
                <div class="second-title">事件记录</div>
                <div>
                    <el-button type="primary" size="small" @click="addData">增加</el-button>
                    <el-button type="primary" size="small">批量删除</el-button>
                    <el-button type="primary" size="small">批量导出</el-button>
                </div>
            </div>
            <template>
                <!--  :header-cell-style="{ background: '#00baff', color: 'white' }"  -->
                <el-table :data="tableData" class="pullutant-table" style="width: 100%">
                    <el-table-column type="selection" width="55" align="center">
                    </el-table-column>
                    <el-table-column label="序号" type="index" align="center">
                    </el-table-column>
                    <el-table-column prop="eventNumber" label="编号" align="center">
                    </el-table-column>
                    <el-table-column prop="eventContent" label="事件内容" align="center">
                    </el-table-column>
                    <el-table-column prop="pollutionSourseName" label="污染源名称" align="center">
                    </el-table-column>
                    <el-table-column prop="eventSourse" label="事件来源" align="center">
                    </el-table-column>
                    <el-table-column prop="pollutionType" label="污染类型" align="center">
                    </el-table-column>
                    <el-table-column prop="belongGrid" label="所属网络" align="center">
                    </el-table-column>
                    <el-table-column prop="reportPerson" label="上报人" align="center">
                    </el-table-column>
                    <el-table-column prop="acceptanceStatus" label="受理状态" align="center">
                    </el-table-column>
                    <el-table-column prop="patrolTime" label="巡查时间" align="center">
                    </el-table-column>
                    <el-table-column size="medium" align="center">
                        <template slot="header">
                            <div>操作</div>
                        </template>
                        <template slot-scope="scope">
                            <div class="flex-around">
                                <!-- 编辑按钮 -->
                                <div class="operate-productinfo_btn">
                                    <i class="el-icon-edit icon"></i>
                                </div>
                                <!-- 删除按钮 -->
                                <div class="operate-productinfo_btn">
                                    <i class="el-icon-delete icon" @click.stop="handleDelete(scope.$index, scope.row)"></i>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <el-pagination 
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange"
            :current-page="currentPage4" 
            :page-sizes="[5, 10, 20, 30]" 
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper" 
            :total="total"
        >
        </el-pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
                    eventNumber: 'E202390090',
                    eventContent: '生活垃圾堆放',
                    pollutionSourseName: '',
                    eventSourse: '网格员上报',
                    pollutionType: '垃圾堆放',
                    belongGrid: '人和镇',
                    reportPerson: '周永峰',
                    acceptanceStatus: '受理通过',
                    patrolTime: '2023-02-28 14:31'
                },{
                    eventNumber: 'E202390090',
                    eventContent: '生活垃圾堆放',
                    pollutionSourseName: '',
                    eventSourse: '网格员上报',
                    pollutionType: '垃圾堆放',
                    belongGrid: '人和镇',
                    reportPerson: '周永峰',
                    acceptanceStatus: '受理通过',
                    patrolTime: '2023-02-28 14:31'
                },
                {
                    eventNumber: 'E202390090',
                    eventContent: '生活垃圾堆放',
                    pollutionSourseName: '',
                    eventSourse: '网格员上报',
                    pollutionType: '垃圾堆放',
                    belongGrid: '人和镇',
                    reportPerson: '周永峰',
                    acceptanceStatus: '受理通过',
                    patrolTime: '2023-02-28 14:31'
            }],
            eventSourse: [{
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项1',
                    label: '黄金糕'
            }],
            acceptanceStatus: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项1',
                    label: '黄金糕'
                },
            ],
            belongGrid: [{
                value: '选项1',
                label: '黄金糕'
            },
            {
                value: '选项1',
                label: '黄金糕'
            },
            {
                value: '选项1',
                label: '黄金糕'
            }],
            pollutionType: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项1',
                    label: '黄金糕'
                },
            ],
            currentPage4: 1,
            total: 0
        }
    },
    mounted() {
        this.total = this.tableData.length
    },

    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        //删除数据
        handleDelete(index,row){
            this.tableData.splice(index, 1);
        },
        //添加数据
        addData(){

        }
    }
}
</script>
<style scoped>
.wrap {
    padding: 2rem;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.mtb-10 {
    margin: 1rem 1rem;
}

.border {
    border-bottom: 2px solid #4a82cc;
}

.pollutant-box {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
}

.title {
    font-size: 2.6rem;
}

.second-title {
    font-size: 2.2rem;
}

.third-title {
    font-size: 1.8rem;
}

.text-kuang {
    width: 20rem;
}

.flex-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-around {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.flex-start {
    display: flex;
    justify-content: start;
    align-items: center;
}

.el-table{
    position: unset;
}

.pullutant-table{
    height: 57rem;
}

.el-pagination {
    margin-top: 2rem;
}
</style>
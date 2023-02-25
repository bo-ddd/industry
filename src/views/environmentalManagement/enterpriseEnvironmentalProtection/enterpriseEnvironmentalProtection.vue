<template>
    <div class="wrap box">
        <div class="flex-left-gap20 header">
            <div>工程名称:监测工厂化工元素是否超标</div>
            <div>备案编号:HS1701</div>
        </div>
        <div class="grid-center pd-20">
            <div class="enterprise-info">
                <el-form :label-position="labelPosition" label-width="130px" :model="FormEnterpriseInfo">
                    <el-form-item label="产品名称">
                        <el-input placeholder="请输入产品名称" v-model="FormEnterpriseInfo.enterpriseName"></el-input>
                    </el-form-item>
                    <el-form-item label="法定代表人" width="200">
                        <el-input placeholder="请输入法定代表人" v-model="FormEnterpriseInfo.legalRepresentative"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号">
                        <el-input placeholder="请输入身份证号" v-model="FormEnterpriseInfo.idNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="注册资金">
                        <el-input placeholder="请输入注册资金" v-model="FormEnterpriseInfo.regiestFund"></el-input>
                    </el-form-item>
                    <el-form-item label="经济性质">
                        <el-input placeholder="请输入经济性质" v-model="FormEnterpriseInfo.economicNature"></el-input>
                    </el-form-item>
                    <el-form-item label="工商注册登记证号">
                        <el-input placeholder="请输入工商注册登记证号" v-model="FormEnterpriseInfo.bcrc"></el-input>
                    </el-form-item>
                    <el-form-item label="年检时间">
                        <el-input placeholder="请输入年检时间" v-model="FormEnterpriseInfo.annualInspectionTime"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="product-info">
                <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
                    <el-table-column label="序号" type="index" align="center">
                    </el-table-column>
                    <el-table-column property="productName" label="产品名称" align="center">
                    </el-table-column>
                    <el-table-column property="specification" label="规格型号" align="center">
                    </el-table-column>
                    <el-table-column property="certificate" label="合格证" align="center">
                        <div @click="handleOpenCertificate">点击查看合格证</div>
                    </el-table-column>
                    <el-table-column property="monitoringReport" label="监测报告" align="center">
                        <div @click="handleOpenMonitoring">点击查看检测报告</div>
                    </el-table-column>
                    <el-table-column property="recordNo" label="备案号" align="center">
                    </el-table-column>
                    <el-table-column size="medium" align="center">
                        <template slot="header">
                            <div>操作</div>
                        </template>
                        <template slot-scope="scope">
                            <div class="flex-center">
                                <!-- 编辑按钮 -->
                                <div class="operate-productinfo_btn">
                                    <i class="el-icon-edit icon"></i>
                                </div>
                                <!-- 删除按钮 -->
                                <div class="operate-productinfo_btn" v-if="scope.row.index != 1">
                                    <i class="el-icon-delete icon" @click.stop="handleDelete(scope.$index,scope.row)"></i>
                                </div>
                                <!-- 添加按钮 -->
                                <div class="operate-productinfo_btn" v-if="tableData.length == 1">
                                    <i class="el-icon-circle-plus-outline icon" @click.stop="handleAdd"></i>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <a class="mt-20">submit</a>
        </div>
        <el-dialog title="添加产品信息" :visible.sync="addProductInfodialogVisible" width="50%">
            <div>
                <div>
                    <el-form :model="tableData" :label-position="labelPosition">
                        <el-form-item>
                            <div class="grid-around">
                                <div class="label-box">
                                    产品名称
                                </div>
                                <div class="input-box">
                                    <el-input placeholder="请输入产品名称" v-model="addProductInfoForm.productName" clearable>
                                    </el-input>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <div class="grid-around">
                                <div class="label-box">
                                    规格型号
                                </div>
                                <div class="input-box">
                                    <el-input placeholder="规格型号" v-model="addProductInfoForm.specification" clearable>
                                    </el-input>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <div class="grid-around">
                                <div class="label-box">
                                    合格证
                                </div>
                                <div class="input-box">
                                    <el-input placeholder="合格证" v-model="addProductInfoForm.certificate" clearable>
                                    </el-input>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <div class="grid-around">
                                <div class="label-box">
                                    监测报告
                                </div>
                                <div class="input-box">
                                    <el-input placeholder="请输入监测报告" v-model="addProductInfoForm.monitoringReport" clearable>
                                    </el-input>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <div class="grid-around">
                                <div class="label-box">
                                    备案号
                                </div>
                                <div class="input-box">
                                    <el-input placeholder="备案号" v-model="addProductInfoForm.recordNo" clearable>
                                    </el-input>
                                </div>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addProductInfodialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="AddData">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="合格证" :visible.sync="certificateDialogVisible" width="50%">
            <div class="flex-center">
                <div></div>
                <div>
                    <img src="../../../assets/images/certificate.jpg" class="certificate-image" alt="">
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="certificateDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="certificateDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="监测报告" :visible.sync="monitoringReportDialogVisible" width="50%">
            <div class="flex-center">
                <div></div>
                <div><img src="../../../assets/images/jctp.png" class="certificate-image" alt=""></div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="monitoringReportDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="monitoringReportDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            labelPosition: 'right',
            FormEnterpriseInfo: {
                enterpriseName: '',
                legalRepresentative: '',
                idNumber: '',
                regiestFund: '',
                economicNature: '',
                bcrc: '',
                annualInspectionTime: ''
            },
            tableData: [{
                index:1,
                productName: '避雷针1',
                specification: 'CH-33',
                certificate: '点击查看合格证',
                monitoringReport: '点击查看检测报告',
                recordNo: '京ICP备12040110'
            }],
            addProductInfoForm: {
                productName: '',
                specification: '',
                certificate: '',
                monitoringReport: '',
                recordNo: ''
            },
            currentRow: null,
            //添加产品信息
            addProductInfodialogVisible: false,
            //打开合格证
            certificateDialogVisible: false,
            //打开监测报告
            monitoringReportDialogVisible: false

        }
    },
    methods: {
        //添加产品信息方法
        handleAdd() {
            this.addProductInfodialogVisible = true;
        },
        AddData() {
            this.tableData.push(this.addProductInfoForm);
            // this.$set(this.tableData,index,updateContent);
            // this.addProductInfoForm = '';
            this.addProductInfodialogVisible = false;
        },
        //删除一行表格数据方法
        handleDelete(index, row) {
            console.log(index);
            console.log(row);
            this.tableData.splice(index, 1);
        },
        //打开合格证
        handleOpenCertificate() {
            this.certificateDialogVisible = true
        },
        //打开监测报告
        handleOpenMonitoring() {
            this.monitoringReportDialogVisible = true
        },
    },
}
</script>
<style>
.wrap {
    padding: 2rem;
    width: 89vw;
}

a {
    text-decoration: none;
    font-size: 18px;
    /* 角度渐变 */
    background: linear-gradient(90deg,blue,rgb(4, 171, 255),purple,rgb(223, 9, 235),rgb(163, 97, 237));
    background-size: 400%;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: white;
    /* 大写字母转换 */
    text-transform: uppercase;
    border-radius: 50px;
    z-index: 1;
}

a:hover {
    background-color: white;
    animation: light 5s infinite;
}

@keyframes light {
    100%{
        background-position: -400% 0;
    }
}

a::before {
    content: "";
    background: linear-gradient(90deg,blue,rgb(4, 171, 255),purple,rgb(223, 9, 235),rgb(163, 97, 237));
    background-size: 400%;
    border-radius: 50px;
    /* 背景模糊 */
    filter: blur(20px);
    z-index: -1;
}

/* 伪元素设置动画 */
a:hover::before {
    animation: light 5s infinite;
}

.mt-20 {
    margin-top: 2rem;
}

.pd-20 {
    padding: 2rem;
}

.header {
    font-size: 3rem;
    padding: 2rem;
}

.flex-left-gap20 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
}

.grid-center {
    display: grid;
    align-items: center;
    grid-template-rows: auto auto;
}

.enterprise-info {
    width: 40%
}

.product-info {
    width: 100%;
}

.grid-around {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 6fr;
    justify-items: flex-end;
    gap: 3rem;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.certificate-image {
    width: 40rem;
}

.input-box {
    width: 100%;
}

.add-productinfo_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.icon {
    font-size: 3rem;
}
.submit-btn{
    font-size: 2rem;
}
</style>
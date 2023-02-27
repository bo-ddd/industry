<template>
    <dv-full-screen-container>
        <div class="outer-layer">
            <div class="header flex">
                <div class="to-be-delivered">
                    <div class="to-delivered-logo flex">
                        <div><img class="icon-to-transit" src="@/assets/image/icon-in-transit.png" alt=""></div>
                        <div class="fs-30">待派送</div>
                    </div>
                    <div class="to-delivered-detail">
                        <div class="detail-header">待派送</div>
                        <el-table :data="tableData" height="400" border style="width: 100%">
                            <el-table-column prop="waybillNumber" label="运单号" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="下单日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="货主">
                            </el-table-column>
                            <el-table-column prop="waybillType" label="运单类型">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
                <div class="dispatching">
                    <div class="dispatching-logo flex">
                        <div><img class="icon-to-transit" src="@/assets/image/icon-in-transit.png" alt=""></div>
                        <div class="fs-30">派送中</div>
                    </div>
                    <div class="dispatching-datail">
                        <div class="detail-header">派送中</div>
                        <el-table :data="tableData" height="400" border style="width: 100%">
                            <el-table-column prop="waybillNumber" label="运单号" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="下单日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="货主">
                            </el-table-column>
                            <el-table-column prop="waybillType" label="运单类型">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
                <div class="unusual">
                    <div class="unusual-logo flex">
                        <div><img class="icon-unusual" src="@/assets/image/icon-unusual.png" alt=""></div>
                        <div class="fs-30">异常</div>
                    </div>
                    <div class="unusual-detail">
                        <div class="detail-header">异常</div>
                        <el-table :data="tableData" height="400" border style="width: 100%">
                            <el-table-column prop="waybillNumber" label="运单号" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="下单日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="货主">
                            </el-table-column>
                            <el-table-column prop="waybillType" label="运单类型">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>

            <div class="flex">
                <pit-chart></pit-chart>
                <Histogram></Histogram>
            </div>


        </div>
    </dv-full-screen-container>
</template>

<script>
import Histogram from "./Histogram.vue";
import PitChart from "@/views/safetyProductionManagement/TransportationView/PieChart.vue"
export default {
    components: {
        Histogram,
        PitChart
    },
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                waybillType: '整车',
                waybillNumber: 'XJ54345VHGF345'
            }, {
                date: '2016-05-02',
                name: '王小龙',
                waybillType: '整车',
                waybillNumber: 'XJ54345VHGF345'
            }, {
                date: '2016-05-04',
                name: '王小蛇',
                waybillType: '大车',
                waybillNumber: 'XJ54345VHGF345'
            }, {
                date: '2016-05-01',
                name: '王小鸡',
                waybillType: '整车',
                waybillNumber: 'XJ54345VHGF345'
            }, {
                date: '2016-05-08',
                name: '王小豹',
                waybillType: '半车',
                waybillNumber: 'XJ54345VHGF345'
            }, {
                date: '2016-05-06',
                name: '王小鹤',
                waybillType: '整车',
                waybillNumber: 'XJ54345VHGF345'
            }, {
                date: '2016-05-07',
                name: '王小凤',
                waybillType: '整车',
                waybillNumber: 'XJ54345VHGF345'
            }, {
                date: '2016-05-07',
                name: '王小鸟',
                waybillType: '小车',
                waybillNumber: 'XJ54345VHGF345'
            }]
        }
    },

}
</script>

<style scoped>
.flex {
    display: flex;
}

.fs-30 {
    font-size: 3rem;
}

.outer-layer {
    width: 180rem;
    margin: 0 auto;
}

.header {
    margin: 2rem 0;
    justify-content: space-between;
}

.to-be-delivered {
    width: 55rem;
}

.dispatching {
    width: 55rem;
}

.unusual {
    width: 55rem;
}

.icon-to-transit {
    height: 4rem;
    vertical-align: middle;
    margin-top: .5rem;
    margin-right: 2rem;
}

.icon-unusual {
    height: 4rem;
    vertical-align: middle;
    margin-top: 1rem;
    margin-right: 2rem;
}

.to-delivered-logo {
    width: 100%;
    height: 10rem;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #F2AF44;
}

.dispatching-logo {
    width: 100%;
    height: 10rem;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #28B679;
}

.unusual-logo {
    width: 100%;
    height: 10rem;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #EA181B;
}

/* 详情 */
.to-delivered-detail {
    width: 100%;
    margin-top: 2rem;
}

.dispatching-datail {
    width: 100%;
    margin-top: 2rem;
}

.unusual-detail {
    width: 100%;
    margin-top: 2rem;
}

.detail-header {
    width: 100%;
    height: 5rem;
    font-size: 1.6rem;
    text-indent: 2rem;
    display: flex;
    align-items: center;
    color: white;
    background-color: #28A9E4;
}
</style>
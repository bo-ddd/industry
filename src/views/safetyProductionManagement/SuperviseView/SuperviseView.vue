<template>
    <div class="main">
        <dv-border-box-11 class="dv-box" title="安全生产监督">
            <el-row class="el-row" :gutter="20">
                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                    <dv-border-box-10 class="equipment">
                        <dv-decoration-11 class="title" style="width:200px;height:60px;">设备</dv-decoration-11>
                        <div class="container pd-10">
                            <div class="rate flex-col" v-for="(item, index) in rateList" :key="index">
                                <div class="subtitle">{{ item.title }}</div>
                                <div class="content-rate flex-row">
                                    <div class="icon-rate">
                                    </div>
                                    <div class="chart-rate font-white">
                                        <dv-decoration-9 style="width:90px;height:90px;">{{ item.rateValue + '%'
                                        }}</dv-decoration-9>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dv-border-box-10>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <dv-border-box-10 class="command">
                        <dv-decoration-11 class="title" style="width:200px;height:60px;">总指挥</dv-decoration-11>
                        <div class="container pd-10 flex-col">
                            <div class="map subtitle">厂区覆盖图</div>
                            <div class="overall-ratio flex-row_around">
                                <div class="ratio flex-col" v-for="(item, index) in ratioList" :key="index">
                                    <div class="key-ratio font-white">
                                        <dv-decoration-9 style="width:90px;height:90px;">{{ item.ratioValue + '%'
                                        }}</dv-decoration-9>
                                    </div>
                                    <div class="name-ratio subtitle">{{ item.name }}</div>
                                </div>
                            </div>
                            <div class="yield-trend">
                                <div class="title-trend subtitle">产量趋势</div>
                                <div class="chart-trend">

                                </div>
                            </div>
                        </div>
                    </dv-border-box-10>
                </el-col>
                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                    <dv-border-box-10 class="production">
                        <dv-decoration-11 class="title" style="width:200px;height:60px;">精益生产</dv-decoration-11>
                        <div class="container pd-10 flex-col">
                            <div class="fit">
                                <div class="title-fit subtitle">首次合格率FIT</div>
                                <div class="chart-fit"></div>
                            </div>
                            <div class="bts">
                                <div class="title-bts subtitle">计划制造完成率BTS</div>
                                <div class="chart-bts"></div>
                            </div>
                            <div class="oee">
                                <div class="title-oee subtitle">设备总效率OEE</div>
                                <div class="chart-oee"></div>
                            </div>
                            <div class="dtd">
                                <div class="title-dtd subtitle">物资转换时间DTD</div>
                                <div class="chart-dtd"></div>
                            </div>
                        </div>
                    </dv-border-box-10>
                </el-col>
            </el-row>
        </dv-border-box-11>

    </div>
</template>

<script>

export default {
    name: 'superviseView',
    data() {
        return {
            rateList: [
                {
                    id: 1,
                    title: '设备符合率',
                    rateValue: 66
                },
                {
                    id: 2,
                    title: '设备故障率',
                    rateValue: 10
                },
                {
                    id: 3,
                    title: '设备保养标准符合率',
                    rateValue: 30
                },
                {
                    id: 4,
                    title: '设备产能匹配率',
                    rateValue: 45
                }
            ],
            ratioList: [
                {
                    id: 1,
                    name: '产销比',
                    ratioValue: 50.1
                },
                {
                    id: 2,
                    name: '达产率',
                    ratioValue: 13.7
                },
                {
                    id: 3,
                    name: '生产计划完成率',
                    ratioValue: 60.1
                }
            ]
        }
    }

};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100vh;
    background-color: black;
}

.dv-box {
    width: 100%;
    padding: 20px 10px 20px 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.el-row {
    width: 100%;
    height: calc(100% - 80px);
    margin-top: 80px;

}

.el-col {
    border-radius: 4px;
    height: 100%;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.equipment .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
}

.flex-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.flex-row {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-row_around {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.overall-ratio {
    width: 100%;
}

.title {
    color: white;
    font-size: 18px;
    position: absolute;
    left: 50%;
    top: -28px;
    margin-left: -100px;
    transform: scale(0.8);
}

.pd-10 {
    padding: 36px;
    box-sizing: border-box;
}

.font-white {
    color: white;
    font-weight: bold;
    font-size: 16px;
}

.subtitle {
    font-size: 14px;
    font-weight: bold;
    background: linear-gradient(to right, #53e8f8, #2e77f8);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}



</style>
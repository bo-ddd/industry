<template>
    <dv-full-screen-container>
        <div class="main">
            <dv-border-box-11 class="dv-box" title="安全生产监督">
                <el-row class="el-row" :gutter="20">
                    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                        <dv-border-box-10 class="equipment">
                            <dv-decoration-11 class="title" style="width:20rem;height:6rem;">设备</dv-decoration-11>
                            <div class="container pd-10">
                                <div class="rate flex-col" v-for="(item, index) in rateList" :key="index">
                                    <div class="subtitle">{{ item.title }}</div>
                                    <div class="content-rate flex-row">
                                        <div class="icon-rate">
                                        </div>
                                        <div class="chart-rate font-white">
                                            <dv-decoration-9 style="width:13rem;height:13rem;">{{ item.rateValue + '%'
                                            }}</dv-decoration-9>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dv-border-box-10>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <dv-border-box-10 class="command">
                            <dv-decoration-11 class="title" style="width:20rem;height:6rem;">总指挥</dv-decoration-11>
                            <div class="container flex-col">
                                <div class="map scale-8">
                                    <mapView></mapView>
                                </div>
                                <!-- <div class="overall-ratio flex-row_around">
                                    <div class="ratio flex-col" v-for="(item, index) in ratioList" :key="index">
                                        <div class="key-ratio font-white">
                                            <dv-decoration-9 style="width:9rem;height:9rem;">{{ item.ratioValue + '%'
                                            }}</dv-decoration-9>
                                        </div>
                                        <div class="name-ratio subtitle">{{ item.name }}</div>
                                    </div>
                                </div> -->
                                <div class="yield-trend flex-col">
                                    <div class="title-trend subtitle">产量趋势</div>
                                    <div class="chart-trend">
                                        <yield-trend></yield-trend>
                                    </div>
                                </div>
                            </div>
                        </dv-border-box-10>
                    </el-col>
                    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                        <dv-border-box-10 class="production">
                            <dv-decoration-11 class="title" style="width:20rem;height:6rem;">精益生产</dv-decoration-11>
                            <div class="container pd-10 flex-col">
                                <div class="fit flex-row scale-8">
                                    <div class="title-fit subtitle col-mode">首次合格率FIT</div>
                                    <div class="chart-fit">
                                        <fitView></fitView>
                                    </div>
                                </div>
                                <div class="bts flex-row scale-8">
                                    <div class="title-bts subtitle col-mode">计划制造完成率BTS</div>
                                    <div class="chart-bts">
                                        <btsView></btsView>
                                    </div>
                                </div>
                                <div class="oee flex-row scale-8">
                                    <div class="title-oee subtitle col-mode">设备总效率OEE</div>
                                    <div class="chart-oee">
                                        <oeeView></oeeView>
                                    </div>
                                </div>
                                <div class="dtd flex-row scale-8">
                                    <div class="title-dtd subtitle col-mode">物资转换时间DTD</div>
                                    <div class="chart-dtd">
                                        <dtdView></dtdView>
                                    </div>
                                </div>
                            </div>
                        </dv-border-box-10>
                    </el-col>
                </el-row>
            </dv-border-box-11>
        </div>
    </dv-full-screen-container>
</template>

<script>
import yieldTrend from './YieldTrend.vue';
import dtdView from './DtdView.vue';
import fitView from './FitView.vue';
import oeeView from './OeeView.vue';
import btsView from './BtsView.vue';
import mapView from './MapView.vue';

export default {
    name: 'superviseView',
    components: {
        yieldTrend,
        fitView,
        btsView,
        oeeView,
        dtdView,
        mapView
    },
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
    padding: 2rem 1rem 2rem 3rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.el-row {
    width: 100%;
    height: calc(100% - 8rem);
    margin-top: 8rem;

}

.el-col {
    border-radius: 0.4rem;
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
    border-radius: 0.4rem;
    min-height: 3.6rem;
}

.equipment .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
}

.flex-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.flex-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
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
    font-size: 2rem;
    position: absolute;
    left: 50%;
    top: -2.8rem;
    margin-left: -10rem;
    transform: scale(0.8);
}

.pd-10 {
    padding: 3.6rem;
    box-sizing: border-box;
}

.font-white {
    color: white;
    font-weight: bold;
    font-size: 1.6rem;
}

.subtitle {
    font-size: 1.6rem;
    font-weight: bold;
    background: linear-gradient(to right, #53e8f8, #2e77f8);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.scale-8 {
    transform: scale(0.8);
}

.yield-trend {
    width: 40rem;
    position: relative;
}

.yield-trend .title-trend {
    position: absolute;
    top: 4rem;
}

.dtd {
    position: relative;
}

.production .container {
    position: relative;
}

.fit {
    position: absolute;
    top: -0.5rem;
}

.bts {
    position: absolute;
    top: 18vh;
}

.oee {
    position: absolute;
    top: 40vh;
}

.dtd {
    position: absolute;
    top: 58vh;
}
.col-mode{
    width:4rem;
    font-size: 1.8rem;
    text-align: center;
}
</style>
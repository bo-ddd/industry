<template>
    <div class="safety-box">
        <span class="title">安全监管</span>
        <dv-decoration-5 style="height:40px;" />
        <div class="header">
            <div class="header-item" v-for="item in headerData" :key="item.id">
                <div class="item-title">{{item.title }}</div>
                <div class="co-blue">{{item.num}}</div>
            </div>
        </div>
        <div class="safety mat-20">
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">受攻击省份排名</div>
                <rankingView></rankingView>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <dv-flyline-chart :config="config" style="width:100%;height:100%;" class="map" />
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">已发现漏洞类型排名</div>
                <dv-capsule-chart :config="leakConfig" class="leak"/>

            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">安全危险等级</div>
                <div class="hazardLevel" ref="hazardLevel"></div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">实时攻防详情</div>
                <dv-scroll-board :config="detailConfig" style="width:400px;" class="detail"/>
            </dv-border-box-8>

        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import rankingView from "../SafetyProtection/RankingView.vue";
export default {
    components: {
        rankingView
    },
    data() {
        return {
            headerData:[
               {
               id:1,
               title:'总攻击数',
               num:'350,425,000'
               },
               {
               id:1,
               title:'扫描发现总漏洞',
               num:'3500'
               },
               {
               id:1,
               title:'防火墙拦截数',
               num:'350,78'
               },
               {
               id:1,
               title:'保护资产个数',
               num:'350,42'
               },
            ],
            config: {
                centerPoint: [0.48, 0.35],
                points: [
                    [0.52, 0.23],
                    [0.43, 0.29],
                    [0.59, 0.35],
                    [0.53, 0.47],
                    [0.45, 0.54],
                    [0.36, 0.38],
                    [0.62, 0.55],
                    [0.56, 0.56],
                    [0.37, 0.66],
                    [0.55, 0.81],
                    [0.55, 0.67],
                    [0.37, 0.29],
                    [0.20, 0.36],
                    [0.76, 0.41],
                    [0.59, 0.18],
                    [0.68, 0.17],
                    [0.59, 0.10]
                ],
                bgImgUrl: '/img/flylineChart/map.jpg'
            },
            leakConfig: {
                data: [
                    {
                        name: 'XSS跨站脚本攻击',
                        value: 167
                    },
                    {
                        name: 'CSRF跨站请求伪造',
                        value: 123
                    },
                    {
                        name: 'SQL注入',
                        value: 98
                    },
                    {
                        name: '服务器请求伪造SSRF',
                        value: 75
                    },
                    {
                        name: '命令执行漏洞',
                        value: 66
                    },
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '单位'
            },
            ///实时攻防详情
            detailConfig: {
                header: ['攻击时间', 'IP地', '攻击流量'],
                data: [
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                  
                ]
            },


        }

    },
    methods: {
        //饼
        hazardLevel() {
            var chartDom = this.$refs.hazardLevel;
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: '低风险' },
                            { value: 735, name: '一般风险' },
                            { value: 580, name: '较大风险' },
                            { value: 484, name: '重大风险' },
                        ]
                    }
                ]
            };

            option && myChart.setOption(option);

        },
        //柱状图

    },
    mounted() {
        this.hazardLevel()
    }
}
</script>
<style scoped>
.map{
    background: url('../../../assets/image/posationMap.png')no-repeat;
}
.leak{
    width: 46rem;
    height: 32rem;
    margin: 0 auto;
}
.detail{
    height: 23rem;
}
.mat-20 {
    margin-top: 2rem;
}

.co-blue {
    color: rgb(110, 177, 240);
    font-size: 2.5rem;
}

.hazardLevel {
    width: 60rem;
    height: 30rem;
}

.safety-box {
    color: #fff;
    height: 100vh;
    background-color: black;
    box-sizing: border-box;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.title-t {
    font-size: 1.8rem;
}

.header-item {
    width: 30rem;
    height: 7rem;
    border: 2px solid pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.item-title {
    font-size: 2rem;
}

.safety {
    height: 80vh !important;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
        "left-aside_1 left-aside_1 center center center right-aside_1"
        "left-aside_2 left-aside_2 center center center right-aside_2"
        "left-aside_2 left-aside_2 center center center right-aside_2"
        /* "left-aside_3 center center right-aside_3" */
}

.item {
    padding: 1rem;
    box-sizing: border-box;
}

.item:nth-of-type(1) {
    grid-area: left-aside_1;
}

.item:nth-of-type(2) {
    grid-area: center;
}

.item:nth-of-type(3) {
    grid-area: right-aside_1;
}

.item:nth-of-type(4) {
    grid-area: left-aside_2;
}

.item:nth-of-type(5) {
    grid-area: right-aside_2;
}

/* .item:nth-of-type(6) {
    grid-area: right-aside_2;
} */

/* 
.item:nth-of-type(7) {
    grid-area: left-aside_3;
}

.item:nth-of-type(8) {
    grid-area: right-aside_2;
} */
</style>
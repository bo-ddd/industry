<!-- 风险分级管控 -->
<template>
    <div class="risk-box">
        <div class="risk-head">
            <div class="title">安全隐患排查</div>
            <dv-decoration-5 style="height:40px;" />
        </div>

        <div class="risk">
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">风险数量比例</div>
                <dv-active-ring-chart :config="cakeConfig" style="width:200px;height:200px" class="risk-num" />
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">管控任务执行情况</div>
                <div class="risk-points">
                    <div>
                        <span class="fs-35">645</span>
                        <div class="co-red">风险点数</div>
                    </div>
                    <div>
                        <span class="fs-35">1212</span>
                        <div class="co-gre">管控任务数</div>
                    </div>
                </div>
                <div class="task">
                    <div class="echarts" ref="echart"></div>


                    <div class="progress">
                        <div>
                            <el-progress type="circle" :percentage="25"></el-progress>
                            <div>管控覆盖率</div>
                        </div>
                        <div>
                            <el-progress type="circle" :percentage="50"></el-progress>
                            <div>风险失控率</div>
                        </div>
                        <div>
                            <el-progress type="circle" :percentage="80"></el-progress>
                            <div>按期执行率</div>
                        </div>

                    </div>
                </div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">最新风险计划</div>
                <div>1、进一步理顺税收风险管理工作流程，建立健全风险管理横向协作机制</div>
                <div>2、加强风险模型建设和应用工作，提高风险模型指向的准确率</div>
                <div>3、强化风险应对环节监督，加大风险应对复查机制落实力度，提高风险应对质量</div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">管控类型分布</div>
                <div class="distribute mat-20" ref="distribute"></div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">安全隐患列举</div>
                <div class="danger colo-ye" v-for="item in pitfallData" :key="item.id">
                    <div>{{ item.title }}</div>
                </div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">分级管控比</div>
                <div class="grade mat-20" ref="grade"></div>

            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">风险管控任务周报</div>
                <dv-capsule-chart :config="config" style="height:200px" />
            </dv-border-box-8>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name: 'riskControl',
    data() {
        return {
            config: {
                data: [
                    {
                        name: '周口',
                        value: 55
                    },
                    {
                        name: '南阳',
                        value: 120
                    },
                    {
                        name: '西峡',
                        value: 78
                    },
                    {
                        name: '驻马店',
                        value: 66
                    },
                    {
                        name: '新乡',
                        value: 80
                    }
                ]

            },
            config: {
                data: [
                    {
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 67
                    },
                    {
                        name: '漯河',
                        value: 123
                    },
                    {
                        name: '郑州',
                        value: 55
                    },
                    {
                        name: '西峡',
                        value: 98
                    },
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '单位'
            },
            cakeConfig: {
                data: [
                    {
                        name: '临汾',
                        value: 55
                    },
                    {
                        name: '霍州',
                        value: 120
                    },
                    {
                        name: '运城',
                        value: 78
                    },
                    {
                        name: '大同',
                        value: 66
                    },
                    {
                        name: '侯马',
                        value: 80
                    }
                ],
                lineWidth: 10
            },
            pitfallData: [
                {
                    id: 1,
                    title: '1、用手代替工具操作'
                },
                {
                    id: 2,
                    title: '2、冒险进入危险场所'
                },
                {
                    id: 3,
                    title: '3、有干扰或者分散注意力的行为'
                },
                {
                    id: 4,
                    title: '4、对易燃易爆危险物品的接触和处理错误'
                },
                {
                    id: 5,
                    title: '5、生产设施工具有缺陷'
                },
            ]

        }
    },
    methods: {
        //柱状图
        orderTrend() {
            var chartDom = this.$refs.echart;
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                legend: {
                    textStyle: {
                        color: '#fff'
                    },
                },
                tooltip: {},
                dataset: {
                    dimensions: ['product', '2015', '2016', '2017'],
                    source: [
                        { product: '公司', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
                        { product: '部门', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
                        { product: '小组', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
                    ]
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        show: true,
                        color: '#ffffff',
                        fontSize: 16
                    }
                },
                yAxis: {
                    axisLabel: {
                        show: true,
                        color: '#ffffff',
                        fontSize: 16
                    }
                },
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };

            option && myChart.setOption(option);

        },
        //饼状
        typeDistribute() {
            var chartDom = this.$refs.distribute;
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                title: {


                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    textStyle: {
                        color: '#fff'
                    },
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: '石油化工' },
                            { value: 735, name: '基础化工' },
                            { value: 580, name: '化学化纤' },
                            { value: 484, name: '塑料化工' },
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            option && myChart.setOption(option);

        },
        //分级管控
        grade() {
            var chartDom = this.$refs.grade;
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    },
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['30%', '70%'],
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
                            { value: 1048, name: '公司' },
                            { value: 735, name: '部门' },
                            { value: 580, name: '小组' },
                            // { value: 484, name: '' },
                            // { value: 300, name: '' }
                        ]
                    }
                ]
            };

            option && myChart.setOption(option);

        },

    },
    mounted() {
        this.orderTrend()
        this.typeDistribute()
        this.grade()
    }
}
</script>
<style scoped>
.risk-box {
    min-width: 1100px;
    height: 100vh !important;
    background-color: black;
    color: #fff;
    box-sizing: border-box;
}
.task{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.danger {
    display: flex;
    flex-direction: column;
    gap: 2rem 0;
}

.risk-head {
    height: 10vh;
}

.risk-head .title {
    position: relative;
    top: 50%;
    transform: translateY(-70%);
}

.risk-num {
    margin: 0 auto;
}

.progress {
    display: flex;
    justify-content: space-around;
}

.progress div {
    display: flex;
    gap: 1rem 0;
    flex-direction: column;
    align-items: center;
}

.danger {
    color: rgb(241, 231, 140);
}

.mat-20 {
    margin-top: 2rem;
}

.mat-40 {
    margin-top: 4rem;
}

.echarts {
    width: 80%;
    height: 40rem;
    margin: 0 auto;
}

.distribute {
    width: 50rem;
    height: 14rem;
    margin: 0 auto;
    margin-top: 1rem;
}

.grade {
    width: 30rem;
    height: 30rem;
    margin: 0 auto;
}

.fs-35 {
    font-size: 3.5rem;
}

.co-gre {
    color: rgb(36, 201, 36);
}

.co-red {
    color: red;
}

.title-t {
    padding: .5rem;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    box-sizing: border-box;
}



.risk {
    height: 90vh !important;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 2fr 2fr 2fr;
    grid-template-areas:
        "left-aside_1 center center right-aside_1"
        "left-aside_2 center center right-aside_2"
        "left-aside_2 center center right-aside_2"
        "left-aside_3 center center right-aside_3"
}

.item {
    padding: 0 1rem;
    font-size: 2rem;
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

.item:nth-of-type(6) {
    grid-area: right-aside_3;
}

.item:nth-of-type(7) {
    grid-area: left-aside_3;
}

.item:nth-of-type(8) {
    grid-area: right-aside_2;
}

.risk-points {
    display: flex;
    justify-content: space-around;
}
</style>
<template>
    <div>
        <div class="header">
            企业能源消耗异常识别系统
        </div>

        <div class="main-top">
            <div>1</div>
            <div>2</div>
            <div class="frequency-box" ref="frequency"></div>
        </div>


        <div class="main-bottom">
            <div class="monitor" ref="monitor"></div>
            <div class="status" ref="status"></div>
            <div class="unusual">
                <el-table :data="tableData" height="300" border style="width: 100%">
                    <el-table-column prop="date" label="日期" width="120">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="100">
                    </el-table-column>
                    <el-table-column prop="address" label="地址" width="200">
                    </el-table-column>
                </el-table>
            </div>
        </div>



    </div>
</template>
  
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    mounted() {
        this.initFrequency();
        this.initMonitor();
        this.initStatus();
    },
    methods: {
        initFrequency() {
            let chartDom = this.$refs.frequency;
            let myChart = echarts.init(chartDom);
            let option;
            const data = [];
            for (let i = 0; i < 5; ++i) {
                data.push(Math.round(Math.random() * 200));
            }
            option = {
                xAxis: {
                    max: 'dataMax'
                },
                yAxis: {
                    type: 'category',
                    data: ['A', 'B', 'C', 'D', 'E'],
                    inverse: true,
                    animationDuration: 300,
                    animationDurationUpdate: 300,
                    max: 2 // only the largest 3 bars will be displayed
                },
                series: [
                    {
                        realtimeSort: true,
                        name: 'X',
                        type: 'bar',
                        data: data,
                        label: {
                            show: true,
                            position: 'right',
                            valueAnimation: true
                        }
                    }
                ],
                legend: {
                    show: true
                },
                animationDuration: 0,
                animationDurationUpdate: 3000,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear'
            };
            function run() {
                for (var i = 0; i < data.length; ++i) {
                    if (Math.random() > 0.9) {
                        data[i] += Math.round(Math.random() * 2000);
                    } else {
                        data[i] += Math.round(Math.random() * 200);
                    }
                }
                myChart.setOption({
                    series: [
                        {
                            type: 'bar',
                            data
                        }
                    ]
                });
            }
            setTimeout(function () {
                run();
            }, 0);
            setInterval(function () {
                run();
            }, 3000);

            option && myChart.setOption(option);
        },
        initMonitor() {
            let app = {};
            let chartDom = this.$refs.monitor;
            let myChart = echarts.init(chartDom);
            let option;

            const categories = (function () {
                let now = new Date();
                let res = [];
                let len = 10;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                    now = new Date(+now - 2000);
                }
                return res;
            })();
            const categories2 = (function () {
                let res = [];
                let len = 10;
                while (len--) {
                    res.push(10 - len - 1);
                }
                return res;
            })();
            const data = (function () {
                let res = [];
                let len = 10;
                while (len--) {
                    res.push(Math.round(Math.random() * 1000));
                }
                return res;
            })();
            const data2 = (function () {
                let res = [];
                let len = 0;
                while (len < 10) {
                    res.push(+(Math.random() * 10 + 5).toFixed(1));
                    len++;
                }
                return res;
            })();
            option = {
                title: {
                    text: '检查统计'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
                },
                legend: {},
                toolbox: {
                    show: true,
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataZoom: {
                    show: false,
                    start: 0,
                    end: 100
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: categories
                    },
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: categories2
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        name: 'Price',
                        max: 30,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    },
                    {
                        type: 'value',
                        scale: true,
                        name: 'Order',
                        max: 1200,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    }
                ],
                series: [
                    {
                        name: 'Dynamic Bar',
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        data: data
                    },
                    {
                        name: 'Dynamic Line',
                        type: 'line',
                        data: data2
                    }
                ]
            };
            app.count = 11;
            setInterval(function () {
                let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
                data.shift();
                data.push(Math.round(Math.random() * 1000));
                data2.shift();
                data2.push(+(Math.random() * 10 + 5).toFixed(1));
                categories.shift();
                categories.push(axisData);
                categories2.shift();
                categories2.push(app.count++);
                myChart.setOption({
                    xAxis: [
                        {
                            data: categories
                        },
                        {
                            data: categories2
                        }
                    ],
                    series: [
                        {
                            data: data
                        },
                        {
                            data: data2
                        }
                    ]
                });
            }, 2100);

            option && myChart.setOption(option);
        },
        initStatus() {
            var chartDom = this.$refs.status;
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                title: {

                    subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
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
        }
    }
}

</script>
  
<style lang="scss">
.main-bottom {
    display: flex;
    justify-content: space-between;
    gap: 0 3rem;
}

.el-table .el-table__cell {
    padding: 0;
}

.table {
    width: 29%;
    height: 45rem;
}

.header {
    height: 6rem;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-left: 2rem;
}

.frequency-box {
    width: 25%;
}

.monitor {
    width: 30%;
    height: 42vh;
}

.status {
    width: 30%;
    height: 42vh;
}

.main-top {
    display: flex;
    justify-content: space-between;
    height: 50vh;
}
</style>
  
<template>
    <div id="lineChart"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    methods: {
        line() {
            let chartDom = document.getElementById('lineChart');
            let myChart = echarts.init(chartDom);
            let option
            let base = +new Date(2023, 1, 1);
            let oneDay = 24 * 3600 * 1000;
            let date = [];
            let data = [Math.random() * 300];
            for (let i = 1; i < 20000; i++) {
                var now = new Date((base += oneDay));
                date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
            }
            option = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: '安全走势图'
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [
                    {
                        type: 'inside',
                        start: 0,
                        end: 10
                    },
                    {
                        start: 0,
                        end: 10
                    }
                ],
                series: [
                    {
                        name: 'Fake Data',
                        type: 'line',
                        symbol: 'none',
                        sampling: 'lttb',
                        itemStyle: {
                            color: 'rgb(255, 70, 131)'
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 158, 68)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131)'
                                }
                            ])
                        },
                        data: data
                    }
                ]
            };
            option && myChart.setOption(option);
        }
    },
    mounted() {
        this.line()
    }
}
</script>
<style scoped>
#lineChart {
    width: 58rem;
    height: 34rem;
    margin: 8rem auto 2rem;
}
</style>
<template>
    <div id="rule"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    methods: {
        init() {
            var chartDom = document.getElementById('rule');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                xAxis: {
                    type: 'category',
                    data: ['脱岗', '睡岗', '离岗', '堆煤', '异物', '载人'],
                    axisLabel: {
                        color: '#fff',
                        fontWeight:700
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        color: '#fff',
                        fontWeight:700
                    },
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110],
                        type: 'line',
                        symbol: 'triangle',
                        symbolSize: 20,
                        lineStyle: {
                            color: '#5470C6',
                            width: 4,
                            type: 'dashed'
                        },
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: '#EE6666',
                            color: 'yellow'
                        }
                    }
                ]
            };

            option && myChart.setOption(option);

        }
    },
    mounted() {
        this.init()
    }
}
</script>

<style scoped>
#rule {
    width: 40vw;
    height: 37vh;
}
</style>
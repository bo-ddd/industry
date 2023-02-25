<template>
    <div id="trend"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    methods: {
        init() {
            var chartDom = document.getElementById('trend');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                xAxis: {
                    type: 'category',
                    data: ['岗位预警', '区域预警', '皮带预警', '规范预警'],
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
                        data: [120, 252, 301, 534],
                        type: 'line',
                        smooth: true
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
#trend {
    width: 26vw;
    height: 40vh;
}
</style>
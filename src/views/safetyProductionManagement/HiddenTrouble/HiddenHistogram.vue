<template>
    <div id="main"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    methods: {
        init() {
            let chartDom = document.getElementById('main');
            let myChart = echarts.init(chartDom);
            var option;

            option = {
                xAxis: {
                    type: 'category',
                    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
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
#main {
    width: 50rem;
    height: 34rem;
    /* background-color: white; */
    margin: 2rem auto 2rem;
}
</style>
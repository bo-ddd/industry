<template>
    <div id="bts"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    methods: {
        init() {
            var chartDom = document.getElementById('bts');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Step Start', 'Step Middle', 'Step End']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Step Start',
                        type: 'line',
                        step: 'start',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Step Middle',
                        type: 'line',
                        step: 'middle',
                        data: [220, 282, 201, 234, 290, 430, 410]
                    },
                    {
                        name: 'Step End',
                        type: 'line',
                        step: 'end',
                        data: [450, 432, 401, 454, 590, 530, 510]
                    }
                ]
            };

            option && myChart.setOption(option);

        }
    },
    mounted() {
        this.init();
    }

}

</script>

<style scoped>
#bts {
    width:20vw;
    height:30vh;
}
</style>
<template>
    <div id="pie-chart"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {

    methods: {
        init() {
            var chartDom = document.getElementById('pie-chart');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                title: {
                    text: 'Referer of a Website',
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
        },
    },

    mounted() {
        this.init()
    }
}
</script>
<style>
#pie-chart {
    min-width: 70rem;
    height: 35rem;
}
</style>
<template>
 <div id="ranking"></div>
</template>

<script>
import * as echarts from 'echarts';
export default{
    methods:{
        ranking() {
            var chartDom = document.getElementById('ranking');
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
                    source: [
                        ['product', '2015', '2016', '2017'],
                        ['中国', 43.3, 85.8, 93.7],
                        ['英国', 83.1, 73.4, 55.1],
                        ['美国', 86.4, 65.2, 82.5],
                    ]
                },
                xAxis: { type: 'category' },
                yAxis: {},
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };

            option && myChart.setOption(option);

        }
    },
    mounted() {
        this.ranking();
    }
}
</script>
<style scoped>
#ranking{
    width: 55rem;
    height: 40rem;
    margin: 0 auto;
}

</style>
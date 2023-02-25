<template>
    <div>
        <div id="main"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    mounted() {
        this.abc()
    },
    methods: {
        abc() {
            var chartDom = document.getElementById('main');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                tooltip: {
                    trigger: 'item'
                },
                //饼图中各模块的颜色
                color: ['#ff0000', '#001eff', '#fff000', '#ff7800','#b7008e'],
                series: [
                    {
                        // name: 'Access From',
                        type: 'pie',
                        radius: '40%',
                        data: [
                            { value: 1210, name: '红色风险点' },
                            { value: 900, name: '蓝色风险点' },
                            { value: 780, name: '黄色风险点' },
                            { value: 556, name: '橙色风险点' },
                            { value: 235, name: '紫色风险点' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(255, 255, 255, 1)',
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

<style scoped>
#main {
    width: 100%;
    height: 100%;
}
</style>
<template>
    <div class="echarts" ref="echarts"></div>
</template>

<script>
import * as echarts from 'echarts';
export default{
    data(){
        return{

        }
    },
    created(){

    },
    methods:{
        info(){
            var chartDom = this.$refs.echarts;
            var myChart = echarts.init(chartDom);
            var option;

            option = {
            backgroundColor: '#2c343c',
            title: {
                text: '购买用户实例图',
                left: 'center',
                top: 20,
                textStyle: {
                color: '#ccc'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                colorLightness: [0, 1]
                }
            },
            series: [
                {
                name: '示例',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: [
                    { value: 335, name: '今日新增' },
                    { value: 310, name: '昨日新增' },
                    { value: 274, name: '本月新增' },
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                labelLine: {
                    lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
                }
            ]
            };

            option && myChart.setOption(option);
        }
    },
    mounted(){
        this.info();
    }
}
</script>

<style scoped>
.echarts{
    width: 50rem !important;
    height: 30rem !important
    ;
}
</style>
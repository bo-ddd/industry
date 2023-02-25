<template>
    <div class="echarts" ref="echartSell"></div>
</template>

<script>
import * as echarts from 'echarts';
export default{
    props:['e','type'],
    data(){
        return{

        }
    },
    created(){
        
    },
    methods:{
        orderInfo(){
            var chartDom = this.$refs.echartSell;
            var myChart = echarts.init(chartDom);
            var option;
            option = {
            title: {
                text: '销售额'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['销售总额', '线上销售额', '线下销售额']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:this.e==false?["02-01","02-02","02-03","02-04","02-05","02-06","02-07","02-08","02-09","02-10","02-11" ,"02-12","02-13","02-14"
                ,"02-15","02-16","02-17","02-18","02-19","02-20","02-21","02-22","02-23","02-24"
                ]: ["周六","周日","周一","周二","周三","周四","周五"]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                name: '销售总额',
                type: 'line',
                stack: 'Total',
                data: this.e==false?[34,435,1212,34,634,34,346,45,45,4,5,48,189,14,8,4,,1,81,146,18,48,,8,504,122,71,451]:[100, 532, 1, 334, 190, 230, 20],
                itemStyle: {
                    normal: {
                        color: '#a80000', //改变折线点的颜色
                        lineStyle: {
                            color: '#a80000' //改变折线颜色
                        }
                    }
			    },
                },
                {
                name: '线上销售额',
                type: 'line',
                stack: 'Total',
                data: this.e==false?[234,56,23,634,63,452,5,14,14,151,5,187,1,68,18,71,1,781,781,64,8,26,58,2,841,6,45,99]:[50, 200, -1, 154, 290, 530, 410],
                itemStyle:{
                    normal:{
                        color:'#00a2e0',
                        lineStyle:{
                            color:'#00a2e0'
                        }
                    }
                }
                },
                {
                name: '线下销售额',
                type: 'line',
                stack: 'Total',
                data: this.e==false?[144,435,543,1,-34,34,4,18,187,41,84,848,46,498,1125,18,1,518,818,1,18,5,59,41,125,51]:[320, 262, 601, 893, 30, 30, 320],
                itemStyle:{
                    normal:{
                        color:'#3abe9e',
                        lineStyle:{
                            color:'#3abe9e'
                        }
                    }
                }
                },
            ]
            }; 

            option && myChart.setOption(option);

        },
        sellTrend(){
            var chartDom = this.$refs.echartSell;
            var myChart = echarts.init(chartDom);
            var option;

            option = {
            title: {
                text: '订单数'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['订单总数', '线下订单数', '线上订单数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.e==false?["02-01","02-02","02-03","02-04","02-05","02-06","02-07","02-08","02-09","02-10","02-11" ,"02-12","02-13","02-14"
                ,"02-15","02-16","02-17","02-18","02-19","02-20","02-21","02-22","02-23","02-24"
                ]
                :
                ["周六","周日","周一","周二","周三","周四","周五"]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                name: '订单总数',
                type: 'line',
                stack: 'Total',
                data: this.e==false?[320, 132, 401, 234, 690, 130, 10,34,325,12,13,345,423,64,345,62,255,222,534,7,224,5] : [120, 532, 101, 134, 90, 230, 210] 
                },
                {
                name: '线下订单数',
                type: 'line',
                stack: 'Total',
                data: this.e==false?[234,234,6546,665,7,744,4,52,42,324,235,42,56,265,62,52,62,24,523,543,52,252,24,5,21,3]: [150, -10, 201, 154, 190, 330, 410]
                },
                {
                name: '线上订单数',
                type: 'line',
                stack: 'Total',
                data: this.e==false?[343,654,77,878,98,35,7,324,423,3,4,444,4,524,52,6,44,6,24,4,426,64,532,543,24,24,78] :[320, 232, 301, 334, 390, 330, 320]
                },
            ]
            };  
            option && myChart.setOption(option);
        }
    },
    mounted(){
        if (this.type == 1) {
            this.sellTrend();
        }else{
            this.orderInfo();
        }
    }
}
</script>

<style scoped>
.echarts{
    width: 150rem;
    height: 50rem;
}
</style>
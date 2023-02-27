<template>
    <div>
        <div class="status" ref="status"></div>
    </div>
   </template>
   
   
   <script>
   import * as echarts from 'echarts';
   export default {
   
       mounted() {
        this.initStatus();
       },
       methods: {
        initStatus() {
            var chartDom = this.$refs.status;
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    textStyle: {
                        color: "#fff"
                    },
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 580, name: '故障' },
                            { value: 484, name: '正常' },
                            { value: 200, name: '损坏' },
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
        }
       }
   }
   
   </script>
   
   
   <style lang="scss" scoped>
   .status {
       width: 60rem;
       height: 100%;
   }
   
   
   </style>
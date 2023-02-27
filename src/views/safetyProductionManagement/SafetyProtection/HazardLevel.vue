<template>
    <div id="hazard"></div>
   </template>
   
   <script>
   import * as echarts from 'echarts';
   export default{
       methods:{
        hazardLevel() {
            var chartDom = document.getElementById('hazard');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                tooltip: {
                    trigger: 'item'
                },

                legend: {
                    top: '5%',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    },
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        textStyle: '#fff',
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2,
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: '低风险' },
                            { value: 735, name: '一般风险' },
                            { value: 580, name: '较大风险' },
                            { value: 484, name: '重大风险' },
                        ]
                    }
                ]
            };

            option && myChart.setOption(option);

        }
       } ,
       
       mounted() {
           this.hazardLevel();
       }
   }
   </script>
   <style scoped>
  #hazard {
    width: 60rem;
    height: 30rem;
}
   
   </style>
<template>
    <div id="type"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    methods: {
        init() {
            var chartDom = document.getElementById('type');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                legend: {
                    show: false
                },
                tooltip: {
                    show: true,
                    trigger: 'item'
                },
                series: [
                    {
                        name: '占比',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,

                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2,
                            normal: {
                                label: {
                                    textStyle: {
                                        color: 'white',
                                        fontWeight: 'bolder',
                                        fontSize: 16
                                    }
                                },
                                labelLine: {
                                    lineStyle: {
                                        color: 'white'
                                    }
                                }
                            }
                        },
                        label: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                color: 'white',
                                fontWeight: 'bolder'
                            }
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold',
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: '岗位预警' },
                            { value: 735, name: '区域预警' },
                            { value: 580, name: '皮带预警' },
                            { value: 484, name: '规范预警' },
                            { value: 300, name: '其他' }
                        ]
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
#type {
    width: 30vw;
    height: 40vh;
}
</style>
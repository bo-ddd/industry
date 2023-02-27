<template>
    <div id="early"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    methods: {
        init() {
            var chartDom = document.getElementById('early');
            var myChart = echarts.init(chartDom);
            var option;

            // prettier-ignore
            let dataAxis = ['中煤集团', '文信时空', '中电运行', '陕煤集团', '石化集团'];
            // prettier-ignore
            let data = [220, 182, 191, 234, 290];
            let yMax = 500;
            let dataShadow = [];
            for (let i = 0; i < data.length; i++) {
                dataShadow.push(yMax);
            }
            option = {
                title: {
                    text: '企业预警统计',
                    textStyle: {
                        color: 'white',
                        fontWeight: 400
                    }
                },
                xAxis: {
                    data: dataAxis,
                    axisLabel: {
                        inside: false,
                        color: '#fff',
                        fontWeight:700
                    },
                    axisTick: {
                        show: true
                    },
                    axisLine: {
                        show: true
                    },
                    z: 10
                },
                yAxis: {
                    axisLine: {
                        show: true
                    },
                    axisTick: {
                        show: true
                    },
                    axisLabel: {
                        color: '#fff',
                        fontWeight:700
                    }
                },
                dataZoom: [
                    {
                        type: 'inside'
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#83bff6' },
                                { offset: 0.5, color: '#188df0' },
                                { offset: 1, color: '#188df0' }
                            ])
                        },
                        emphasis: {
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: '#2378f7' },
                                    { offset: 0.7, color: '#2378f7' },
                                    { offset: 1, color: '#83bff6' }
                                ])
                            }
                        },
                        data: data
                    }
                ]
            };
            // Enable data zoom when user click bar.
            const zoomSize = 6;
            myChart.on('click', function (params) {
                console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                myChart.dispatchAction({
                    type: 'dataZoom',
                    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                    endValue:
                        dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                });
            });

            option && myChart.setOption(option);

        }
    },
    mounted() {
        this.init()
    }
}
</script>

<style scoped>
#early {
    width: 40vw;
    height: 37vh;
}
</style>
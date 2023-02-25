<template>
    <div class="main">
        <div class="header">
            <dv-decoration-5 style="width:30rem;height:4rem;" />企业能源消耗异常识别系统 <dv-decoration-5
                style="width:30rem;height:4rem;" />
        </div>
        <dv-border-box-1>
            <div class="main-top">
                <div class="monthly-statistics">

                    <dv-water-level-pond :config="config3" style="width:15rem;height:22rem" />
                    <dv-water-level-pond :config="config4" style="width:15rem;height:22rem" />
                    <dv-water-level-pond :config="config" style="width:15rem;height:22rem" />
                </div>

                <div><dv-capsule-chart :config="config1" style="width:40rem;height:30rem" /></div>

                <div class="frequency-box" ref="frequency"></div>
            </div>
        </dv-border-box-1>



        <dv-border-box-8>
            <div class="main-bottom">
                <div class="monitor" ref="monitor"></div>
                <div class="status" ref="status"></div>
                <div class="unusual">
                    <dv-scroll-board :config="config" style="width:50rem;height:40rem" />
                </div>
            </div>
        </dv-border-box-8>





    </div>
</template>
  
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            config: {
                data: [
                    ['行1列1', '行1列2', '行1列3'],
                    ['行2列1', '行2列2', '行2列3'],
                    ['行3列1', '行3列2', '行3列3'],
                    ['行4列1', '行4列2', '行4列3'],
                    ['行5列1', '行5列2', '行5列3'],
                    ['行6列1', '行6列2', '行6列3'],
                    ['行7列1', '行7列2', '行7列3'],
                    ['行8列1', '行8列2', '行8列3'],
                    ['行9列1', '行9列2', '行9列3'],
                    ['行10列1', '行10列2', '行10列3']
                ]
            },
            config1: {
                data: [
                    {
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 67
                    },
                    {
                        name: '漯河',
                        value: 123
                    },
                    {
                        name: '郑州',
                        value: 55
                    },
                    {
                        name: '西峡',
                        value: 98
                    }
                ]
            },
            config3: {
                data: [66, 45],
                shape: 'roundRect'
            },
            config4: {
                data: [20, 45],
                shape: 'roundRect'
            }
        }
    },
    mounted() {
        this.initFrequency();
        this.initMonitor();
        this.initStatus();
    },
    methods: {
        initFrequency() {
            let chartDom = this.$refs.frequency;
            let myChart = echarts.init(chartDom);
            let option;
            const dataBJ = [
                [55, 9, 56, 0.46, 18, 6, 1],
                [25, 11, 21, 0.65, 34, 9, 2],
                [56, 7, 63, 0.3, 14, 5, 3],
                [33, 7, 29, 0.33, 16, 6, 4],
                [42, 24, 44, 0.76, 40, 16, 5],
                [82, 58, 90, 1.77, 68, 33, 6],
                [74, 49, 77, 1.46, 48, 27, 7],
                [78, 55, 80, 1.29, 59, 29, 8],
                [267, 216, 280, 4.8, 108, 64, 9],
                [185, 127, 216, 2.52, 61, 27, 10],
                [39, 19, 38, 0.57, 31, 15, 11],
                [41, 11, 40, 0.43, 21, 7, 12],
                [64, 38, 74, 1.04, 46, 22, 13],
                [108, 79, 120, 1.7, 75, 41, 14],
                [108, 63, 116, 1.48, 44, 26, 15],
                [33, 6, 29, 0.34, 13, 5, 16],
                [94, 66, 110, 1.54, 62, 31, 17],
                [186, 142, 192, 3.88, 93, 79, 18],
                [57, 31, 54, 0.96, 32, 14, 19],
                [22, 8, 17, 0.48, 23, 10, 20],
                [39, 15, 36, 0.61, 29, 13, 21],
                [94, 69, 114, 2.08, 73, 39, 22],
                [99, 73, 110, 2.43, 76, 48, 23],
                [31, 12, 30, 0.5, 32, 16, 24],
                [42, 27, 43, 1, 53, 22, 25],
                [154, 117, 157, 3.05, 92, 58, 26],
                [234, 185, 230, 4.09, 123, 69, 27],
                [160, 120, 186, 2.77, 91, 50, 28],
                [134, 96, 165, 2.76, 83, 41, 29],
                [52, 24, 60, 1.03, 50, 21, 30],
                [46, 5, 49, 0.28, 10, 6, 31]
            ];
            const dataGZ = [
                [26, 37, 27, 1.163, 27, 13, 1],
                [85, 62, 71, 1.195, 60, 8, 2],
                [78, 38, 74, 1.363, 37, 7, 3],
                [21, 21, 36, 0.634, 40, 9, 4],
                [41, 42, 46, 0.915, 81, 13, 5],
                [56, 52, 69, 1.067, 92, 16, 6],
                [64, 30, 28, 0.924, 51, 2, 7],
                [55, 48, 74, 1.236, 75, 26, 8],
                [76, 85, 113, 1.237, 114, 27, 9],
                [91, 81, 104, 1.041, 56, 40, 10],
                [84, 39, 60, 0.964, 25, 11, 11],
                [64, 51, 101, 0.862, 58, 23, 12],
                [70, 69, 120, 1.198, 65, 36, 13],
                [77, 105, 178, 2.549, 64, 16, 14],
                [109, 68, 87, 0.996, 74, 29, 15],
                [73, 68, 97, 0.905, 51, 34, 16],
                [54, 27, 47, 0.592, 53, 12, 17],
                [51, 61, 97, 0.811, 65, 19, 18],
                [91, 71, 121, 1.374, 43, 18, 19],
                [73, 102, 182, 2.787, 44, 19, 20],
                [73, 50, 76, 0.717, 31, 20, 21],
                [84, 94, 140, 2.238, 68, 18, 22],
                [93, 77, 104, 1.165, 53, 7, 23],
                [99, 130, 227, 3.97, 55, 15, 24],
                [146, 84, 139, 1.094, 40, 17, 25],
                [113, 108, 137, 1.481, 48, 15, 26],
                [81, 48, 62, 1.619, 26, 3, 27],
                [56, 48, 68, 1.336, 37, 9, 28],
                [82, 92, 174, 3.29, 0, 13, 29],
                [106, 116, 188, 3.628, 101, 16, 30],
                [118, 50, 0, 1.383, 76, 11, 31]
            ];
            const dataSH = [
                [91, 45, 125, 0.82, 34, 23, 1],
                [65, 27, 78, 0.86, 45, 29, 2],
                [83, 60, 84, 1.09, 73, 27, 3],
                [109, 81, 121, 1.28, 68, 51, 4],
                [106, 77, 114, 1.07, 55, 51, 5],
                [109, 81, 121, 1.28, 68, 51, 6],
                [106, 77, 114, 1.07, 55, 51, 7],
                [89, 65, 78, 0.86, 51, 26, 8],
                [53, 33, 47, 0.64, 50, 17, 9],
                [80, 55, 80, 1.01, 75, 24, 10],
                [117, 81, 124, 1.03, 45, 24, 11],
                [99, 71, 142, 1.1, 62, 42, 12],
                [95, 69, 130, 1.28, 74, 50, 13],
                [116, 87, 131, 1.47, 84, 40, 14],
                [108, 80, 121, 1.3, 85, 37, 15],
                [134, 83, 167, 1.16, 57, 43, 16],
                [79, 43, 107, 1.05, 59, 37, 17],
                [71, 46, 89, 0.86, 64, 25, 18],
                [97, 71, 113, 1.17, 88, 31, 19],
                [84, 57, 91, 0.85, 55, 31, 20],
                [87, 63, 101, 0.9, 56, 41, 21],
                [104, 77, 119, 1.09, 73, 48, 22],
                [87, 62, 100, 1, 72, 28, 23],
                [168, 128, 172, 1.49, 97, 56, 24],
                [65, 45, 51, 0.74, 39, 17, 25],
                [39, 24, 38, 0.61, 47, 17, 26],
                [39, 24, 39, 0.59, 50, 19, 27],
                [93, 68, 96, 1.05, 79, 29, 28],
                [188, 143, 197, 1.66, 99, 51, 29],
                [174, 131, 174, 1.55, 108, 50, 30],
                [187, 143, 201, 1.39, 89, 53, 31]
            ];
            const lineStyle = {
                width: 1,
                opacity: 0.5
            };
            option = {
                legend: {
                    bottom: -3,
                    data: ['Beijing', 'Shanghai', 'Guangzhou'],
                    itemGap: 20,
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    },
                    selectedMode: 'single'
                },
                radar: {
                    indicator: [
                        { name: 'AQI', max: 300 },
                        { name: 'PM2.5', max: 250 },
                        { name: 'PM10', max: 300 },
                        { name: 'CO', max: 5 },
                        { name: 'NO2', max: 200 },

                    ],
                    shape: 'circle',
                    splitNumber: 5,
                    axisName: {
                        color: 'rgb(238, 197, 102)'
                    },
                    splitLine: {
                        lineStyle: {
                            color: [
                                'rgba(238, 197, 102, 0.1)',
                                'rgba(238, 197, 102, 0.2)',
                                'rgba(238, 197, 102, 0.4)',
                                'rgba(238, 197, 102, 0.6)',
                                'rgba(238, 197, 102, 0.8)',
                                'rgba(238, 197, 102, 1)'
                            ].reverse()
                        }
                    },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(238, 197, 102, 0.5)'
                        }
                    }
                },
                series: [
                    {
                        name: 'Beijing',
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: dataBJ,
                        symbol: 'none',
                        itemStyle: {
                            color: '#F9713C'
                        },
                        areaStyle: {
                            opacity: 0.1
                        }
                    },
                    {
                        name: 'Shanghai',
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: dataSH,
                        symbol: 'none',
                        itemStyle: {
                            color: '#B3E4A1'
                        },
                        areaStyle: {
                            opacity: 0.05
                        }
                    },
                    {
                        name: 'Guangzhou',
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: dataGZ,
                        symbol: 'none',
                        itemStyle: {
                            color: 'rgb(238, 197, 102)'
                        },
                        areaStyle: {
                            opacity: 0.05
                        }
                    }
                ]
            };

            option && myChart.setOption(option);
        },
        initMonitor() {
            let app = {};
            let chartDom = this.$refs.monitor;
            let myChart = echarts.init(chartDom);
            let option;

            const categories = (function () {
                let now = new Date();
                let res = [];
                let len = 10;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                    now = new Date(+now - 2000);
                }
                return res;
            })();
            const categories2 = (function () {
                let res = [];
                let len = 10;
                while (len--) {
                    res.push(10 - len - 1);
                }
                return res;
            })();
            const data = (function () {
                let res = [];
                let len = 10;
                while (len--) {
                    res.push(Math.round(Math.random() * 1000));
                }
                return res;
            })();
            const data2 = (function () {
                let res = [];
                let len = 0;
                while (len < 10) {
                    res.push(+(Math.random() * 10 + 5).toFixed(1));
                    len++;
                }
                return res;
            })();
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
                },
                legend: {
                    textStyle: {
                        color: "#fff"
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataZoom: {
                    show: false,
                    start: 0,
                    end: 100
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: categories
                    },
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: categories2
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        name: 'Price',
                        max: 30,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    },
                    {
                        type: 'value',
                        scale: true,
                        name: 'Order',
                        max: 1200,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    }
                ],
                series: [
                    {
                        name: 'Dynamic Bar',
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        data: data
                    },
                    {
                        name: 'Dynamic Line',
                        type: 'line',
                        data: data2
                    }
                ]
            };
            app.count = 11;
            setInterval(function () {
                let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
                data.shift();
                data.push(Math.round(Math.random() * 1000));
                data2.shift();
                data2.push(+(Math.random() * 10 + 5).toFixed(1));
                categories.shift();
                categories.push(axisData);
                categories2.shift();
                categories2.push(app.count++);
                myChart.setOption({
                    xAxis: [
                        {
                            data: categories
                        },
                        {
                            data: categories2
                        }
                    ],
                    series: [
                        {
                            data: data
                        },
                        {
                            data: data2
                        }
                    ]
                });
            }, 2100);

            option && myChart.setOption(option);
        },
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
        }
    }
}

</script>
  
<style lang="scss" scoped>
.main {
    background-color: #0C1F34;
    color: white;

}

.monthly-statistics {
    display: flex;

    gap: 2rem;
    margin-left: 2rem;
    justify-content: center;
    width: 35%;
}

.main-bottom {
    display: flex;
    justify-content: space-between;
    gap: 0 3rem;
    padding: .9rem 4rem;
}

.unusual {
    display: flex;
    align-items: center;
    justify-content: center;
}

.header {
    height: 6rem;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.frequency-box {
    width: 35%;
    height: 42vh;
}

.monitor {
    width: 30%;
    height: 42vh;
}

.status {
    width: 30%;
    height: 42vh;
}

.main-top {
    display: flex;
    justify-content: space-between;
    height: 50vh;
    align-items: center;
    padding: 0 6rem;
}
</style>
  
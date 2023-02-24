<!-- 环境质量 -->
<template>
    <div class="environmental-quality">
        
        <!-- 标题 -->
        <div class="flex-ja-center header">
            <dv-decoration-11 >
            <div class="fs-26">园区环境质量分析</div>
            </dv-decoration-11>
        </div>
        <!-- 录播图 -->
        <div class="swiper">
            <el-carousel :autoplay="false" height="65vh" @change="changeSwiper" ref="carousel">
                <el-carousel-item v-for="item in tabs" :key="item.id" :label="item.lable" @setActiveItem="setActiveItem">
                    <dv-border-box-1 backgroundColor="#2b5dff29">
                        <div id="weatherChart" v-if="item.id == 0"></div>
                        <div id="waterChart" v-if="item.id == 1"></div>
                        <div id="soilChart" v-if="item.id == 2"></div>
                    </dv-border-box-1>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- tabs切换轮播 -->
        <div class="environmental-wrap mt-30 ">
            <div :class='{ "environmental-item": true, "environmental-item_active": item.isActive, }' v-for="item in  tabs"
                :key="item.id" @click="changeTab(item.id)">

                <dv-border-box-8>
                    <span :class='{ "environmental-item_active": item.isActive, }'>{{ item.lable }}</span>
                </dv-border-box-8>
            </div>
        </div>
    </div>
</template>
  
<script >
import Charts from '@jiaminghi/charts';


export default {
    name: 'environmentalQuality',
    data() {
        return {
            tabs: [{
                id: 0,
                lable: '空气',
                isActive: true,
            }, {
                id: 1,
                lable: '水质',
                isActive: false,
            }, {
                id: 2,
                lable: '土壤',
                isActive: false,
            }],
            active: 2,
            weatherOption: {
                title: {
                    style: {
                        fill: '#fff',
                        fontSize: 30,
                    },
                    offset: [0, 10]
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                name: 'PM2.5',
                                value: 55
                            },
                            {
                                name: 'PM10',
                                value: 120
                            },
                            {
                                name: 'SO2',
                                value: 78
                            },
                            {
                                name: 'NO2',
                                value: 66
                            },
                            {
                                name: 'CO',
                                value: 80
                            },
                            {
                                name: 'O3',
                                value: 80
                            }
                        ],
                        insideLabel: {
                            show: true
                        }
                    }
                ],


            },
            waterOption: {
                title: {
                    style: {
                        fill: '#fff',
                        fontSize: 30,

                    },
                    offset: [0, 10]
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                name: 'pH',
                                value: 55
                            },
                            {
                                name: '温度',
                                value: 120
                            },
                            {
                                name: '溶氧',
                                value: 78
                            },
                            {
                                name: '电导率',
                                value: 66
                            },
                            {
                                name: '浊度',
                                value: 80
                            },
                            // {
                            //     name: 'O3',
                            //     value: 80
                            // }
                        ],
                        insideLabel: {
                            show: true
                        }
                    }
                ],


            },
            soilOption: {
                title: {
                    style: {
                        fill: '#fff',
                        fontSize: 30,
                    },
                    offset: [0, 10]
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                name: '汞',
                                value: 55
                            },
                            {
                                name: '砷',
                                value: 120
                            },
                            {
                                name: '银',
                                value: 78
                            },
                            {
                                name: '铁',
                                value: 66
                            },
                            {
                                name: '锰',
                                value: 80
                            },
                            {
                                name: '钴',
                                value: 80
                            },
                            {
                                name: '硒',
                                value: 80
                            },
                            {
                                name: '铋',
                                value: 80
                            },
                            {
                                name: '铅',
                                value: 80
                            },
                            {
                                name: '镉',
                                value: 80
                            },
                            {
                                name: '铜',
                                value: 80
                            },
                            {
                                name: '锌',
                                value: 80
                            },
                            {
                                name: '镍',
                                value: 80
                            },
                            {
                                name: '锑',
                                value: 80
                            },
                        ],
                        insideLabel: {
                            show: true
                        }
                    }
                ],


            },
        }
    },
    mounted() {
        this.echarts('weatherChart', this.weatherOption);
        this.echarts('waterChart', this.waterOption);
        this.echarts('soilChart', this.soilOption);
    },
    methods: {

        // echarts
        echarts(e, options) {
            this.$nextTick(() => {
                const weather = document.getElementById(e);
                const weatherChart = new Charts(weather);
                weatherChart.setOption(options);
            });
        },

        changeSwiper(e) {
            this.tabs.forEach(item => {
                item.isActive = false;
            });
            this.tabs[e].isActive = true;
        },
        setActiveItem(index) {
            this.$refs.carousel.setActiveItem(index);
        },
        changeTab(index) {
            if (this.active === index) {
                return;
            }
            this.active = index;
            this.setActiveItem(index);
        },
    },
}
</script>
  
<style scoped>
#weatherChart,
#waterChart,
#soilChart {
    height: 100%;
    width: 100%;
}

.environmental-quality {
    padding-top: 2rem;
    box-sizing: border-box;
    /* display: grid; */
    height: 100vh;
    /* grid-template-rows: 10vh 60vh 25vh; */
    background-color: black;
}

/* 标题 */

.header{
    padding: 2rem 0;
}
:deep(.dv-decoration-11 ) {
    font-size: 2.2rem !important;
    width: 40rem ;
    height: 10rem;
    color: #ffffff;
    font-weight: 900;
}

/* 轮播边框 */
:deep(.dv-border-box-8 .border-box-content) {
    font-size: 2.2rem;
    position: relative;
    color: transparent;
    font-weight: 900;
    letter-spacing: 0.25vw;
    background: linear-gradient(183deg, #ffffff 35%, #40b6ff);
    background-clip: text;
    -webkit-background-clip: text;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14rem !important;
    height: 8rem !important;
}

.environmental-item_active {
    font-size: 2.8rem !important;
}

/* 隐藏指示器 */
:deep(.el-carousel__indicators) {
    display: none !important;
}

/* tabs */
.environmental-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    
}

</style>
  
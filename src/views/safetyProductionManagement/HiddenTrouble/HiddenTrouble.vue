<!-- 安全隐患排查 -->
<template>
    <!-- <dv-loading>Loading...</dv-loading> -->
    <dv-border-box-9 class="border">
        <div class="box">
            <div class="security-risk mt-2">
                <dv-border-box-11 title="安全风险监管">
                    <div class="flex left-top">
                        <dv-active-ring-chart :config="cake" style="width:150px;height:150px;" />
                        <dv-active-ring-chart :config="cake" style="width:150px;height:150px;" />
                        <dv-active-ring-chart :config="cake" style="width:150px;height:150px;" />
                    </div>
                    <dv-capsule-chart :config="config" style="width:300px;height:200px" />
                </dv-border-box-11>
            </div>
            <div class="operation-process mt-2">
                <dv-border-box-11 title="安全走势图">
                    <div class="flex left-bottom">
                        <Line-chart></Line-chart>
                    </div>
                </dv-border-box-11>
            </div>
            <div class="middle mt-4">
                <dv-border-box-12>
                    <p class="title">风险分布</p>
                    <p class="lable">风险<span class="num">10</span>处</p>
                    <p class="lable mt-2">隐患<span class="num">10</span>处</p>
                    <Histogram></Histogram>
                    <div class="img">
                        <img class="icon-map" src="@/assets/images/map.png" alt="">
                    </div>
                </dv-border-box-12>
            </div>

            <div class="hidden-treatment mt-2">
                <dv-border-box-11 title="隐患排查治理">
                    <div class="right right-top">
                        <dv-scroll-board :config="row" style="width:500px;height:220px" />
                    </div>
                </dv-border-box-11>
            </div>
            <div class="hidden-type mt-2">
                <dv-border-box-11 title="隐患类型">
                    <div class="right flex right-bottom">
                        <dv-conical-column-chart :config="column" style="width:400px;height:300px;" />
                    </div>
                </dv-border-box-11>
            </div>
        </div>
    </dv-border-box-9>
</template>

<script>
import Histogram from './HiddenHistogram.vue'
import LineChart from './HiddenLineChart.vue'

export default {
    components: {
        Histogram,
        LineChart
    },
    methods: {
        handleClick(row) {
            console.log(row);
        }
    },

    data() {
        return {
            config: {
                radius: '50%',
                activeRadius: '60%',
                data: [
                    {
                        name: '生产',
                        value: 55
                    },
                    {
                        name: '出售',
                        value: 120
                    },
                    {
                        name: '买进',
                        value: 78
                    },
                    {
                        name: '税务',
                        value: 66
                    }
                ],
                digitalFlopStyle: {
                    fontSize: 20
                },
                showOriginValue: true,
                lineWidth: 10
            },
            cake: {
                data: [
                    {
                        name: '火灾',
                        value: 1
                    },
                    {
                        name: '气体泄露',
                        value: 10
                    },
                    {
                        name: '辐射',
                        value: 0
                    },
                    {
                        name: '行人安全',
                        value: 3
                    },
                    {
                        name: '失窃',
                        value: 0
                    },

                ],
                showValue: true,
                activeTimeGap: 5000
            },
            column: {
                data: [
                    {
                        name: '火灾',
                        value: 1
                    },
                    {
                        name: '气体泄露',
                        value: 10
                    },
                    {
                        name: '辐射',
                        value: 0
                    },
                    {
                        name: '行人安全',
                        value: 3
                    },
                    {
                        name: '失窃',
                        value: 0
                    },

                ],
                showValue: true
            },
            row: {
                header: ['列1', '列2', '列3'],
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
                ],
                index: true,
                columnWidth: [50],
                align: ['center']
            },
            environment: {
                value: 66,
                borderWidth: 5,
                borderRadius: 10,
                borderGap: 5
            }
        }
    }
}
</script>
<style scoped>
.box {
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-rows: repeat(2, 48%);
    grid-template-columns: repeat(3, 33.3333%);
    grid-template-areas: "security-risk  middle  hidden-treatment"
        "operation-process  middle  hidden-type";
}

.mt-2 {
    margin-top: 2rem;
}

.mt-4 {
    margin-top: 4rem;
}

.security-risk {
    grid-area: security-risk;
    padding: 1rem 2rem 2rem;
}

.operation-process {
    grid-area: operation-process;
    padding: 0 2rem;
}

.hidden-treatment {
    grid-area: hidden-treatment;
    padding: 1rem 2rem 2rem;
}

.hidden-type {
    grid-area: hidden-type;
    padding: 0 2rem;
}

.middle {
    grid-area: middle;
    height: 96%;
}

.middle .lable {
    color: white;
    border: 0.2rem solid grey;
    background-color: rgba(128, 128, 128, 0.5);
    width: 16rem;
    font-size: 2.4rem;
    margin-left: 4rem;
    box-sizing: border-box;
    border-radius: 50rem;
    padding: 1rem;
    text-align: center;
}

.middle .num {
    color: red;
    margin: 0 1rem;
}

.middle .title {
    color: white;
    font-size: 2.4rem;
    padding-left: 2rem;
    margin-left: 4rem;
    margin-bottom: 2rem;
    border-left: 0.6rem solid red;
}

.right-top {
    padding: 12rem 2.2rem 2rem;
}

.flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.2rem;
}

.border {
    background-color: black;
}

.img {
    /* margin-top: 30rem; */
    text-align: center;
}

.icon-map {
    width: 60rem;
}

:deep(.dv-border-box-9) {
    width: 100%;
    height: 100vh;
}

:deep(.dv-border-box-12) {
    padding-top: 2rem;
}

:deep(.dv-active-ring-chart) {
    margin-top: 4rem;
}

:deep(.dv-capsule-chart) {
    margin-left: 2rem;
}

:deep(.dv-conical-column-chart) {
    margin-left: 4rem;
    margin-top: 8rem;
}
</style>
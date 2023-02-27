<template>
    <dv-full-screen-container>
        <div class="main">
            <div class="item">
                <dv-border-box-1 class="dv-box">
                    <div class="content pd-12">
                        <dv-decoration-11 class="title" style="width:20rem;height:6rem;">预警类型比例</dv-decoration-11>
                        <warning-type class="scale-9"></warning-type>
                    </div>
                </dv-border-box-1>
            </div>
            <div class="item">
                <dv-border-box-1 class="dv-box">
                    <div class="content pd-12">
                        <dv-decoration-11 class="title" style="width:20rem;height:6rem;">预警类型趋势</dv-decoration-11>
                        <warning-trend class="scale-9"></warning-trend>
                    </div>
                </dv-border-box-1>
            </div>
            <div class="item">
                <dv-border-box-8 class="dv-box">
                    <div class="content pd-12 flex-col">
                        <div class="list">
                            <div class="item-list" v-for="(item, index) in list" :key="index">
                                <img class="icon-item" :src="item.imgUrl" alt="">
                                <div class="text-item">
                                    <div class="fs-16">{{ item.text }}</div>
                                    <digital-flop :number="item.value"></digital-flop>
                                </div>
                            </div>
                        </div>
                    </div>
                </dv-border-box-8>
            </div>
            <div class="item">
                <dv-border-box-8 :reverse="true" class="dv-box">
                    <div class="content pd-12">
                        <dv-decoration-11 class="title" style="width:20rem;height:6rem;">规划模型统计</dv-decoration-11>
                        <ruleModel class="scale-9 mt-40"></ruleModel>
                        <early-warning class="scale-9 mt-40"></early-warning>
                    </div>
                </dv-border-box-8>
            </div>
            <div class="item">
                <dv-border-box-1 class="dv-box" :reverse="true">
                    <div class="content">
                        <dv-decoration-11 class="title" style="width:20rem;height:6rem;">实时预警</dv-decoration-11>
                        <scroll-board class="scale-9"></scroll-board>
                    </div>
                </dv-border-box-1>
            </div>
            <div class="item">
                <dv-border-box-1 class="dv-box" :reverse="true">
                    <div class="content">
                        <dv-decoration-11 class="title" style="width:20rem;height:6rem;">历史预警</dv-decoration-11>
                        <scroll-board class="scale-9"></scroll-board>
                    </div>
                </dv-border-box-1>
            </div>
        </div>
    </dv-full-screen-container>
</template>

<script>
import warningType from './WarningType.vue';
import ruleModel from './RuleModel.vue';
import warningTrend from './WarningTrend.vue';
import earlyWarning from './EarlyWarning.vue';
import scrollBoard from './ScrollBoard.vue';
import digitalFlop from './DigitalFlop.vue';

export default {
    name: 'hiddenDangerDetail',
    components: {
        warningType,
        warningTrend,
        earlyWarning,
        ruleModel,
        scrollBoard,
        digitalFlop
    },
    data() {
        return {
            list: [
                {
                    id: 1,
                    imgUrl: 'https://unier.oss-cn-beijing.aliyuncs.com/industry/images/icon-warn.png',
                    text: '预警总数',
                    value: 169
                },
                {
                    id: 2,
                    imgUrl: 'https://unier.oss-cn-beijing.aliyuncs.com/industry/images/icon-city.png',
                    text: '接入企业数',
                    value: 3456
                },
                {
                    id: 3,
                    imgUrl: 'https://unier.oss-cn-beijing.aliyuncs.com/industry/images/icon-camera.png',
                    text: '镜头总数',
                    value: 6921
                }
            ]

        }
    }
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 100vh;
    background-color: black;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
        "left-aside_1 left-aside_1 center_1 center_1 center_1 right-aside_1 right-aside_1"
        "left-aside_1 left-aside_1 center_2 center_2 center_2 right-aside_1 right-aside_1"
        "left-aside_2 left-aside_2 center_2 center_2 center_2 right-aside_2 right-aside_2"
        "left-aside_2 left-aside_2 center_2 center_2 center_2 right-aside_2 right-aside_2"
}

.item {
    padding: 0 1rem;
    font-size: 2rem;
    box-sizing: border-box;
}

.item:nth-of-type(1) {
    grid-area: left-aside_1;
}

.item:nth-of-type(2) {
    grid-area: left-aside_2;
}

.item:nth-of-type(3) {
    grid-area: center_1;
}

.item:nth-of-type(4) {
    grid-area: center_2;
}

.item:nth-of-type(5) {
    grid-area: right-aside_1;
}

.item:nth-of-type(6) {
    grid-area: right-aside_2;
}

.title {
    color: white;
    font-size: 1.6rem;
    text-align: center;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.pd-12 {
    padding: 1.4rem;
    box-sizing: border-box;
}

.scale-9 {
    transform: scale(0.9);
}

.mt-40 {
    margin-top: -4rem;
}

.list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13rem;

}

.item-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    color: white;
}

.item-list .text-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

}

.icon-item {
    object-fit: cover;
    width: 8rem;
    height: 8rem;
}

.flex-col {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.fs-16 {
    font-size: 1.6rem;
}
</style>
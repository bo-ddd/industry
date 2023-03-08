<template>
    <!-- <dv-full-screen-container> -->
    <div class="safety-box">
        <div class="title">
            <span >安全防护管理</span>
            <dv-decoration-5 />
        </div>
        <div class="header">
            <div class="header-item" v-for="item in headerData" :key="item.id">
                <div class="item-title">{{ item.title }}</div>
                <div class="co-blue">{{ item.num }}</div>
            </div>
        </div>
        <div class="safety mat-20">
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">受攻击省份排名</div>
                <rankingView></rankingView>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item map">
                <dv-flyline-chart :config="config" style="width:100%;height:100%;" />
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">已发现漏洞类型排名</div>
                <dv-capsule-chart class="flex-center leaf" :config="leakConfig" />
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">安全危险等级</div>
                <hazardLevel></hazardLevel>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">实时攻防详情</div>
                <div class="container">
                    <dv-scroll-board :config="detailConfig" style="width:400px;" class="detail" />
                </div>
            </dv-border-box-8>

        </div>
    </div>
<!-- </dv-full-screen-container> -->
</template>
<script>
import rankingView from "../SafetyProtection/RankingView.vue";
import hazardLevel from "../SafetyProtection/HazardLevel.vue";
export default {
    components: {
        rankingView,
        hazardLevel,
    },
    data() {
        return {
            headerData: [
                {
                    id: 1,
                    title: '总攻击数',
                    num: '350,425,000'
                },
                {
                    id: 1,
                    title: '扫描发现总漏洞',
                    num: '3500'
                },
                {
                    id: 1,
                    title: '防火墙拦截数',
                    num: '350,78'
                },
                {
                    id: 1,
                    title: '保护资产个数',
                    num: '350,42'
                },
            ],
            config: {
                centerPoint: [0.48, 0.35],
                points: [
                    [0.52, 0.23],
                    [0.43, 0.29],
                    [0.59, 0.35],
                    [0.53, 0.47],
                    [0.45, 0.54],
                    [0.36, 0.38],
                    [0.62, 0.55],
                    [0.56, 0.56],
                    [0.37, 0.66],
                    [0.55, 0.81],
                    [0.55, 0.67],
                    [0.37, 0.29],
                    [0.20, 0.36],
                    [0.76, 0.41],
                    [0.59, 0.18],
                    [0.68, 0.17],
                    [0.59, 0.10]
                ],
                bgImgUrl: '/img/flylineChart/map.jpg'
            },
            leakConfig: {
                data: [
                    {
                        name: 'XSS跨站脚本攻击',
                        value: 167
                    },
                    {
                        name: 'CSRF跨站请求伪造',
                        value: 123
                    },
                    {
                        name: 'SQL注入',
                        value: 98
                    },
                    {
                        name: '服务器请求伪造SSRF',
                        value: 75
                    },
                    {
                        name: '命令执行漏洞',
                        value: 66
                    },
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '单位',

            },
            ///实时攻防详情
            detailConfig: {
                header: ['攻击时间', 'IP地', '攻击流量'],
                data: [
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],
                    ['20.11.20 9:00', '2.5.2.6美国', '30Mbps'],

                ]
            },


        }

    },
   
}
</script>
<style scoped>
.pab-10{
  padding-bottom: 1rem;
}

.map {
    background: url('https://unier.oss-cn-beijing.aliyuncs.com/industry/images/map.png') no-repeat;
    background-size: 100% 100%;
    z-index: 1;
}

.detail {
    height: 22rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mat-20 {
    margin-top: 2rem;
}

.co-blue {
    color: rgb(110, 177, 240);
    font-size: 2.5rem;
}

.safety-box {
    color: #fff;
    min-width: 1000px;
    min-height: 100vh;
    background-color: black;
    box-sizing: border-box;
    overflow: hidden;
}

.dv-capsule-chart.leaf{
    height: 80%!important;
}

.title {
    height: 8rem;
    font-size: 3rem;
    box-sizing: border-box;
    position: relative;
}

.title span{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);    
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.title-t {
    padding: 1rem;
    font-size: 1.8rem;
}

.header-item {
    width: 30rem;
    height: 7rem;
    border: 2px solid pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.item-title {
    font-size: 2rem;
}

.safety {
    height: 80vh !important;
    display: grid;
    grid-template-columns: 1fr 40% 1fr;
    grid-template-rows: repeat(auto-fit, minmax(40%, 1fr)) ;
    grid-template-areas:
        "left-aside_1 center right-aside_1"
        "left-aside_2 center right-aside_2"
        "left-aside_2 center right-aside_2"
}

.item .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 3.8rem);
}

.item:nth-of-type(1) {
    grid-area: left-aside_1;
}

.item:nth-of-type(2) {
    grid-area: center;
}

.item:nth-of-type(3) {
    grid-area: right-aside_1;

}

.item:nth-of-type(4) {
    grid-area: left-aside_2;
}

.item:nth-of-type(5) {
    grid-area: right-aside_2;
}
.flex-center{
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<template>
    <div class="safety-box">
        <span class="title">安全监管</span>
        <dv-decoration-5 style="height:40px;" />
        <div class="header">
            <div class="header-item">
                <div class="item-title">总攻击术</div>
                <div class="co-blue">350,425,000</div>
            </div>
            <div class="header-item">
                <div class="item-title">扫描发现总漏洞</div>
                <div class="co-blue">3500</div>
            </div>
            <div class="header-item">
                <div class="item-title">防火墙拦截数</div>
                <div class="co-blue">350,78</div>
            </div>
            <div class="header-item">
                <div class="item-title">保护资产个数</div>
                <div class="co-blue">350,42</div>
            </div>

        </div>
        <div class="safety mat-20">
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">受攻击省份排名</div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <dv-flyline-chart :config="config" :dev="true" style="width:100%;height:100%;" />
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">已发现漏洞类型排名</div>
                <dv-capsule-chart :config="leakConfig" style="width:300px;height:200px" />

            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">安全危险等级</div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">实时攻防详情</div>

            </dv-border-box-8>
            <!-- <dv-border-box-8 :reverse="true" class="item">
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item"> -->
            <!-- <dv-capsule-chart :config="config" style="height:200px" /> -->
            <!-- </dv-border-box-8> -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
            leakConfig:{
                data: [
    {
      name: '南阳',
      value: 167
    },
    {
      name: '周口',
      value: 123
    },
    {
      name: '漯河',
      value: 98
    },
    {
      name: '郑州',
      value: 75
    },
    {
      name: '西峡',
      value: 66
    },
  ],
  colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
  unit: '单位'
            }

        }

    },
    methods: {

    },
    mounted() {

    }
}
</script>
<style scoped>
.mat-20 {
    margin-top: 2rem;
}

.co-blue {
    color: rgb(110, 177, 240);
    font-size: 2.5rem;
}

.safety-box {
    color: #fff;
    height: 100vh;
    background-color: black;
    box-sizing: border-box;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
}

.header {
    display: flex;
    justify-content: space-around;
}

.title-t {
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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 2fr 2fr;
    grid-template-areas:
        "left-aside_1 center center right-aside_1"
        "left-aside_2 center center right-aside_2"
        "left-aside_2 center center right-aside_2"
        /* "left-aside_3 center center right-aside_3" */
}

.item {
    padding: 1rem;
    box-sizing: border-box;
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

.item:nth-of-type(6) {
    grid-area: right-aside_3;
}

/* .item:nth-of-type(7) {
    grid-area: left-aside_3;
}

.item:nth-of-type(8) {
    grid-area: right-aside_2;
} */
</style>
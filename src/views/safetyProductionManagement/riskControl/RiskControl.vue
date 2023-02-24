<!-- 风险分级管控 -->
<template>
    <div class="risk-box">
        <span class="title">安全隐患排查</span>
        <dv-decoration-5 style="height:40px;" />
        <div class="risk">
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">风险数量比例</div>
                <dv-active-ring-chart :config="cakeConfig" style="width:200px;height:200px" />
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">管控任务执行情况</div>
                <div class="risk-points">
                    <div>
                        <span class="fs-35">645</span> 
                        <div class="co-red">风险点数</div>
                    </div>
                    <div>
                        <span class="fs-35">1212</span> 
                        <div class="co-gre">管控任务数</div>
                    </div>
                </div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">最新风险计划</div>
                <div>一般风险计划</div>
                <div>一般风险计划</div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">管控类型分布</div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">分级管控比</div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">安全隐患列举</div>
            </dv-border-box-8>
            <dv-border-box-8 :reverse="true" class="item">
                <div class="title-t">风险管控任务周报</div>
                <dv-capsule-chart :config="config" style="height:200px" />
            </dv-border-box-8>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            config: {
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
                    },
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '单位'

            },
            cakeConfig: {
                data: [
                    {
                        name: '临汾',
                        value: 55
                    },
                    {
                        name: '霍州',
                        value: 120
                    },
                    {
                        name: '运城',
                        value: 78
                    },
                    {
                        name: '大同',
                        value: 66
                    },
                    {
                        name: '侯马',
                        value: 80
                    }
                ],
                lineWidth: 10
            },

        }
    }
}
</script>
<style scoped>
.fs-35{
    font-size: 3.5rem;
}
.co-gre{
    color: green;
}
.co-red{
    color: red;
}
.title-t {
  padding: 1rem;
}

.title {
 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
}

.risk-box {
    /* padding: 1rem 0; */
    height: 100vh !important;
    background-color: black;
    box-sizing: border-box;
    color: #fff;

}

.risk {
    width: calc(100vw - 25rem -1px) !important;
    height: 90vh !important;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
        "left-aside_1 center center right-aside_1"
        "left-aside_2 center center right-aside_2"
        "left-aside_2 center center right-aside_2"
        "left-aside_3 center center right-aside_3"
}
.item {
    padding: 1rem;
    font-size: 2rem;
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

.item:nth-of-type(7) {
    grid-area: left-aside_3;
}

.item:nth-of-type(8) {
    grid-area: right-aside_2;
}
.risk-points{
    display: flex;
    justify-content: space-around ;
}
</style>
<!-- 安全隐患排查 -->
<template>
    <!-- <dv-loading>Loading...</dv-loading> -->
    <dv-border-box-9 class="border">
        <div class="box">
            <div class="security-risk mt-2">
                <dv-border-box-11 title="安全风险监管">
                    <div class="left left-top">
                        <dv-active-ring-chart :config="config" style="width:150px;height:150px;" />
                        <dv-active-ring-chart :config="config" style="width:150px;height:150px;" />
                        <dv-active-ring-chart :config="config" style="width:150px;height:150px;" />
                    </div>
                    <dv-capsule-chart :config="config" style="width:300px;height:200px" />
                </dv-border-box-11>
            </div>
            <div class="operation-process mt-2">
                <dv-border-box-11 title="作业流程安全图">
                    <div class="left left-bottom">
                        <dv-active-ring-chart :config="config" style="width:150px;height:150px;" />
                        <dv-active-ring-chart :config="config" style="width:150px;height:150px;" />
                        <dv-active-ring-chart :config="config" style="width:150px;height:150px;" />
                    </div>
                    <dv-capsule-chart :config="config" style="width:300px;height:200px" />
                </dv-border-box-11>
            </div>
            <div class="middle mt-4">
                <dv-border-box-12>
                    <p class="title">风险分布</p>
                        <p class="lable">风险<span class="num">10</span>处</p>
                        <p class="lable mt-2">隐患<span class="num">10</span>处</p>
                    <div class="img">
                        <img class="icon-map" src="@/assets/images/map.png" alt="">
                    </div>
                </dv-border-box-12>
            </div>

            <div class="hidden-treatment mt-2">
                <dv-border-box-11 title="隐患排查治理">
                    <div class="right left right-top">
                        <dv-active-ring-chart :config="config" style="width:150px;height:150px;" />
                        <dv-active-ring-chart :config="config" style="width:150px;height:150px;" />
                        <dv-active-ring-chart :config="config" style="width:150px;height:150px;" />
                    </div>
                    <dv-capsule-chart :config="config" style="width:300px;height:200px" />
                </dv-border-box-11>
            </div>
            <div class="hidden-type mt-2">
                <dv-border-box-11 title="隐患类型">
                    <div class="right left right-bottom">
                        <dv-conical-column-chart :config="column" style="width:400px;height:200px;" />
                    </div>

                </dv-border-box-11>
            </div>
        </div>
    </dv-border-box-9>
</template>

<script>
export default {
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
                        name: '周口',
                        value: 55
                    },
                    {
                        name: '南阳',
                        value: 120
                    },
                    {
                        name: '西峡',
                        value: 78
                    },
                    {
                        name: '驻马店',
                        value: 66
                    },
                    {
                        name: '新乡',
                        value: 80
                    }
                ],
                digitalFlopStyle: {
                    fontSize: 20
                },
                showOriginValue: true,
                lineWidth: 10
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
    grid-template-columns: repeat(3, 56rem);
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



.left {
    display: flex;
    font-size: 1.2rem;
}

.border {
    background-color: black;
}

.img {
    margin-top: 30rem;
    text-align: center;
}

.icon-map {
    width: 52rem;

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
}</style>
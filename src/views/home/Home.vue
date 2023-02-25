<template>
    <div class="home">
        <dv-full-screen-container>
            <dv-border-box-8 :reverse="true">

                <dv-border-box-1>
                    <div class="main-box">
                        <div class="main" v-for="item in list">
                            <div class="title">{{ item.title }}</div>
                            <div class="item" v-for="child in item.children">{{ child.title }}</div>
                        </div>
                    </div>
                </dv-border-box-1>

            </dv-border-box-8>
        </dv-full-screen-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: [
                {
                    title: "安全生产管理",
                    children: [
                        {
                            url: "/SuperviseView",
                            title: "安全生产监管"
                        }, {
                            url: "/hiddenTrouble",
                            title: "隐患排查治理"
                        }, {
                            url: "/riskControl",
                            title: "风险分级管控"
                        }, {
                            url: "/prdInfo",
                            title: "安全生产信息管理"
                        }, {
                            url: "/userManagement",
                            title: "人员管理"
                        }, {
                            url: "/checkpointManagement",
                            title: "卡口管理"
                        }, {
                            url: "/safetyProtection",
                            title: "安全防护管理"
                        }
                    ]
                },

                {
                    title: "园区环境管理",
                    children: [
                        {
                            url: "/environmentalQuality",
                            title: "园区环境质量分析"
                        }, {
                            url: "/pollutionSource",
                            title: "在线污染源监测"
                        }, {
                            url: "/enterpriseEnvironmentalProtection",
                            title: "企业环保登记"
                        }, {
                            url: "/pollutant",
                            title: "特征污染物名录库"
                        }, {
                            url: "",
                            title: "能源统计分析"
                        }, {
                            url: "",
                            title: "能源监测预警"
                        }, {
                            url: "/extinguishingAndProtection",
                            title: "园区消防管理"
                        },
                    ]
                }, {
                    title: "园区应急管理",
                    children: [
                        {
                            url: "",
                            title: "应急模拟演练"
                        }, {
                            url: "/meetEarly",
                            title: "应急监测预警"
                        }, {
                            url: "/meetPlan",
                            title: "应急预案管理"
                        }, {
                            url: "/meetResource",
                            title: "应急资源管理"
                        }, {
                            url: "",
                            title: "园区经济管理"
                        }, {
                            url: "",
                            title: "园区招商管理"
                        }, {
                            url: "",
                            title: "公文管理"
                        }, {
                            url: "/transactionManagement",
                            title: "事务管理"
                        }, {
                            url: "",
                            title: "共享与交流管理"
                        }
                    ]
                }
            ],

        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    background-color: #0C1F34;
    height: 100vh;
    width: 100%;
    color: white;
}

.main {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    padding-top: 5rem;

}

.main-box {
  padding-left: 5rem;
}

.item {
    padding:3rem;
    background-color: rgb(10, 79, 120);
    border-radius: .5rem;
    width: 15rem;
    text-align: center;
}

.title {
    font-size: 20px;
}
</style>

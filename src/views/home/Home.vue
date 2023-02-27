<template>
    <div class="home">
            <div class="main-box">
                <div class="container" v-for="item in list" >
                    <div class="title">{{ item.title }}</div>
                    <div class="main">
                        <div class="item clamp-1" v-for="child in item.children" @click="to(child.url)">
                            <dv-border-box-12>
                                {{ child.title }}
                            </dv-border-box-12>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- <dv-border-box-8 :reverse="true">
            </dv-border-box-8> -->
    </div>
</template>

<script>
import { Message } from 'element-ui';


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
                        }, {
                            url: "/transportationView",
                            title: "运输管理"
                        }, {
                            url: "/hiddenDangerDetail",
                            title: "隐患详情"
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
                            url: "/energyManagement",
                            title: "能源管理"
                        },  {
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
                            url: "/EconomyManage",
                            title: "园区经济管理"
                        }, {
                            url: "",
                            title: "园区招商管理"
                        }, {
                            url: "/publishKumon",
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
    },
    methods:{
        to(url){
            if(!url){
                Message.warning("该模块暂未开放");
                return;
            }
            console.log(url);
            this.$router.push({path: url})
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

.container{
    display: grid;
    grid-template-columns: 14rem auto;
    gap: 2rem;
    margin-top: 4rem;
}

.main {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
}

.main-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  width: 90vw;
}

.item {
    height: 8rem;
    line-height: 8rem;
    background-color: rgb(10, 79, 120);
    border-radius: .5rem;
    text-align: center;
    cursor: pointer;
}

.title {
    font-size: 2rem;
    font-weight: bold;
    text-align: right;
}
</style>

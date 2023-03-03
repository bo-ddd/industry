<template>
    <div class="prd_info">
        <div class="header">
            <div>
                <div class="ml-5">
                    <!-- 2019年12月30日 晴：高温12℃~-1℃ -->
                    {{ date }}
                    {{ time }}
                </div>
                <dv-decoration-8 style="width:100%;height:3rem;display: inline-block; text-align: left;" />
            </div>
            <div>
                <div class="fs-2 text_center fw-700">
                    安全生产信息管理
                </div>
                <dv-decoration-5 style="width:32rem;height:3rem;margin: 0 auto;" />
            </div>
            <div class="text_right">
                <div class="mr-5">导航菜单</div>
                <dv-decoration-8 :reverse="true" style="width:100%;height:3rem;display: inline-block; text-align: right;" />
            </div>
        </div>
        <div class="container flex-center">
            <div class="left">
                <dv-border-box-10 class="left_top">
                    <div class="box roll">
                        <div class="box_title">
                            <i class="c-35cee9 el-icon-d-arrow-right"></i>
                            风险研判和安全承诺公告
                        </div>
                        <div v-for="(item, index) in safetyAnnouncement" :key="index">
                            <div class="title mtb-05">{{ item.title }}</div>
                            <div v-for="i in item.data" :key="i.id">
                                <div class="c-b5b3b4 ptb-01">{{ i.txt }}</div>
                            </div>
                        </div>
                    </div>
                </dv-border-box-10>

                <dv-border-box-10 class="left_among">
                    <div class="box">
                        <div class="box_title">
                            <i class="c-35cee9 el-icon-d-arrow-right"></i>
                            风险点统计
                        </div>
                        <div class="content flex-center">
                            <div class="left flex-center">
                                <div>
                                    <div class="one align-center">
                                        <lxs-border class="lxs-border">
                                            <i class="el-icon-user"></i>
                                        </lxs-border>
                                        <div class="text_center ml-1">
                                            <h4 class="fs-2 c-61c2cb">11</h4>
                                            <div class="fs-1">风险预警</div>
                                        </div>
                                    </div>
                                    <div class="two mt-2 align-center">
                                        <lxs-border class="lxs-border">
                                            <i class="el-icon-warning"></i>
                                        </lxs-border>
                                        <div class="text_center ml-1">
                                            <h4 class="fs-2 c-61c2cb">1</h4>
                                            <div class="fs-1">当前隐患</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <pieChart class="right flex-center" />
                        </div>
                    </div>
                </dv-border-box-10>

                <dv-border-box-10 class="left_footer">
                    <div class="box">
                        <div class="box_title">
                            <i class="c-35cee9 el-icon-d-arrow-right"></i>
                            风险点统计
                        </div>
                        <el-carousel trigger="click" height="18rem">
                            <el-carousel-item v-for="(item, index) in carouselData" :key="index">
                                <div class="small jc-sa">
                                    <div class="align-center" v-for="el in item" :key="el.id">
                                        <i class="fs-5 c-35cee9" :class="el.icon"></i>
                                        <div class="text_center ml-1">
                                            <div class="c-35cee9 fw-700 fs-2">{{ el.num }}</div>
                                            <div class="fs-2">{{ el.text }}</div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </dv-border-box-10>
            </div>
            <div class="right">
                <dv-border-box-10 class="right_box">
                    <el-container>
                        <el-header class="align-center">
                            <div>
                                <div class="el-header-title">
                                    <i class="c-35cee9 el-icon-d-arrow-right"></i>
                                    风险研判和安全承诺公告
                                </div>
                                <div class="nav mt-1">
                                    <div v-for="item in navList" :key="item.id">
                                        <button @click="setIsok(item.nav, item)" :class="item.isActive ? 'btn-active' : ''"
                                            class="flex-center">
                                            <span class="i mr-1"></span>
                                            <span>{{ item.title }}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </el-header>
                        <el-main class="el-main-content">
                            <div v-if="isok == 1">
                                <riskFourColorDiagram />
                            </div>
                            <div v-else-if="isok == 2">
                                <hazardousOperationDistributionMap />
                            </div>
                            <div v-else-if="isok == 3">
                                <riskDistributionMap />
                            </div>
                            <div v-else-if="isok == 4">
                                <riskList />
                            </div>
                            <div v-else-if="isok == 5">
                                <twoMonadThreeCheckpost />
                            </div>
                        </el-main>
                    </el-container>
                </dv-border-box-10>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/lib/flexible';
import riskFourColorDiagram from './riskFourColorDiagram.vue';
import hazardousOperationDistributionMap from './hazardousOperationDistributionMap.vue';
import riskDistributionMap from './riskDistributionMap.vue';
import riskList from './riskList.vue';
import twoMonadThreeCheckpost from './twoMonadThreeCheckpost.vue';
import pieChart from './pieChart.vue';
import lxsBorder from './border.vue'
export default {
    data() {
        return {
            safetyAnnouncement: [
                {
                    id: 1,
                    title: "企业状态",
                    data: [
                        {
                            id: 1,
                            txt: "生产装置（19）套，其中运行（14）套，停产（5）套，检修（0）套；"
                        },
                        {
                            id: 2,
                            txt: "特殊作业：特级动火（0）处;一级动火（0）处;二级动火（0）处；进入受限空间作业（0）处；"
                        },
                        {
                            id: 3,
                            txt: "是否处于试生产（否）"
                        },
                        {
                            id: 4,
                            txt: "是否处于开停车状态（是）"
                        },
                        {
                            id: 5,
                            txt: "重大危险源是否处于安全状态（是）"
                        },
                    ]
                },
                {
                    id: 1,
                    title: "企业承诺",
                    data: [
                        {
                            id: 1,
                            txt: "生产装置（19）套，其中运行（14）套，停产（5）套，检修（0）套；"
                        },
                        {
                            id: 2,
                            txt: "特殊作业：特级动火（0）处;一级动火（0）处;二级动火（0）处；进入受限空间作业（0）处；"
                        },
                        {
                            id: 3,
                            txt: "是否处于试生产（否）"
                        },
                        {
                            id: 4,
                            txt: "是否处于开停车状态（是）"
                        },
                        {
                            id: 5,
                            txt: "重大危险源是否处于安全状态（是）"
                        },
                    ]
                },
                {
                    id: 1,
                    title: "企业。。。",
                    data: [
                        {
                            id: 1,
                            txt: "生产装置（19）套，其中运行（14）套，停产（5）套，检修（0）套；"
                        },
                        {
                            id: 2,
                            txt: "特殊作业：特级动火（0）处;一级动火（0）处;二级动火（0）处；进入受限空间作业（0）处；"
                        },
                        {
                            id: 3,
                            txt: "是否处于试生产（否）"
                        },
                        {
                            id: 4,
                            txt: "是否处于开停车状态（是）"
                        },
                        {
                            id: 5,
                            txt: "重大危险源是否处于安全状态（是）"
                        },
                    ]
                },
            ],
            carouselData: [
                [
                    {
                        id: 1,
                        icon: "el-icon-help",
                        num: 11,
                        text: "高危工艺"
                    },
                    {
                        id: 2,
                        icon: "el-icon-s-home",
                        num: 16,
                        text: "储罐信息"
                    }
                ],
                [
                    {
                        id: 1,
                        icon: "el-icon-help",
                        num: 11,
                        text: "高危工艺"
                    },
                    {
                        id: 2,
                        icon: "el-icon-s-home",
                        num: 16,
                        text: "储罐信息"
                    }
                ],
            ],
            isok: 5,// 1风险四色图  2危险作业分布图  3风险分布图   4风险清单   5两单三卡
            isActive: true,
            navList: [
                {
                    id: 1,
                    title: '风险四色图',
                    nav: 1,
                    isActive: false,
                },
                {
                    id: 2,
                    title: '危险作业分布图',
                    nav: 2,
                    isActive: false,
                },
                {
                    id: 3,
                    title: '风险分布图',
                    nav: 3,
                    isActive: false,
                },
                {
                    id: 4,
                    title: '风险清单',
                    nav: 4,
                    isActive: false,
                },
                {
                    id: 5,
                    title: '两单三卡',
                    nav: 5,
                    isActive: false,
                },
            ],
            date: '',
            time: ''
        };
    },
    created() {
        this.navList.forEach((item) => {
            if (this.isok == item.id) {
                item.isActive = !item.isActive
            }
        })
        this.newDate()
    },
    components: {
        pieChart,
        riskList,
        riskDistributionMap,
        riskFourColorDiagram,
        twoMonadThreeCheckpost,
        hazardousOperationDistributionMap,
        lxsBorder,
    },
    methods: {
        setIsok(num, item) {
            this.isok = num
            this.navList.forEach(el => {
                el.isActive = false;
                if (el.id == item.id) {
                    el.isActive = true
                }
            });
        },
        newDate() {
            let T = new Date();//创建一个日期对象
            let n = T.getFullYear();//获取当前年份
            let y = T.getMonth() + 1;//获取当前月份，月份从0开始计算，0代表1月份；
            let r = T.getDate();//获取当前是几号
            // let day = T.getDay();//获取当前是星期几，返回的其实是国内第几天0代表周日
            let h = T.getHours();//获取当前的小时
            let m = T.getMinutes();//获取当前的分钟
            let s = T.getSeconds();//获取当前的秒钟
            y = this.checkTime(y);
            r = this.checkTime(r);
            m = this.checkTime(m);
            s = this.checkTime(s)
            let date = n + '年' + y + '月' + r + '日';
            let time = h + ':' + m + ':' + s;
            this.date = date;
            this.time = time;
            setTimeout(() => {
                this.newDate();
            }, 1000)
        },
        checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
    }
}
</script>

<style scoped>
.prd_info {
    width: 100vw !important;
    height: 100vh;
    background-color: #060d25;
    color: #87a9d8;
}

.prd_info .header {
    width: 100%;
    height: 8rem !important;
    box-sizing: border-box;
    padding: 1rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 1.6rem;
}

.prd_info .container {
    width: 100%;
    height: calc(100vh - 8rem);
    box-sizing: border-box;
    padding: 0 1rem 1rem 1rem;
    gap: 1rem 2rem;
    color: #fff;
    margin: 0;
}

.container .left {
    width: 30%;
    height: 100%;
}

.container .left .box {
    padding: 1.5rem;
}

.container .left .roll {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 100000;
    overflow-y: scroll;
}

.container .left .box .box_title {
    font-size: 1.4rem;
    color: #83b6f8;
    font-weight: 700;
}

.container .left .roll .title {
    font-size: 1.4rem;
    color: #f4b54a;
    font-weight: 700;
}

/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    display: none;
}

.prd_info .container .left .left_top {
    min-width: 35% !important;
    height: 35%;
    margin-bottom: 1rem;
    box-sizing: border-box;
}

.prd_info .container .left .left_among {
    min-width: 35% !important;
    height: 35% !important;
    margin-bottom: 1rem;
}

.prd_info .container .left .left_among .box {
    width: 100% !important;
    height: calc(100% - 2rem) !important;
    box-sizing: border-box;
}

.prd_info .container .left .left_among .content {
    width: 100% !important;
    height: 100% !important;
}

.prd_info .container .left .left_among .content .left {
    width: 50%;
    height: 100%;
}

.prd_info .container .left .left_among .content .left .lxs-border {
    width: 5rem !important;
    height: 5rem !important;
    font-size: 3rem;
    text-align: center;
    line-height: 5rem;
    color: #61c2cb;
}

.prd_info .container .left .left_among .content .right {
    width: 30rem;
    height: 26rem;
}

.prd_info .container .left .left_footer {
    min-width: 30% !important;
    height: calc(30% - 2rem);
}

.small {
    height: 100%;
}

.container .right {
    width: 80%;
    height: 100%;
}

.el-header {
    width: 100%;
    height: 8rem !important;
    box-sizing: border-box;
    color: #fff;
    padding: 1rem;
    border-bottom: .1rem solid #2175a7;
    position: relative;
}

.el-header .nav {
    display: flex !important;
    align-items: center !important;
    position: absolute;
    bottom: 0;
    left: 1rem;
}

.el-header .el-header-title {
    color: #83b6f8;
    font-size: 1.6rem;
    padding-bottom: 3rem;
}

.el-header button {
    background-color: #0b3e7d;
    color: #fff;
    padding: 1rem 1.5rem;
    border-radius: .6rem .6rem 0 0;
    margin-right: 1rem;
}

.el-header button:hover {
    background-color: #3288b6;
    color: #fff;
    cursor: pointer;
    padding: 1rem 1.5rem;
}

.btn-active {
    background-color: #3288b6 !important;
    color: #fff !important;
    cursor: pointer !important;
    padding: 1rem 1.5rem !important;
}

.el-main {
    padding: 1rem;
    box-sizing: border-box;
}

.el-main-content {
    width: 100% !important;
    height: calc(100vh - 17rem) !important;
}

.fw-700 {
    font-weight: 700;
}

.fs-2 {
    font-size: 2rem;
}

.mr-1 {
    margin-right: 1rem;
}

.mt-1 {
    margin-top: 1rem;
}

.mlr-1 {
    margin: 0 1rem;
}

.mt-2 {
    margin-top: 2rem;
}

.ml-1 {
    margin-left: 1rem;
}

.i {
    display: inline-block;
    width: .5rem;
    height: 1.8rem;
    background-color: #61c2cb;
}

.c-61c2cb {
    color: #61c2cb !important;
}

.c-35cee9 {
    color: #35cee9 !important;
}

.c-b5b3b4 {
    color: #b5b3b4 !important;
}

.ptb-01 {
    padding: .1rem 0;
}

.mtb-05 {
    margin: .5rem 0;
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.jc-sa {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.fs-2 {
    font-size: 2rem !important;
}

.align-center {
    display: flex;
    align-items: center;
}

.text_center {
    text-align: center;
}

.text_right {
    text-align: right;
}

.ml-5 {
    margin-left: 5rem;
}

.mr-5 {
    margin-right: 5rem;
}

.fs-5 {
    font-size: 5rem;
}
</style>
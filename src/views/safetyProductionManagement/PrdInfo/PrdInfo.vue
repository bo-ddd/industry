<template>
    <div class="prd_info">
        <div class="header">
            <div>
                <div class="ml-5">2019年12月30日 晴：高温12℃~-1℃</div>
                <dv-decoration-8 style="width:100%;height:3rem;display: inline-block; text-align: left;" />
            </div>
            <div>
                <div class="fs-2 text_center fw-700">
                    安全风险分区大数据
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
                        <div class="sdsad">sadsad</div>
                    </div>
                </dv-border-box-10>
                <dv-border-box-10 class="left_footer">
                    <div class="box">
                        <div class="box_title">
                            <i class="c-35cee9 el-icon-d-arrow-right"></i>
                            风险点统计
                        </div>
                        <el-carousel trigger="click" height="18rem">
                            <el-carousel-item v-for="item in carouselData" :key="item.id">
                                <div class="small jc-sa">
                                    <div class="align-center">
                                        <i class="fs-9 c-35cee9" :class="item.iconOnw"></i>
                                        <div class="text_center">
                                            <div class="c-35cee9 fw-700 fs-2">{{ item.num }}</div>
                                            <div class="fs-2">{{ item.text }}</div>
                                        </div>
                                    </div>
                                    <div class="align-center">
                                        <i class="fs-9 c-35cee9" :class="item.iconTon"></i>
                                        <div class="text_center">
                                            <div class="c-35cee9 fw-700 fs-2">{{ item.num }}</div>
                                            <div class="fs-2">{{ item.text }}</div>
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
                                    <button class="flex-center">
                                        <span class="i mr-1"></span>
                                        <span>风险四色图</span>
                                    </button>
                                    <button class="flex-center">
                                        <span class="i mr-1"></span>
                                        <span>风险四色图</span>
                                    </button>
                                    <button class="flex-center">
                                        <span class="i mr-1"></span>
                                        <span>风险四色图</span>
                                    </button>
                                    <button class="flex-center">
                                        <span class="i mr-1"></span>
                                        <span>风险四色图</span>
                                    </button>
                                    <button class="flex-center">
                                        <span class="i mr-1"></span>
                                        <span>风险四色图</span>
                                    </button>
                                </div>
                            </div>
                        </el-header>
                        <el-main>
                            <RouterView />
                        </el-main>
                    </el-container>
                </dv-border-box-10>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/lib/flexible'
import { RouterView } from 'vue-router';
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
                {
                    id: 1,
                    iconOnw: "el-icon-help",
                    iconTon: "el-icon-s-home",
                    num: 11,
                    text: "高危工艺"
                },
                {
                    id: 2,
                    iconOnw: "el-icon-help",
                    iconTon: "el-icon-s-home",
                    num: 16,
                    text: "储罐信息"
                }
            ]
        };
    },
    created() {
    },
    components: { RouterView }
}
</script>

<style scoped>
.prd_info {
    width: calc(100vw - 25rem - 1px) !important;
    height: 100vh;
    background-color: #060d25;
    color: #87a9d8;
}

.mr-1 {
    margin-right: 1rem;
}

.mt-1 {
    margin-top: 1rem;
}

.i {
    display: inline-block;
    width: .5rem;
    height: 1.8rem;
    background-color: #61c2cb;
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
    height: 35%;
    margin-bottom: 1rem;
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
}

.el-header .nav {
    display: flex !important;
    align-items: center !important;
}

.el-header .el-header-title {
    color: #83b6f8;
    font-size: 1.6rem;
}

.el-header button {
    background-color: #0b3e7d;
    color: #fff;
    padding: 1rem 1.5rem;
}
.el-header button:hover {
    background-color: #3288b6;
    color: #fff;
    cursor:pointer;
    padding: 1rem 1.5rem;
}

.el-main {
    padding: 1rem;
    color: #fff;
}


.fw-700 {
    font-weight: 700;
}

.fs-2 {
    font-size: 2rem;
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

.fs-9 {
    font-size: 9rem;
}
</style>
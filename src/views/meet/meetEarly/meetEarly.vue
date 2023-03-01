//应急检测预警
<template>
    <div class="wraps">
        <div>
            <div class="sidebar">
                <div class="sidebar-header">
                    <dv-decoration-11 style="width:200px;height:60px;">事件列表</dv-decoration-11>
                </div>
                <div class="sidebar-left">
                    <div class="sidebar-main">
                        <div class="sidebar-main_left">
                            <div class="iconA">A</div>
                            <div>
                                <p class="colorA">入侵报警</p>
                                <p>厂区西北角</p>
                            </div>
                        </div>
                        <div class="sidebar-main_right">
                            <p>11:01:20</p>
                        </div>
                    </div>
                    <div class="sidebar-main">
                        <div class="sidebar-main_left">
                            <div class="iconA">A</div>
                            <div>
                                <p class="colorA">入侵报警</p>
                                <p>厂区西北角</p>
                            </div>
                        </div>
                        <div class="sidebar-main_right">
                            <p>11:01:20</p>
                        </div>
                    </div>
                    <div class="sidebar-main">
                        <div class="sidebar-main_left">
                            <div class="iconB">B</div>
                            <div>
                                <p class="colorB">入侵报警</p>
                                <p>厂区西北角</p>
                            </div>
                        </div>
                        <div class="sidebar-main_right">
                            <p>11:01:20</p>
                        </div>
                    </div>

                    <div class="sidebar-main">
                        <div class="sidebar-main_left">
                            <div class="iconB">B</div>
                            <div>
                                <p class="colorB">入侵报警</p>
                                <p>厂区西北角</p>
                            </div>
                        </div>
                        <div class="sidebar-main_right">
                            <p>11:01:20</p>
                        </div>
                    </div>
                    <div class="sidebar-main">
                        <div class="sidebar-main_left">
                            <div class="iconC">C</div>
                            <div>
                                <p class="colorC">入侵报警</p>
                                <p>厂区西北角</p>
                            </div>
                        </div>
                        <div class="sidebar-main_right">
                            <p>11:01:20</p>
                        </div>
                    </div>
                    <div class="sidebar-main">
                        <div class="sidebar-main_left">
                            <div class="iconD">D</div>
                            <div>
                                <p class="colorD">入侵报警</p>
                                <p>厂区西北角</p>
                            </div>
                        </div>
                        <div class="sidebar-main_right">
                            <p>11:01:20</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="right">
            <div class="header">
                <span>实时事件</span>
            </div>

            <div class="main">
                <div class="main-content">
                    <div class="content-header">
                        <span>基本信息</span>
                    </div>
                    <div class="content-main">
                        <p>类型：<span class="colorA">入侵报警</span></p>
                        <p>级别：<span class="colorA">A级警告</span></p>
                        <p>时间：<span>2022-03-12 13:03:21</span></p>
                        <p>位置：<span>山西省临汾市浮山县双新产业园区</span></p>
                        <p>内容：<span>01摄像机在02监控区域发现入侵对象</span></p>
                        <p>客户：<span>浮山双新产业园区</span></p>
                        <p>单位：<span>浮山双新产业园区</span></p>
                        <p>站点：<span>浮山双新产业园区</span></p>
                    </div>
                </div>
                <div class="main-content">
                    <div class="content-header">
                        <span>地理位置</span>
                    </div>
                    <div class="content-mains">
                        <!-- <img src="@/assets/images/map.png" alt=""> -->
                        <img src="https://unier.oss-cn-beijing.aliyuncs.com/industry/images/map.png" alt="">
                    </div>
                </div>
                <div class="main-content">
                    <div class="content-header">
                        <span>事件图片</span>
                    </div>
                    <div class="content-mainss">
                        <!-- <img src="@/assets/images/picture.png" alt=""> -->
                        <img src="https://unier.oss-cn-beijing.aliyuncs.com/industry/images/picture.png" alt="">
                    </div>
                </div>
                <div class="main-content">
                    <div class="content-header">
                        <span>事件视频</span>
                    </div>
                    <div class="content-mainss">
                        <!-- <img src="@/assets/images/video.png" alt=""> -->
                        <img src="https://unier.oss-cn-beijing.aliyuncs.com/industry/images/video.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true,
            value1: true
        }
    },
    mounted: {

    }
}
</script>

<style scoped>
.wraps {
    height: 100vh;
    background: #202429;
    display: flex;
}

.header {
    background: #2a2d34;
    color: #fff;
    font-weight: 600;
    font-size: 2rem;
    padding: 2rem;
}

.sidebar-left {
    overflow: scroll;
    height: 80vh;
}

.main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - 7rem);
    align-items: center;
    /* justify-items: center; */
}

.main-content {
    width: 98%;
    height: 44vh;
    background: #2a2d34;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    overflow: scroll;
}

.content-header {
    color: #fff;
    font-weight: 600;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    background: #333740;
}

.content-main {
    color: #fff;
    padding: 2rem 3rem;
    overflow: scroll;
}

.content-main p {
    padding: .7rem 0;
}

.content-mains {
    overflow: scroll;
}
.content-mainss {
    overflow: scroll;
}

.content-mains img {
    width: 100%;
    /* height: 100%; */
    /* object-fit: cover; */
}
.content-mainss img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
}

.sidebar {
    width: 30rem;
    height: calc(100vh - 2rem);
    background: #2a2d34;
    padding: 1rem;
    margin-right: 1rem;
}

.sidebar-header {
    font-weight: 600;
    background: #15161a;
    color: #35b6d5;
    font-size: 2rem;
    padding: 1rem 0;
    text-align: center;
    display: flex;
    justify-content: center;
}

.sidebar-main {
    background: #212429;
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;
}

.sidebar-main_left {
    display: flex;
    align-items: center;
    padding: .5rem 0;
    color: #fff;
}

.sidebar-main_left p {
    padding: .5rem 0;
    margin: 0 1rem;
}

.sidebar-main_left img {
    width: 5.5rem;
}

.sidebar-main_right {
    color: #fff;
    padding-top: 1rem;
}

.right {
    width: 100%;
    max-height: 80vh;
}

.iconA {
    width: 4rem;
    height: 4rem;
    background: red;
    border-radius: 10rem;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 600;
}

.iconB {
    width: 4rem;
    height: 4rem;
    background: #d99045;
    border-radius: 10rem;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 600;
}

.iconC {
    width: 4rem;
    height: 4rem;
    background: #cbba6c;
    border-radius: 10rem;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 600;
}

.iconD {
    width: 4rem;
    height: 4rem;
    background: #0192cb;
    border-radius: 10rem;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 600;
}

.colorA {
    color: #ff0000;
}

.colorB {
    color: #d99045;
}

.colorC {
    color: #cbba6c;
}

.colorD {
    color: #0192cb;
}
</style>
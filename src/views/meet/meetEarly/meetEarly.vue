//应急检测预警
<template>
    <div class="wraps">
        <div class="header">
            <span>实时事件</span>
        </div>

        <div class="main">
            <div class="main-content">
                <div class="content-header">
                    <span>基本信息</span>
                </div>
                <div class="content-main">
                    <p>类型：<span class="red">入侵报警</span></p>
                    <p>级别：<span class="red">A级警告</span></p>
                    <p>时间：<span>2016-03-12 13:03:21</span></p>
                    <p>位置：<span>xx省xx市xx区xx路xx号楼1-4-101</span></p>
                    <p>内容：<span>xx摄像机在xx监控区域发现入侵对象</span></p>
                    <p>客户：<span>xxx科技有限公司</span></p>
                    <p>单位：<span>xxx应急产业园</span></p>
                    <p>站点：<span>xxx测试站点</span></p>
                    
                </div>
            </div>
            <div class="main-content">
                <div class="content-header">
                    <span>地理位置</span>
                </div>
            </div>
            <div class="main-content">
                <div class="content-header">
                    <span>事件图片</span>
                </div>
            </div>
            <div class="main-content">
                <div class="content-header">
                    <span>事件视频</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted: {

    }
}
</script>

<style>
.wraps{
    height: 100vh;
    background: #202429;
}
.header{
    background: #2a2d34;
    color: #fff;
    font-weight: 600;
    font-size: 2rem;
    padding: 2rem;
}
.main{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
}
.main-content{
    width: 75%;
    /* height: 50vh; */
    background: #2a2d34;
    margin: 1rem 0 ;
}
.content-header{
    color: #fff;
    font-weight: 600;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    background: #333740;
}
.content-main{
    color: #fff;
    padding: 2rem 3rem;
}
.red{
    color: #ff0000;
}
</style>
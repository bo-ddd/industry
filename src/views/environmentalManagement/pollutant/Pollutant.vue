<template>
    <div class="wrap pollutant-box">
        <div class="title">污染物记录</div>
        <div class="mtb-10">
            <div class="second-title">信息检索</div>
            <div class="flex-start header">
                <div class="flex-center mtb-10">
                    <label class="third-title">事件内容：</label>
                    <el-input v-model="input" size="mini" class="text-kuang" label-width="100px"></el-input>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">事件来源：</label>
                    <el-input v-model="input" size="mini" class="text-kuang" label-width="100px"></el-input>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">开始时间：</label>
                    <el-input v-model="input" size="mini" class="text-kuang" label-width="100px"></el-input>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">结束时间：</label>
                    <el-input v-model="input" size="mini" class="text-kuang" label-width="100px"></el-input>
                </div>
                 <div class="flex-center  mtb-10">
                    <label class="third-title">受理状态：</label>
                    <el-input v-model="input" size="mini" class="text-kuang" label-width="100px"></el-input>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">所属网格：</label>
                    <el-input v-model="input" size="mini" class="text-kuang" label-width="100px"></el-input>
                </div>
                <div class="flex-center  mtb-10">
                    <label class="third-title">污染类型：</label>
                    <el-input v-model="input" size="mini" class="text-kuang" label-width="100px"></el-input>
                </div>
            </div>
        </div>
        <div class="border"></div>
        <div>
            <div class="flex-center mtb-10">
                <div class="second-title">事件记录</div>
                <div>
                    <el-button type="primary" size="small">增加</el-button>
                    <el-button type="primary" size="small">批量删除</el-button>
                    <el-button type="primary" size="small">批量导出</el-button>
                </div>
            </div>
            <dv-scroll-board :config="config" style="width:100%; height:300px" />
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            config: {
                header: ['编号', '事件内容', '污染源名称', '事件来源', '污染类型', '所属网络', '上报人', '受理状态', '巡查时间', '操作'],
                data: [
                    ['行1列1', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2'],
                    ['行1列1', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2'],
                    ['行1列1', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2'],
                    ['行1列1', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2'],
                    ['行1列1', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2'],
                    ['行1列1', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2', '行1列3', '行1列2'],
                ],
                index: true,
                align: ['center', 'center', 'center', 'center', 'center', 'center', 'center', 'center', 'center']
            }
        }
    }
}
</script>
<style>
.wrap {
    padding: 20px;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

/* .mlr-10{
    margin: 0 10px;
} */

.mtb-10 {
    margin: 10px 10px;
}

.border {
    border-bottom: 2px solid red;
}

.pollutant-box {
    background-color: black;
    color: white;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
}

.title {
    font-size: 26px;
}

.second-title {
    font-size: 22px;
}

.third-title{
     font-size: 18px;
}

.text-kuang{
    width: 200px;
}
.flex-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-between{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-start{
    display: flex;
    justify-content: start;
    align-items: center;
}
</style>
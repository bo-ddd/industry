<template>
    <div class="box">
        <div class="box-content mg-15">
            <!-- 销售总揽 -->
            <div class="sale-overview mb-10">
                <div class="sale-title mb-10">销售总揽</div>
                <div class="df">
                    <div class="sale-content bj-1">
                        <img src="../../assets/image/icon-order.png" alt="">
                        <div class="sale-num ml-20">
                            <dv-digital-flop :config="config" style="width: 10rem;height: 5rem;font-size: 1.8rem;" />
                            <div class="sale-text">今日订单总数</div>
                        </div>
                    </div>
                    <div class="sale-content bj-2">
                        <img src="../../assets/image/today-money.png" alt="">
                        <div class="sale-num ml-20">
                            <dv-digital-flop :config="config" style="width: 10rem;height: 5rem;font-size: 1.8rem;" />
                            <div class="sale-text">今日销售总额</div>
                        </div>
                    </div>
                    <div class="sale-content bj-3">
                        <img src="../../assets/image/yesterday-money.png" alt="">
                        <div class="sale-num ml-20">
                            <dv-digital-flop :config="config" style="width: 10rem;height: 5rem;font-size: 1.8rem;" />
                            <div class="sale-text">昨日销售总额</div>
                        </div>
                    </div>
                    <div class="sale-content bj-4">
                        <img src="../../assets/image/icon-wallet.png" alt="">
                        <div class="sale-num ml-20">
                            <dv-digital-flop :config="config" style="width: 10rem;height: 5rem;font-size: 1.8rem;" />
                            <div class="sale-text">近7天销售总额</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 订单趋势 -->
            <div class="sale-overview mb-10">
                <div class="df-sb mb-30">
                    <div class="sale-title">订单趋势</div>
                    <el-radio-group v-model="isCollapse" @change="orderTrend(isCollapse)" style="">
                        <el-radio-button :label="true">本周</el-radio-button>
                        <el-radio-button :label="false">本月</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="df-sb">
                    <div class="order-trend df-fd">
                        <div class="order-trend-num df-c">
                            <img src="../../assets/image/icon-apply.png" alt="">
                            <div class="num ml-10">
                                <dv-digital-flop :config="config1" style="width: 10rem;height: 3rem;font-size: 1.8rem;" />
                                <div class="text">本月订单总数</div>
                                <div class="df-c">
                                    <!-- 盈利 -->
                                    <div class="profit df-c">
                                        <img class="curve" src="../../assets/image/icon-top.png" alt="">
                                        10%
                                    </div>
                                    <div>{{orderText}}</div>
                                </div>
                            </div>
                        </div>
                        <dv-decoration-3 style="width:20rem;height:2rem; margin: 2rem 0;" />
                        <div class="order-trend-num df-c">
                            <img src="../../assets/image/icon-television.png" alt="">
                            <div class="num ml-10">
                                <dv-digital-flop :config="config1" style="width: 10rem;height: 3rem;font-size: 1.8rem;" />
                                <div class="text">本月订单总数</div>
                                <div class="df-c">
                                    <!-- 亏损 -->
                                    <div class="loss df-c">
                                        <img class="curve" src="../../assets/image/icon-bottom.png" alt="">
                                        3%
                                    </div>
                                    <div>{{orderText}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="echarts" ref="echartOrder"></div>
                </div>
            </div>
            <!-- 销售趋势 -->
            <div class="sale-overview">
                <div class="df-sb mb-30">
                    <div class="sale-title">销售趋势</div>
                    <el-radio-group v-model="isCollapses" @change="sellTrend(isCollapses)" style="">
                        <el-radio-button :label="true">本周</el-radio-button>
                        <el-radio-button :label="false">本月</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="df-sb">
                    <div class="order-trend df-fd">
                        <div class="order-trend-num df-c">
                            <img src="../../assets/image/icon-apply.png" alt="">
                            <div class="num ml-10">
                                <dv-digital-flop :config="config1" style="width: 10rem;height: 3rem;font-size: 1.8rem;" />
                                <div class="text">本月销售总额</div>
                                <div class="df-c">
                                    <!-- 盈利 -->
                                    <div class="profit df-c">
                                        <img class="curve" src="../../assets/image/icon-top.png" alt="">
                                        10%
                                    </div>
                                    <div>{{lossText}}</div>
                                </div>
                            </div>
                        </div>
                        <dv-decoration-3 style="width:20rem;height:2rem; margin: 2rem 0;" />
                        <div class="order-trend-num df-c">
                            <img src="../../assets/image/icon-television.png" alt="">
                            <div class="num ml-10">
                                <dv-digital-flop :config="config1" style="width: 10rem;height: 3rem;font-size: 1.8rem;" />
                                <div class="text">本月销售总额</div>
                                <div class="df-c">
                                    <!-- 亏损 -->
                                    <div class="loss df-c">
                                        <img class="curve" src="../../assets/image/icon-bottom.png" alt="">
                                        3%
                                    </div>
                                    <div>{{lossText}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="echarts" ref="echartSell"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return{
            orderText:'同比上周',
            lossText:'同比上周',
            config:{
                number: [100],
                toFixed: 2,
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'#fff'
                }
            },
            config1:{
                number: [100],
                toFixed: 2,
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'black'
                }
            },
            isCollapse: true,
            isCollapses: true
        }
    },
    // 接口
    created(){
        setTimeout( ()=>{
            this.power(360);
        },1000);
    },
    // 方法
    methods:{
        power(n){
            this.config.number[0] = Math.floor((Math.random() * n) + 1);
            this.config = {...this.config};//对象解构，更新props
        },
        orderTrend(e){
            console.log(e);//本周true
            var chartDom = this.$refs.echartOrder;
            var myChart = echarts.init(chartDom);
            var option;

            option = {
            title: {
                text: '订单数'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['订单总数', '线下订单数', '线上订单数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ["周六","周日","周一","周二","周三","周四","周五"]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                name: '订单总数',
                type: 'line',
                stack: 'Total',
                data: e==false?[320, 132, 401, 234, 690, 130, 10] : [120, 532, 101, 134, 90, 230, 210] 
                },
                {
                name: '线下订单数',
                type: 'line',
                stack: 'Total',
                data: e==false?[234,234,6546,665,7,744,4]: [150, -10, 201, 154, 190, 330, 410]
                },
                {
                name: '线上订单数',
                type: 'line',
                stack: 'Total',
                data: e==false?[343,654,77,878,98,35,7] :[320, 232, 301, 334, 390, 330, 320]
                },
            ]
            };        
            option && myChart.setOption(option);
            this.orderText = e==false?'同比本月':'同比本周'

        },
        sellTrend(e){
            var chartDom = this.$refs.echartSell;
            var myChart = echarts.init(chartDom);
            var option;

            option = {
            title: {
                text: '销售额'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['销售总额', '线上销售额', '线下销售额']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ["周六","周日","周一","周二","周三","周四","周五"]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                name: '销售总额',
                type: 'line',
                stack: 'Total',
                data: e==false?[34,435,1212,34,634,34,346]:[100, 532, 1, 334, 190, 230, 20],
                itemStyle: {
                    normal: {
                        color: '#a80000', //改变折线点的颜色
                        lineStyle: {
                            color: '#a80000' //改变折线颜色
                        }
                    }
			    },
                },
                {
                name: '线上销售额',
                type: 'line',
                stack: 'Total',
                data: e==false?[234,56,23,634,63,452,5]:[50, 200, -1, 154, 290, 530, 410],
                itemStyle:{
                    normal:{
                        color:'#00a2e0',
                        lineStyle:{
                            color:'#00a2e0'
                        }
                    }
                }
                },
                {
                name: '线下销售额',
                type: 'line',
                stack: 'Total',
                data: e==false?[144,435,543,1,-34,34,4]:[320, 262, 601, 893, 30, 30, 320],
                itemStyle:{
                    normal:{
                        color:'#3abe9e',
                        lineStyle:{
                            color:'#3abe9e'
                        }
                    }
                }
                },
            ]
            };        
            option && myChart.setOption(option);
            this.lossText = e==false?'同比上月':'同比上周'
        }
    },
    mounted(){
        this.orderTrend();
        this.sellTrend();
    }
}
</script>

<style scoped>
.mg-15{
    margin: 1.5rem;
}
.mb-10{
    margin-bottom: 1rem;
}
.ml-20{
    margin-left: 2rem;
}
.bj-1{
    background-color: #4ac1bf;
}
.bj-2{
    background-color: #44a2fc;
}
.bj-3{
    background-color: #90c338;
}
.ml-10{
    margin-left: 1rem;
}
.bj-4{
    background-image: linear-gradient(to right,#f5715c,#f48760,#f19d61);
}

.df-sb{
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
}
.df-fd{
    display: flex;
    flex-direction: column;
    gap: 4rem;
}
.df{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    align-items: center;
    gap: 2rem;
}
.df-c{
    display: flex;
    align-items: center;
}
.mb-30{
    margin-bottom: 3rem;
}



.box{
    background-color: #f3f3f3;
    height: 100vh;
    overflow: scroll;
}
.sale-overview{
    background-color: #fff;
    border-radius: .4rem;
    padding: 2rem;
}
.sale-content{
    display: flex;
    align-items: center;
    color: #fff;
    border-radius: .4rem;
    padding: 2rem 3rem;
}
.sale-content img{
    width: 5rem;
    height: 5rem;
}
:deep(.el-radio-button__inner){
    padding: .5rem 1rem;
    font-size: 1.5rem;
}
:deep(.el-radio-button:first-child .el-radio-button__inner){
    border-radius: .2rem 0 0 .2rem;
}
:deep(.el-radio-button:last-child .el-radio-button__inner){
    border-radius:  0 .2rem .2rem 0;
}
:deep(.el-radio-button__orig-radio:checked+.el-radio-button__inner){
    color: #FFF;
    background-color: #2a2e49;
    border-color: #00001f;
    box-shadow: -1px 0 0 0 #2a2e49;
}
.order-trend-num img{
    width: 4rem;
    height: 4rem;
}
.order-trend-num .num{
    color: #ccc;
    font-size: 1.5rem;
    text-align: center;
}
.profit{
    color: #fff;
    font-size: 1.5rem;
    padding: .2rem .4rem;
    border-radius: .4rem;
    background-color: #5dc9af;
}
.loss{
    color: #fff;
    font-size: 1.5rem;
    padding: .2rem .4rem;
    border-radius: .4rem;
    background-color: #fb604a;
}
.echarts{
    width: 140rem;
    height: 50rem;
}
.curve{
    width: 2rem !important;
    height: 2rem !important;
}
</style>
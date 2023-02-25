<template>
    <dv-full-screen-container>
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
                            <dv-digital-flop :config="config1" style="width: 10rem;height: 5rem;font-size: 1.8rem;" />
                            <div class="sale-text">今日销售总额</div>
                        </div>
                    </div>
                    <div class="sale-content bj-3">
                        <img src="../../assets/image/yesterday-money.png" alt="">
                        <div class="sale-num ml-20">
                            <dv-digital-flop :config="config2" style="width: 10rem;height: 5rem;font-size: 1.8rem;" />
                            <div class="sale-text">昨日销售总额</div>
                        </div>
                    </div>
                    <div class="sale-content bj-4">
                        <img src="../../assets/image/icon-wallet.png" alt="">
                        <div class="sale-num ml-20">
                            <dv-digital-flop :config="config3" style="width: 10rem;height: 5rem;font-size: 1.8rem;" />
                            <div class="sale-text">近7天销售总额</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 线上购买用户总揽 -->
            <div class="sale-overview mb-10">
                <div class="mb-30">
                    <div class="sale-title">线上购买用户总揽</div>
                </div>
                <div class="on-line_user">
                    <div class="on-line_num df">
                        <div class="num">
                            <dv-digital-flop :config="toDay" style="width: 10rem;height: 5rem;" />
                            <div class="text df-c ml-5">
                                <div class="bj-1 br"></div>
                                <div class="ml-5">今日新增</div>
                            </div>
                        </div>
                        <div class="num">
                            <dv-digital-flop :config="toDay" style="width: 10rem;height: 5rem;" />
                            <div class="text df-c ml-5">
                                <div class="on-line_bj br"></div>
                                <div class="ml-5">昨日新增</div>
                            </div>
                        </div>
                        <div class="num">
                            <dv-digital-flop :config="toDay" style="width: 10rem;height: 5rem;" />
                            <div class="text df-c ml-5">
                                <div class="on-line_bj2 br"></div>
                                <div class="ml-5">本月新增</div>
                            </div>
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
                                <dv-digital-flop :config="orderTrendNum" style="width: 10rem;height: 3rem;font-size: 1.8rem;" />
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
                        <dv-decoration-6 style="width:20rem;height:2rem; margin: 2rem 0;" />
                        <div class="order-trend-num df-c">
                            <img src="../../assets/image/icon-television.png" alt="">
                            <div class="num ml-10">
                                <dv-digital-flop :config="orderLossNum" style="width: 10rem;height: 3rem;font-size: 1.8rem;" />
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
                    <!-- <div class="echarts" ref="echartOrder"></div> -->
                    <echarts-view :e="isCollapse" :type="1"></echarts-view>
                </div>
            </div>
            <!-- 销售趋势 -->
            <div class="sale-overview mb-30">
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
                                <dv-digital-flop :config="sellProfitNum" style="width: 10.5rem;height: 3rem;font-size: 1.8rem;" />
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
                                <dv-digital-flop :config="sellLossNum" style="width: 10.5rem;height: 3rem;font-size: 1.8rem;" />
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
                    <!-- <div class="echarts" ref="echartSell"></div> -->
                    <echarts-view :e="isCollapses" :type="2"></echarts-view>
                </div>
            </div>
        </div>
    </div>
    </dv-full-screen-container>
</template>

<script>
import * as echarts from 'echarts';
import echartsView from './echartsView.vue';
export default {
    components:{
        echartsView
    }, 
    data() {
        return{
            orderText:'同比上周',
            lossText:'同比上周',
            toDay:{
                number: [0],
                toFixed: 2,
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'black'
                }
            },
            config:{
                number: [0],
                toFixed: 2,
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'#fff'
                }
            },
            config1:{
                number: [0],
                toFixed: 2,
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'#fff'
                }
            },
            config2:{
                number: [0],
                toFixed: 2,
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'#fff'
                }
            },
            config3:{
                number: [0],
                toFixed: 2,
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'#fff'
                }
            },
            sellProfitNum:{
                number: [0],
                toFixed: 2,
                content: '${nt}',
                style:{
                    fontSize:20,
                    fill:'black'
                }
            },
            sellLossNum:{
                number: [0],
                toFixed: 2,
                content: '${nt}',
                style:{
                    fontSize:20,
                    fill:'black'
                }
            },
            orderTrendNum:{
                number: [0],
                toFixed: 2,
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'black'
                }
            },
            orderLossNum:{
                number: [0],
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
        },200);
    },
    // 方法
    methods:{
        power(n){
            this.config.number[0] = Math.floor((Math.random() * n) + 1);
            this.config = {...this.config};//对象解构，更新props
            this.config1.number[0] = 300;
            this.config1 = {...this.config1};//对象解构，更新props
            this.config2.number[0] = 2343;
            this.config2 = {...this.config2};//对象解构，更新props
            this.config3.number[0] = 567;
            this.config3 = {...this.config3};//对象解构，更新props

            this.orderTrendNum.number[0] = 2000;
            this.orderTrendNum = {...this.orderTrendNum};
            this.orderLossNum.number[0] = 1200;
            this.orderLossNum = {...this.orderLossNum};
            this.sellProfitNum.number[0] = 6200;
            this.sellProfitNum = {...this.sellProfitNum};
            this.sellLossNum.number[0] = 2200;
            this.sellLossNum = {...this.sellLossNum};
            this.toDay.number[0] = 5670;
            this.toDay = {...this.toDay};
        },
        orderTrend(e){
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
                data: e==false?["02-01","02-02","02-03","02-04","02-05","02-06","02-07","02-08","02-09","02-10","02-11" ,"02-12","02-13","02-14"
                ,"02-15","02-16","02-17","02-18","02-19","02-20","02-21","02-22","02-23","02-24"
                ]
                :
                ["周六","周日","周一","周二","周三","周四","周五"]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                name: '订单总数',
                type: 'line',
                stack: 'Total',
                data: e==false?[320, 132, 401, 234, 690, 130, 10,34,325,12,13,345,423,64,345,62,255,222,534,7,224,5] : [120, 532, 101, 134, 90, 230, 210] 
                },
                {
                name: '线下订单数',
                type: 'line',
                stack: 'Total',
                data: e==false?[234,234,6546,665,7,744,4,52,42,324,235,42,56,265,62,52,62,24,523,543,52,252,24,5,21,3]: [150, -10, 201, 154, 190, 330, 410]
                },
                {
                name: '线上订单数',
                type: 'line',
                stack: 'Total',
                data: e==false?[343,654,77,878,98,35,7,324,423,3,4,444,4,524,52,6,44,6,24,4,426,64,532,543,24,24,78] :[320, 232, 301, 334, 390, 330, 320]
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
                data:e==false?["02-01","02-02","02-03","02-04","02-05","02-06","02-07","02-08","02-09","02-10","02-11" ,"02-12","02-13","02-14"
                ,"02-15","02-16","02-17","02-18","02-19","02-20","02-21","02-22","02-23","02-24"
                ]: ["周六","周日","周一","周二","周三","周四","周五"]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                name: '销售总额',
                type: 'line',
                stack: 'Total',
                data: e==false?[34,435,1212,34,634,34,346,45,45,4,5,48,189,14,8,4,,1,81,146,18,48,,8,504,122,71,451]:[100, 532, 1, 334, 190, 230, 20],
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
                data: e==false?[234,56,23,634,63,452,5,14,14,151,5,187,1,68,18,71,1,781,781,64,8,26,58,2,841,6,45,99]:[50, 200, -1, 154, 290, 530, 410],
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
                data: e==false?[144,435,543,1,-34,34,4,18,187,41,84,848,46,498,1125,18,1,518,818,1,18,5,59,41,125,51]:[320, 262, 601, 893, 30, 30, 320],
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
        this.orderTrend(this.isCollapse);
        this.sellTrend(this.isCollapses);
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
.ml-5{
    margin-left: .5rem;
}

.box{
    background-color: #f3f3f3;
    height: 100%;
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
    width: 150rem;
    height: 50rem;
}
.curve{
    width: 2rem !important;
    height: 2rem !important;
}
.br{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0 .4rem 0 .4rem;
}
.on-line_bj{
    background-color: #feb000;
}
.on-line_bj2{
    background-color: #1db3e5;
}
</style>
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
                <div class="">
                    <div class="sale-title">线上购买用户总揽</div>
                </div>
                    <div class="on-line_num df">
                        <div class="num">
                            <dv-digital-flop :config="toDay" style="width: 10rem;height: 5rem;" />
                            <div class="text df-c">
                                <div class="bj-1 br"></div>
                                <div class="ml-5">今日新增</div>
                            </div>
                        </div>
                        <div class="num">
                            <dv-digital-flop :config="toDay" style="width: 10rem;height: 5rem;" />
                            <div class="text df-c">
                                <div class="on-line_bj br"></div>
                                <div class="ml-5">昨日新增</div>
                            </div>
                        </div>
                        <div class="num">
                            <dv-digital-flop :config="toDay" style="width: 10rem;height: 5rem;" />
                            <div class="text df-c">
                                <div class="on-line_bj2 br"></div>
                                <div class="ml-5">本月新增</div>
                            </div>
                        </div>
                        <div class="on-line_num df-c">
                            <jigsaw-puzzle-view></jigsaw-puzzle-view>
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
                                    <div class="ml-5">{{orderText}}</div>
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
                                    <div class="ml-5">{{orderText}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <echarts-view ref="funs" :e="isCollapse" :type="1"></echarts-view>
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
                                <dv-digital-flop :config="sellProfitNum" style="width: 10.5rem;height: 3rem;font-size: 1.8rem;" />
                                <div class="text">本月销售总额</div>
                                <div class="df-c">
                                    <!-- 盈利 -->
                                    <div class="profit df-c">
                                        <img class="curve" src="../../assets/image/icon-top.png" alt="">
                                        10%
                                    </div>
                                    <div class="ml-5">{{lossText}}</div>
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
                                    <div class="ml-5">{{lossText}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <echarts-view ref="fun" :e="isCollapses" :type="2"></echarts-view>
                </div>
            </div>
        </div>
    </div>
    </dv-full-screen-container>
</template>

<script>
import echartsView from './echartsView.vue';
import jigsawPuzzleView from './jigsawPuzzleView.vue';
export default {
    components:{
        echartsView,
        jigsawPuzzleView
    }, 
    data() {
        return{
            orderText:'同比上周',
            lossText:'同比上周',
            toDay:{
                number: [0],
                toFixed: 2,textAlign:'left',
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
                textAlign:'left',
                style:{
                    fontSize:20,
                    fill:'#fff'
                }
            },
            config1:{
                number: [0],
                toFixed: 2,
                textAlign:'left',
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'#fff'
                }
            },
            config2:{
                number: [0],
                toFixed: 2,textAlign:'left',
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'#fff'
                }
            },
            config3:{
                number: [0],
                toFixed: 2,textAlign:'left',
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'#fff'
                }
            },
            sellProfitNum:{
                number: [0],
                toFixed: 2,textAlign:'left',
                content: '${nt}',
                style:{
                    fontSize:20,
                    fill:'black'
                }
            },
            sellLossNum:{
                number: [0],
                toFixed: 2,textAlign:'left',
                content: '${nt}',
                style:{
                    fontSize:20,
                    fill:'black'
                }
            },
            orderTrendNum:{
                number: [0],
                toFixed: 2,textAlign:'left',
                content: '{nt}',
                style:{
                    fontSize:20,
                    fill:'black'
                }
            },
            orderLossNum:{
                number: [0],
                toFixed: 2,textAlign:'left',
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
            console.log('asdf');
            if (this.$refs.funs == undefined) {
                return
            }else{
                let fn = this.$refs.funs.sellTrend;
                fn(e);
            }
            this.orderText = e==false?'同比本月':'同比本周'
        },
        sellTrend(e){
            // console.log(this.$refs.fun.orderInfo);
            if (this.$refs.fun == undefined) {
                return
            }else{
                let fn = this.$refs.fun.orderInfo;
                fn(e);
            }
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
.df-s{
    display: flex;
    align-items: center;
    gap: 5rem;
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
    height: 95%;
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
<template>
    <div class="box">
        <div class="box-content mg-30">
            <!-- 销售总揽 -->
            <div class="sale-overview">
                <div class="sale-title">销售总揽</div>
                <div class="sale content">
                    <img src="../../assets/image/icon-order.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    // 接口
    created(){

    },
    // 方法
    methods:{

    },
}
</script>

<style scoped>
.mg-30{
    margin: 1.5rem;
}
.box{
    background-color: #f3f3f3;
    height: 100vh;
    overflow: hidden;
}
.sale-overview{
    background-color: #fff;
    border-radius: .4rem;
}
.sale-overview .sale-title{
    padding: 2rem;
}
</style>
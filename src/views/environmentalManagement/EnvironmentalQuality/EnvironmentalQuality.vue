<!-- 环境质量 -->
<template>
    <div class="environmental-quality">
        <!-- 录播图 -->
        <div class="swiper">
            <el-carousel :autoplay="false" type="card" height="80vh" @change="changeSwiper" ref="carousel">
                <el-carousel-item v-for="item in tabs" :key="item.id" :label="item.lable" @setActiveItem="setActiveItem">
                    <dv-border-box-8>dv-border-box-8</dv-border-box-8>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- tabs切换轮播 -->
        <div class="environmental-wrap">
            <div :class='{ "environmental-item": true, "environmental-item_active": item.isActive, }' v-for="item in  tabs"
                :key="item.id" @click="changeTab(item.id)">
                {{ item.lable }}
            </div>
        </div>
    </div>
</template>
  
<script >


export default {
    name: 'environmentalQuality',
    data() {
        return {
            tabs: [{
                id: 0,
                lable: '空气',
                isActive: true,
            }, {
                id: 1,
                lable: '水质',
                isActive: false,
            }, {
                id: 2,
                lable: '土壤',
                isActive: false,
            }],
            active: 2,
        }
    },
    mounted() {

    },
    methods: {
        changeSwiper(e) {
            this.tabs.forEach(item => {
                item.isActive = false;
            });
            this.tabs[e].isActive = true;
        },
        setActiveItem(index) {
            this.$refs.carousel.setActiveItem(index);
        },
        changeTab(index) {
            if (this.active === index) {
                return;
            }
            this.active = index;
            this.setActiveItem(index);
        },
    },
}
</script>
  
<style scoped>
.environmental-quality {
    display: grid;
    grid-template-rows: 80vh 20vh;
    background: url(@/assets/images/xk1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}


.el-carousel__item {
    background-color: #5ca0ff69;
}

:deep(.el-carousel__indicators) {
    display: none !important;
}

.environmental-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.environmental-item {
    font-size: 2.2rem;
    position: relative;
    color: transparent;
    font-style: italic;
    font-weight: 900;
    letter-spacing: 0.25vw;
    background: linear-gradient(183deg, #FFf 35%, #3FB4FF);
    background-clip: text;
    -webkit-background-clip: text;
}

.environmental-item_active {
    font-size: 2.8rem;
}
</style>
  
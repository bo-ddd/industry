<template>
    <div class="home">
            <div class="header">能源管理
                <div><dv-decoration-5 style="width:30rem;height:4rem;" /></div>
            </div>

            <div class="main">
                <dv-border-box-1 style="min-width: 190rem;">
                    <div class="main-top">
                        <div class="monthly-statistics">
                            <dv-water-level-pond :config="config3" style="width:15rem;height:22rem" />
                            <dv-water-level-pond :config="config4" style="width:15rem;height:22rem" />
                            <dv-water-level-pond :config="config5" style="width:15rem;height:22rem" />
                        </div>
                        <div><dv-capsule-chart :config="config1" style="width:40rem;height:30rem" /></div>
                        <fre-quency></fre-quency>
                    </div>
                </dv-border-box-1>

                <dv-border-box-8 style="min-width: 180rem;">
                    <div class="main-bottom_box">
                        <div class="main-bottom">
                            <monitor></monitor>
                            <sataus></sataus>
                            <div class="table">
                                <dv-scroll-board :config="config" style="width:40rem;height:100%" />
                            </div>
                        </div>
                    </div>
                </dv-border-box-8>
            </div>
     
    </div>
</template>
  
<script>
import freQuency from "../../../components/energyManagement/freQuency.vue";
import monitor from "../../../components/energyManagement/monitor.vue";
import sataus from "../../../components/energyManagement/status.vue";
export default {
    components: {
        freQuency, monitor, sataus
    },
    data() {
        return {
            config: {
                data: [
                    ['2023.11.2.', '一号水管', '爆管'],
                    ['2023.11.2.', '二号机电', '电路故障'],
                    ['2023.11.2.', '四号机水管', '漏水'],
                    ['2023.11.2.', '一号水管', '爆管'],
                    ['2023.11.2.', '二号机电', '电路故障'],
                    ['2023.11.2.', '四号机水管', '漏水'],
                ]
            },
            config1: {
                data: [
                    {
                        name: '1号机',
                        value: 167
                    },
                    {
                        name: '2号机',
                        value: 67
                    },
                    {
                        name: '3号机',
                        value: 123
                    },
                    {
                        name: '4号机',
                        value: 55
                    },
                    {
                        name: '5号机',
                        value: 98
                    }
                ]
            },
            config3: {
                data: [66, 45],
                shape: 'roundRect'
            },
            config4: {
                data: [20, 45],
                shape: 'roundRect'
            },
            config5: {
                data: [0, 0],
                shape: 'roundRect'
            }
        }
    },
}

</script>
  
<style lang="scss" scoped>
.home {
    background-color: #0C1F34;
    height: calc(100vh - 4rem);
    color: white;
    padding: 2rem 0;
}

.header {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
}

.main{
    width: 100%;
}

.monthly-statistics {
    display: flex;
    justify-content: center;
    gap: 0 3rem;
}


.main-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8rem;
    height: calc(50vh - 1.5rem);
}

.main-bottom_box {
    height: calc(50vh - 8rem);
    display: flex;
    align-items: center;
    justify-content: center;
   
}

.main-bottom {
    display: flex;
    justify-content: space-between;
    gap: 0 3rem;
    height: 90%;
    width: 90%;
}
</style>
  
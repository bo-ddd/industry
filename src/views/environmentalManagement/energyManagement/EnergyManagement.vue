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
                                <dv-scroll-board :config="config" style="width:30rem;height:100%" />
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
                    ['行1列1', '行1列2', '行1列3'],
                    ['行2列1', '行2列2', '行2列3'],
                    ['行3列1', '行3列2', '行3列3'],
                    ['行4列1', '行4列2', '行4列3'],
                    ['行5列1', '行5列2', '行5列3'],
                    ['行6列1', '行6列2', '行6列3'],
                    ['行7列1', '行7列2', '行7列3'],
                    ['行8列1', '行8列2', '行8列3'],
                    ['行9列1', '行9列2', '行9列3'],
                    ['行10列1', '行10列2', '行10列3']
                ]
            },
            config1: {
                data: [
                    {
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 67
                    },
                    {
                        name: '漯河',
                        value: 123
                    },
                    {
                        name: '郑州',
                        value: 55
                    },
                    {
                        name: '西峡',
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
    padding: 2rem;
}

.header {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
}

.monthly-statistics {
    display: flex;
    gap: 2rem;
    margin-left: 2rem;
    justify-content: center;
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
  
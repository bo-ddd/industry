<template>
    <dv-digital-flop :config="config" style="width:10rem;height:3rem;" />
</template>

<script>
export default {
    props: ['number'],
    data() {
        return {
            config: {
                number: [this.number],//初始数据
                content: '{nt}',
                style: {
                    //这里可以修改默认样式
                    fontSize: 28,//字体大小
                    fill: '#43FAFC'//字体颜色
                }
            }
        }
    },
    methods: {
    },
}

</script>

<style scoped></style>
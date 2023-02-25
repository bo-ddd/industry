<template>
    <div class="main">
        <div class="item">
            <div class="title">预警类型比例</div>
        </div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
</template>

<script>
export default {
    name: 'hiddenDangerDetail',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 100vh;
    background-color: black;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
        "left-aside_1 left-aside_1 center_1 center_1 center_1 right-aside_1 right-aside_1"
        "left-aside_1 left-aside_1 center_2 center_2 center_2 right-aside_1 right-aside_1"
        "left-aside_2 left-aside_2 center_2 center_2 center_2 right-aside_2 right-aside_2"
        "left-aside_2 left-aside_2 center_2 center_2 center_2 right-aside_2 right-aside_2"
}

.item {
    padding: 0 1rem;
    font-size: 2rem;
    box-sizing: border-box;
}

.item:nth-of-type(1) {
    grid-area: left-aside_1;
}

.item:nth-of-type(2) {
    grid-area: left-aside_2;
}

.item:nth-of-type(3) {
    grid-area: center_1;
}

.item:nth-of-type(4) {
    grid-area: center_2;
}

.item:nth-of-type(5) {
    grid-area: right-aside_1;
}

.item:nth-of-type(6) {
    grid-area: right-aside_2;
}

.title {
    width: 100%;
    color: white;
}
</style>
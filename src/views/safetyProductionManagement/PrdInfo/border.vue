<style scoped>
.border {
    width: 100% !important;
    height: 100% !important;
    position: relative;
}

.border .content {
    width: 100% !important;
    height: 100% !important;
}

.border .item {
    position: absolute;
    width: 30%;
    height: 30%;
}

.border .item:nth-of-type(1) {
    border-top: .1rem solid #61c2cb;
    border-left: .1rem solid #61c2cb;
    top: 0;
    left: 0;
}

.border .item:nth-of-type(2) {
    border-right: .1rem solid #61c2cb;
    border-top: .1rem solid #61c2cb;
    top: 0;
    right: 0;
}

.border .item:nth-of-type(3) {
    border-bottom: .1rem solid #61c2cb;
    border-left: .1rem solid #61c2cb;
    bottom: 0;
    left: 0;
}

.border .item:nth-of-type(4) {
    border-bottom: .1rem solid #61c2cb;
    border-right: .1rem solid #61c2cb;
    bottom: 0;
    right: 0;
}
</style>

<template>
    <div class="border">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

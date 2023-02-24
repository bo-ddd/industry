<template>
    <div class="main">
        <dv-border-box-11 title="乌拉拉工业园区平台" titleHeight="500" class="dv-box">
            <div class="box-login">
                <dv-border-box-13 class="dv-login">
                    <div>
                        <div class="login">登录</div>
                        <dv-decoration-8 class="dv-8" style="width:30rem;height:5rem;" />
                    </div>
                    <div class="box-inp">

                        <div class="box">
                            <div class="mr-2">账户</div>
                            <input class="inp" type="text" value="admin">
                        </div>
                        <div class="box">
                            <div class="mr-2">密码</div>
                            <input class="inp" type="password" value="">
                        </div>

                    </div>
                    <div class="btn" @click="toPage()"><dv-decoration-11
                            style="width:20rem;height:6rem;">登入平台</dv-decoration-11></div>
                </dv-border-box-13>

            </div>
        </dv-border-box-11>

    </div>
</template>

<script>

export default {

    data() {
        return {

        }
    },
    methods: {
        toPage() {
            this.$router.push({
                name: "Home",
            });
        }
    }
};
</script>

<style scoped>
.box {
    width: 40rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
}

.main {
    width: 100vw;
    height: 100vh;
    background-image: url("../../assets/images/xk2.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #2e77f8;

}

.mr-2 {
    margin-right: 2rem;
}

.box-login {
    width: 60rem;
    height: 40rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.box-inp {
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    top: 16%;
    left: 16%;
}

.dv-box {
    width: 100%;
    position: relative;
}

.dv-login {
    box-sizing: border-box;
    padding: 2rem;

}

.login {
    display: flex;
    justify-content: center;
    color: white;
    font-size: 3rem;
    position: relative;
}

.dv-8 {
    position: absolute;
    top: 5%;
    left: 22%;
}

.inp {
    text-indent: 2em;
    color: white;
    width: 30rem;
    height: 4rem;
    background: none;
    outline: none;
    border-bottom: 1px solid #ccc;
}

.btn {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 75%;
    left: 32%;
}</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //刷新页面时判断token是否失效
    ifToken() {
      let time = sessionStorage.getItem("time");
      if (time == null) {
        console.log("第一次打开");
      } else {
        this.$store.dispatch("refresh").then((res) => {
          sessionStorage.setItem("token", res.data.data.access_token);
          sessionStorage.setItem("time", new Date().getTime());
        });
      }
    },
    // console.log(new Date(nowTime).getTime());
  },

  created() {
    console.log('当前页面');
    console.log(this.$route);
    if (this.$route.name == "login") {
      console.log('登录页');
      sessionStorage.clear();
    } else {
      console.log('非登录');
      //进入页面第一时间调用
      this.ifToken();
    }
  },
  //监听
  watch: {
    // 监听vuex中的token的变化
    "$store.state.token": function (newName, oldName) {
      console.log("开始");
      //倒计时八分钟获取新token
      setTimeout(() => {
        this.$store.dispatch("refresh");
      }, 480000);
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>

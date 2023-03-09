<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getToken } from "@/api/api";
export default {
  data() {
    return {};
  },
  methods: {
    getHourDate(n, a) {
      var myDate = a == null ? new Date() : a;
      //延长时间
      myDate.setMinutes(myDate.getMinutes() + n);
      var year = myDate.getFullYear();
      var month = myDate.getMonth() + 1;
      var day = myDate.getDate();
      var hour = myDate.getHours(); //获取时，
      var min = myDate.getMinutes(); //分
      var seconds = myDate.getMinutes(); //秒
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (min < 10) {
        min = "0" + min;
      }
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      var mytime =
        year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + seconds;
      //console.log("返回的时分秒="+mytime);
      return mytime;
    },
    //刷新页面时判断token是否失效
    ifToken() {
      let time = sessionStorage.getItem("time")
      console.log(Number(time)+488000);
      
      if (time == null) {
        console.log("第一次打开");
      } else {
        let nowTime = new Date().getTime()
        console.log(nowTime);
        
console.log(Number(time)+488000);
        if (Number(time)+488000 < nowTime ) {
          console.log("刷新页面时token失效");
          this.$router.push({
            name: "login",
          });
        } else {
          getToken({}).then((res) => {
            this.$store.state.token = res.data.data.access_token;
            sessionStorage.setItem("token", res.data.data.access_token);
            this.$store.state.time = new Date().getTime();
            console.log(res.data.data.access_token);
          });
          console.log("刷新页面时token未失效");
        }
      }
      // console.log(new Date(nowTime).getTime());
    },
  },
  computed: {
    Token() {
      return this.$store.state.token;
    },
  },
  created() {
    //进入页面第一时间调用
    this.ifToken();
  },
  //监听
  watch: {
    // 监听vuex中的token的变化
    Token(newName, oldName) {
      //倒计时八分钟获取新token

      setTimeout(() => {
        console.log("重新获取token");
        getToken({}).then((res) => {
          this.$store.state.token = res.data.data.access_token;
          this.$store.state.time = new Date(this.getHourDate(0)).getTime();
          sessionStorage.setItem("token", res.data.data.access_token);
        });
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

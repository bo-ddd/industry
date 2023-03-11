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
    timeIntervalToString(timeInterval) {
      var totalMinute = parseInt(timeInterval / 60); //总分钟数
      var day = parseInt(parseInt(totalMinute / 60) / 24);
      var hour = parseInt((totalMinute - day * 24 * 60) / 60);
      var minute = totalMinute - day * 24 * 60 - hour * 60;
      var retData = "";
      if (day != 0) {
        retData += day + "天";
      }
      if (hour != 0) {
        retData += hour + "小时";
      }
      if (minute != 0) {
        retData += minute + "分";
      }
      if (minute == 0) {
        retData += "1分钟内";
      }
      return retData;
    },

    //刷新页面时判断token是否失效
    ifToken() {
      let time = sessionStorage.getItem("time");

      if (time == null) {
        console.log("第一次打开");
      } else {
       this.$store.dispatch('refresh')
      }
    },
    // console.log(new Date(nowTime).getTime());
  },

  created() {
    //进入页面第一时间调用
    this.ifToken();
  },
  //监听
  watch: {
    // 监听vuex中的token的变化
    "$store.state.token":function(newName, oldName) {
      console.log('开始');
      //倒计时八分钟获取新token
      setTimeout(() => {

        this.$store.dispatch("refresh");
        }, 480000)
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

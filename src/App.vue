<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import { getToken } from "@/api/api";
export default {
    data(){
      return {

      }
    },
    methods:{
      //刷新页面时判断token是否失效
      ifToken(){
       let time = sessionStorage.getItem('time')
       let nowTime = new Date().getTime()
      //  console.log(nowTime - time);
        if (time < nowTime ) {
          this.$router.push({
                name: "login",
            });
        }else{

          getToken({}).then(res => {
              this.$store.state.token = res.data.data.access_token
              sessionStorage.setItem("token", res.data.data.access_token);
              console.log(res.data.data.access_token);
             })
        }
      }

    },
    computed:{
		Token(){
			return this.$store.state.token
		},
	},
  created(){
    //进入页面第一时间调用
     this.ifToken()
  },
  //监听
    watch:{
      // 监听vuex中的token的变化
      // Token(newName, oldName){
        //倒计时八分钟获取新token
      //   setTimeout(() => {
      //      getToken({}).then(res => {
      //       this.$store.state.token = res.data.data.access_token
      //       sessionStorage.setItem("token", res.data.data.access_token);
      //      })
      //    }, 480000);
      //   }
    }
}

</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
</style>

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
      getHourDate(n){
                    var myDate = new Date(); //实例一个时间对象；                    
                    //延长时间
                    myDate.setMinutes(myDate.getMinutes()+n);
                    var year = myDate.getFullYear();
                    var month = myDate.getMonth();
                    var day = myDate.getDate();
                    var hour=myDate.getHours(); //获取时，
                    var min=myDate.getMinutes(); //分                    
                    var seconds="00"; //秒
                //    console.log("获取时="+hour+"=分="+min+"=秒="+seconds);
                    if (hour<10) {
                        hour= "0"+hour;
                    }
                    if(min<10){
                        min="0"+min;
                    }
                    if(month<10){
                        month="0"+month;
                    }
                    if(day<10){
                        day="0"+day;
                    }
                    var mytime=year+"-"+month+"-"+day+" "+hour+":"+min+":"+seconds;  
                    //console.log("返回的时分秒="+mytime);
                    return mytime;
                },
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
      Token(newName, oldName){
        //倒计时八分钟获取新token
        setTimeout(() => {
           getToken({}).then(res => {
            this.$store.state.token = res.data.data.access_token
            this.$store.state.time = new Date(this.getHourDate(8)).getTime()
            sessionStorage.setItem("token", res.data.data.access_token);
           })
         }, 480000);
        }
    }
}

</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
</style>

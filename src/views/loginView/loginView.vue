<template>
        <div class="main">
            
            <dv-border-box-1 :color="['#245970','bule']">
                <div class="title">
                    <div class=" fs-3 cl-white pd-2">浮山双新园区智能管控</div>
                    <dv-decoration-5 class="dv-5"   style="width:80rem;height:10rem;" />
                </div>
                <div class="box-login">
                    <dv-border-box-13 class="dv-login">
                        <dv-border-box-8 :reverse="true">
                            <div>
                                <div class="login ">登录</div>
                                <dv-decoration-8 class="dv-8" style="width:30rem;height:5rem;" />
                            </div>
                            <div class="box-inp" :v-model="input">
                                
                                <div class="box">
                                    <div class="width mr-2 cl-white">账户</div>
                                    <el-input class="inp" v-model="input.username" placeholder="请输入账号"></el-input>
                                </div>
                                <div class="box">
                                    <div class="width mr-2 cl-white">密码</div>
                                    <el-input placeholder="请输入密码" class="inp" v-model="input.password" show-password></el-input>
                                </div>
                                
                            </div>
                            <div class="btn" @click="login()"><dv-decoration-9
                            style="width:10rem;height:10rem;">进入</dv-decoration-9></div>
                        </dv-border-box-8>
                </dv-border-box-13>
            </div>
            
            
        </dv-border-box-1>
    </div>
</template>

<script>
import { loginApi } from '@/api/api'
export default {

    data() {
        return {
            //登录inp.value
           input :{
            username:'',
            password:''
           }
        }
    },
    methods: {
        //封装消息提示方法
        loginMessage(text,type) {
        this.$message({
          showClose: true,
          message: text,
          type: type,
          duration:1500
        });
       
      },
      //延迟获取时间
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

      //跳转home页面
        toPage() {
            this.$router.push({
                name: "Home",
            });
        },
        //登录方法
        login() {
            //前端校验
           
            console.log( );

        if (!this.input.username) {
            this.loginMessage("用户名不能为空",'warning')
        }else if(!this.input.password){
            this.loginMessage("密码不能为空",'warning')
        }else {
            //调取登录接口
            loginApi({
              username: this.input.username,
              password: this.input.password,
            }).then(res => {

                if (res.status == 201) {
                    this.$store.state.time = new Date(this.getHourDate(8)).getTime()
                    this.$store.state.token = res.data.data.access_token
                    sessionStorage.setItem("token", res.data.data.access_token);
                    sessionStorage.setItem("time", new Date(this.getHourDate(8)).getTime());
                    this.loginMessage("登录成功",'success')
                    setTimeout(() => {
                        this.toPage()
                    }, 1500);
                }else{
                    this.loginMessage("服务器忙",'error')
                }
              }).catch(res => {
               if (res.response.status == 401) {
                    this.loginMessage("账号未授权",'error')
               }else{
                    this.loginMessage("服务器忙",'error')
                }
            })
        }
    },
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
.title{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.dv-5{
    position: absolute;
    top: 20%;
}
.main {
    width: 100vw;
    height: 100vh;
    background-image: url("https://unier.oss-cn-beijing.aliyuncs.com/industry/images/xk2.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #2e77f8;

}
.mt-1{
    margin-top: 1rem;
}
.mr-2 {
    margin-right: 2rem;
   
}
.width{
    width: 5rem;
}

.box-login {
    width: 60rem;
    height: 45rem;
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
    top: 20%;
    left: 15%;
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
    padding-top: 1rem;
}

.dv-8 {
    position: absolute;
    top: 8%;
    left: 22%;
}
.cl-white{
    color: white;
}
.fs-3{
    font-size: 3rem;
}

.pd-2{
    padding: 2rem;
}
.btn {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 70%;
    left: 41.5%;
}</style>
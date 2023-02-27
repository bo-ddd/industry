<template>
  <div class="box">
      <el-page-header class="pb-2" @back="goBack" content="公文管理">
    </el-page-header>
    <div class="aa">

        <div class="content">
            <el-container>
                <el-header style="height: 10rem" class=" titles">
                    <div class="cl-red title fs-5">浮山双新产业园区文件</div>
                    <div class="fs-2 text  mt-3">
                        <div>02334【2023】04号</div>
                        <div>签发人：耿磊</div>
                    </div>
                <div class="line mt-1"></div>
                </el-header>
                <el-main>
                    <div class="box-main">

                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    let id = this.$route.params.Id;
    console.log(id);
  },
};
</script>
<style scoped>
.box {
  padding: 2rem;
  box-sizing: border-box;
}
.mt-3 {
  margin-top: 3rem;
}
.el-header {
  padding: 0;
  height: 20rem;
}
.el-main {
  padding: 0;
}
.content{
    padding: 5rem;
    border: .1rem solid #ccc;
    width: 120rem;
    box-shadow: .1rem .8rem 2rem .1rem rgba(26, 23, 23, 0.7);;
   
}
.aa{
    display: flex;
    justify-content: center;
    align-items: center;
}
.fs-5{
    font-size: 5rem;
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cl-red{
    color: #d22828;
}
.line{
    width: 100%;
    border: .3rem solid #d22828 ;
}
.fs-2{
    font-size: 2rem;
}
.mt-1{
    margin-top: 1rem;
}
.text{
    box-sizing: border-box;
    padding: 0rem 1rem ;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
<template>
  <div class="meet">
    <h3 class="align-center">应急资源管理</h3>
    <div class="grid-box">
      <div class="grid-content flex-column-between">
        <div class="title">入库管理统计</div>
        <div>
          当日入库量
          <span class="num-25">123,456,789</span>
        </div>
        <div>
          当日入库量
          <span class="num-25">123,456,789</span>
        </div>
        <div>
          <div>
            上板数：
            <span>195956</span>
          </div>
          <div>
            上架数：
            <span>195956</span>
          </div>
        </div>
      </div>
      <div class="grid-content flex-column-between">
        <div class="title">货位管理统计</div>
        <div class="flex-around">
          <div>收货位：10471</div>
          <div>储货位：10471</div>
        </div>
        <div class="grid">
          <div class="item">
            <div class="num-25">6041</div>
            <div class="fs-15">可用单位</div>
          </div>
          <div class="item">
            <div class="num-25">6041</div>
            <div class="fs-15">可用单位</div>
          </div>
          <div class="item">
            <div class="num-25">6041</div>
            <div class="fs-15">可用单位</div>
          </div>
          <div class="item">
            <div class="num-25">6041</div>
            <div class="fs-15">可用单位</div>
          </div>
        </div>
        <div>
          <div>
            <div>收货位</div>
            <div>1041</div>
          </div>
          <div>
            <div>储货位</div>
            <div>1041</div>
          </div>
        </div>
      </div>
      <div class="grid-content flex-column-between">
        <div class="title">货位管理统计</div>
        <div>
        <div class="pl-9">24小时出货量</div>
        <div class="align-center num-9">1,234,567,890</div>
        </div>
        <div class="classBox flex-between">
          <div class="item">
            <div>
                <img src="" alt="">
            </div>
            <div>
            <div>商品品类</div>
            <div>122.5万</div>
            </div>
          </div>
          <div class="item">
            <div>商品品类</div>
            <div>122.5万</div>
          </div>
          <div class="item">
            <div>商品品类</div>
            <div>122.5万</div>
          </div>
          <div class="item">
            <div>商品品类</div>
            <div>122.5万</div>
          </div>
        </div>
        <div class="chat"></div>
      </div>
      <div class="grid-content">
        <div class="title">效绩预警</div>
        <div class="chat2"></div>
      </div>
      <div class="grid-content">
        <div class="title">库存总量统计</div>
        <div>
          <div>
            <div>商品品类</div>
            <div>122.5万</div>
          </div>
          <div>
            <div>商品品类</div>
            <div>122.5万</div>
          </div>
        </div>
        <div class="table"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.meet {
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #0f0c37, #0b1c48);
  color: white;
  font-size: 1.6rem;
}
h3 {
  font-size: 3rem;
  color: white;
  font-weight: normal;
}
.grid-box {
  display: grid;
  gap: 2.5rem 3.5rem;
  justify-content: center;
  grid-template-columns: 43.5rem 92.5rem 43.5rem;
  grid-template-rows: 42.5rem 50rem;
  grid-template-areas:
    "a c d"
    "b c e";
}
.grid-content {
  padding: 1.5rem;
  box-sizing: border-box;
  border: 0.2rem solid #20315d;
}
.grid-content:nth-of-type(1) {
  grid-area: a;
}

.grid-content:nth-of-type(2) {
  grid-area: b;
}

.grid-content:nth-of-type(3) {
  grid-area: c;
}

.grid-content:nth-of-type(4) {
  grid-area: d;
}

.grid-content:nth-of-type(5) {
  grid-area: e;
}
.title {
  font-size: 2rem;
  color: #f1f352;
}
.align-center {
  text-align: center;
}
.flex-column-between {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.flex-between{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-around{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.grid{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    justify-items: center;
}
.grid .item{
    padding: 2.5rem 0;
}
.classBox .item{
    /* width: 20rem; */
    padding: 3rem 2rem;
    background: red;
    display: flex;
    justify-content: space-between;
}
.num-25 {
  font-size: 2.5rem;
  color: #1a8df7;
}
.box-border {
  border: 1px solid #20315d;
}
.mt-25 {
  margin-top: 2.5rem;
}
.fs-15{
    font-size: 1.5rem;
}
.pl-9{
    padding-left: 9rem;
}
.align-center{
    text-align: center;
}
.num-9{
    font-size: 9rem;
    color: #ecf044;
}
</style>
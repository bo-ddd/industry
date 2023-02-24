<template>
  <div class="meet">
    <div class="meet-title flex-between">
      <div>
        <dv-decoration-8 style="width:300px;height:50px;" />
      </div>
      <div>
        <h3 class="text-center">应急资源管理</h3>
        <dv-decoration-5 style="width:300px;height:40px;" />
      </div>
      <div>
        <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
      </div>
    </div>
    <div class="grid-box">
      <div class="grid-content flex-column-between">
        <div class="title">入库管理统计</div>
        <div>
          当日入库量
          <span class="num-25 ml-2">123,456,789</span>
        </div>
        <div>
          当日入库量
          <span class="num-25 ml-2">123,456,789</span>
        </div>
        <div>
          <dv-capsule-chart class="capsule1" :config="config" />
        </div>
      </div>
      <div class="grid-content flex-column-between">
        <div class="title">货位管理统计</div>
        <div class="flex-around">
          <div class="font-blue">收货位：10471</div>
          <div class="font-blue">储货位：10471</div>
        </div>
        <div class="grid">
          <div class="item">
            <img src="@/assets/image/icon-goodsAllocation.png" alt />
            <div class="content">
              <div class="num-25">6041</div>
              <div class="fs-15">可用单位</div>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/image/icon-goodsAllocation.png" alt />
            <div class="content">
              <div class="num-25">6041</div>
              <div class="fs-15">可用单位</div>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/image/icon-gearWheel.png" alt />
            <div class="content">
              <div class="num-25">6041</div>
              <div class="fs-15">使用率</div>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/image/icon-gearWheel.png" alt />
            <div class="content">
              <div class="num-25">6041</div>
              <div class="fs-15">使用率</div>
            </div>
          </div>
        </div>
        <div>
          <dv-capsule-chart class="capsule2" :config="config2" />
        </div>
      </div>
      <div class="grid-content flex-column-between">
        <div class="title">货位管理统计</div>
        <div>
          <div class="pl-9">24小时出货量</div>
          <div class="text-center num-9">1,234,567,890</div>
        </div>
        <div class="classBox flex-between">
          <div class="item">
            <div>
              <img src="@/assets/image/icon-storeHouse.png" alt />
            </div>
            <div>
              <div class="title">商品品类</div>
              <div class="num mt-1">
                122.5
                <span class="unit">万</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <img src="@/assets/image/icon-storeHouse.png" alt />
            </div>
            <div>
              <div class="title">商品品类</div>
              <div class="num mt-1">
                122.5
                <span class="unit">万</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <img src="@/assets/image/icon-storeHouse.png" alt />
            </div>
            <div>
              <div class="title">商品品类</div>
              <div class="num mt-1">
                122.5
                <span class="unit">万</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <img src="@/assets/image/icon-storeHouse.png" alt />
            </div>
            <div>
              <div class="title">商品品类</div>
              <div class="num mt-1">
                122.5
                <span class="unit">万</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chat"></div>
      </div>
      <div class="grid-content flex-column-between">
        <div class="title">效绩预警</div>
        <div class="chat2"></div>
      </div>
      <div class="grid-content flex-column-between">
        <div class="title">库存总量统计</div>
        <div class="classBox flex-between">
          <div class="item">
            <div>
              <img src="@/assets/image/icon-storeHouse.png" alt />
            </div>
            <div>
              <div class="title">商品品类</div>
              <div class="num">
                122.5
                <span class="unit">万</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <img src="@/assets/image/icon-storeHouse.png" alt />
            </div>
            <div>
              <div class="title">商品品类</div>
              <div class="num">
                122.5
                <span class="unit">万</span>
              </div>
            </div>
          </div>
        </div>
        <div class="table">hahah</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "上版数",
            value: 167,
          },
          {
            name: "下架数",
            value: 67,
          },
        ],
        colors: ["#188ffc", "#188ffc"],
        showValue: true,
      },
      config2: {
        data: [
          {
            name: "收货位",
            value: 10471,
          },
          {
            name: "储货位",
            value: 10471,
          },
        ],
        colors: ["#fcc800", "#16d6ff"],
        showValue: true,
      },
      option1: {
        title: {
          text: "周销售额趋势",
        },
        xAxis: {
          name: "第一周",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          name: "销售额",
          data: "value",
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },
  mounted() {
    console.log(this.config);
  },
};
</script>

<style scoped>
.meet {
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #0f0c37, #0b1c48);
  color: white;
  font-size: 1.6rem;
}
.meet-title {
  align-items: flex-end !important;
  margin: 2rem 0;
  height: 9rem;
}
.text-center {
  text-align: center;
}
h3 {
  font-size: 3rem;
  color: white;
  font-weight: normal;
}
.grid-box {
  height: calc(100vh - 11rem);
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
.flex-column-between {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-around {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  justify-items: center;
}
.grid .item {
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
}
.grid .item .content {
  margin-left: 1rem;
}
.grid .item img {
  width: 3.5rem;
  height: 3.5rem;
}
.classBox .item {
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 2rem;
  border-top: 0.3rem solid #3b54a8;
  border-bottom: 0.3rem solid #3b54a8;
  background-color: #11265f;
}
.classBox .item img {
  width: 3.4rem;
  height: 3.4rem;
  display: block;
  object-fit: cover;
}
.classBox .item .title {
  font-size: 1.5rem;
  color: white;
}
.classBox .item .num {
  font-size: 2.5rem;
  color: #f1f352;
}
.classBox .item .unit {
  font-size: 1rem;
  color: #576999;
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
.fs-15 {
  font-size: 1.5rem;
}
.pl-9 {
  padding-left: 9rem;
}
.align-center {
  text-align: center;
}
.num-9 {
  font-size: 9rem;
  color: #ecf044;
}
.chat {
  width: 100%;
  height: 50rem;
}
.table {
  width: 100%;
  height: 3000rem;
  background-color: #0b1c48;
}
.ml-2 {
  margin-left: 2rem;
}
::v-deep .label-column div:last-child {
  display: none;
}
::v-deep .capsule-container .unit-label {
  display: none;
}
::v-deep .capsule-container .capsule-item-value {
  margin-left: 1rem;
  color: #f1f352;
  transform: translateX(125%) !important;
}
::v-deep .capsule1 {
  box-sizing: border-box;
  width: calc(100% - 4rem);
  height: 10rem;
}
::v-deep .capsule2 {
  box-sizing: border-box;
  width: calc(100% - 4rem);
  height: 10rem;
  padding: 0 3rem;
}
.font-blue {
  color: #2b87e3;
  font-size: 2rem;
  font-weight: bold;
}
.mt-1 {
  margin-top: 1rem;
}
</style>
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
              <div class="title">库存品类</div>
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
              <div class="title">库存品类</div>
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
              <div class="title">库存品类</div>
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
              <div class="title">库存品类</div>
              <div class="num mt-1">
                122.5
                <span class="unit">万</span>
              </div>
            </div>
          </div>
        </div>
        <div id="chat1" class="chat"></div>
      </div>
      <div class="grid-content flex-column-between">
        <div class="title">效绩预警</div>
        <div ref="chat2" id="chat2" class="chat2"></div>
      </div>
      <div class="grid-content flex-column-between">
        <div class="title">库存总量统计</div>
        <div class="classBox flex-between">
          <div class="item">
            <div>
              <img src="@/assets/image/icon-storeHouse.png" alt />
            </div>
            <div>
              <div class="title">库存品类</div>
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
              <div class="title">库存品类</div>
              <div class="num">
                122.5
                <span class="unit">万</span>
              </div>
            </div>
          </div>
        </div>
        <dv-scroll-board class="table" :config="config3" style="width:500px;height:220px" />
      </div>
    </div>
  </div>
</template>

<script>
import Charts from "@jiaminghi/charts";
import { changeDefaultConfig } from "@jiaminghi/charts";
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
      config3: {
        headerBGC:'#152561',
        oddRowBGC:'#0b1c48',
        evenRowBGC:'#0b1c48',
        header: ["库存量", "商品类别", "商品品类"],
        data: [
          ["200", "灭火器", "器材工具"],
          ["100", "防毒面罩", "防身用具"],
          ["100", "照明灯", "照明设备"],
          ["30", "担架", "运输设备"],
          ["20", "喊话器", "通讯设备"],
          ["10", "对讲机", "通讯设备"],
          ["10", "盾牌", "防身用具"],
          ["10", "消防栓", "器材工具"],
          ["10", "医疗箱", "声明救援"],
          ["5", "车辆", "运输设备"],
        ],
        index: true,
        columnWidth: [50],
        align: ["center"],
      },
      option1: {
        title: {
          text: "货物流动趋势",
        },
        legend: {
          data: ["待收货", "待出货", "已出货"],
        },
        xAxis: {
          //   name: "第一周",
          data: [
            "2月18日",
            "2月19日",
            "2月20日",
            "2月21日",
            "2月22日",
            "2月23日",
            "2月24日",
          ],
        },
        yAxis: {
          name: "货物量",
          data: "value",
        },
        series: [
          {
            name: "待收货",
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "line",
            smooth: true,
            stack: "a",
            lineStyle: {
              fill: "#ebf158",
              style: {
                fill: "#ebf158",
                lineWidth: 1,
              },
            },
            lineArea: {
              show: true,
              style: {
                fill: "#ebf158",
                //   opacity: 0.5
              },
            },
            label: {
              style: {
                fontSize: 10,
                fill: "#ebf158",
              },
            },
          },
          {
            name: "待出货",
            data: [1260, 2230, 4900, 2100, 2500, 6200, 1985],
            type: "line",
            smooth: true,
            stack: "b",
            lineArea: {
              show: true,
            },
          },
          {
            name: "已出货",
            data: [1250, 1230, 1600, 2800, 1500, 4200, 3985],
            type: "line",
            smooth: true,
            stack: "c",
            lineArea: {
              show: true,
            },
          },
        ],
      },
      option2: {
        series: [
          {
            type: "pie",
            data: [
              { name: "0-10", value: 12 },
              { name: "10-20", value: 12 },
              { name: "20-30", value: 32 },
              { name: "30-60", value: 65 },
              { name: "无保质", value: 44 },
              { name: "期超期", value: 52 },
            ],
            radius: ["20%", "40%"],
            insideLabel: {
              show: true,
            },
            style: {
              fontSize: 10,
              fill: "#f2f34d",
              textAlign: "center",
              textBaseline: "middle",
            },
          },
        ],
      },
    };
  },
  mounted() {
    console.log(this.config);
    this.$nextTick(() => {
      changeDefaultConfig("color", ["#fff"]);
      changeDefaultConfig("gauge", {
        lineStyle: {
          fill: "#fff",
          style: {
            fill: "#fff",
            lineWidth: 1,
          },
        },
        lineArea: {
          style: {
            fill: "#fff",
            //   opacity: 0.5
          },
        },
        label: {
          style: {
            fontSize: 10,
            fill: "#fff",
          },
        },
      });
      changeDefaultConfig("xAxis", {
        nameTextStyle: {
          fill: "#fff",
          fontSize: 10,
        },
        axisLine: {
          style: {
            stroke: "#fff",
            lineWidth: 1,
          },
        },
        axisLabel: {
          style: {
            fill: "#fff",
            fontSize: 10,
            rotate: 0,
          },
        },
        axisTick: {
          style: {
            stroke: "#fff",
            lineWidth: 1,
          },
        },
        splitLine: {
          style: {
            stroke: "#fff",
            lineWidth: 1,
          },
        },
      });
      changeDefaultConfig("yAxis", {
        nameTextStyle: {
          fill: "#fff",
          fontSize: 10,
        },
        axisLine: {
          style: {
            stroke: "#fff",
            lineWidth: 1,
          },
        },
        axisTick: {
          style: {
            stroke: "#fff",
            lineWidth: 1,
          },
        },
        axisLabel: {
          style: {
            fill: "#fff",
            fontSize: 10,
            rotate: 0,
          },
        },
      });
      changeDefaultConfig("title", {
        style: {
          fill: "#fff",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          textBaseline: "bottom",
        },
      });
      const chat1 = document.getElementById("chat1");
      const myChat1 = new Charts(chat1);
      myChat1.setOption(this.option1);
      const chat2 = this.$refs.chat2;
      console.log(chat2);
      const myChat2 = new Charts(chat2);
      myChat2.setOption(this.option2);
    });
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
  height: calc(100% - 13rem);
  padding: 0 2.5rem;
  display: grid;
  gap: 2.5rem 3.5rem;
  justify-content: center;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 42.5fr 50fr;
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
  font-weight: bold;
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
.chat2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40rem;
}
::v-deep.chat2 canvas {
  /* width: 80%; */
  /* padding: 3rem; */
  /* box-sizing: border-box; */
}
.table {
  width: 43.5rem;
  /* height: 3000rem; */
  background-color: #0b1c48;
}
::v-deep .dv-scroll-board{
    width: 100%!important;
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
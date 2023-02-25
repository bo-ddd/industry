<template>
  <div class="pollution">
    <div class="header flex-ja-center">
      <dv-decoration-5
        style="width: 40rem; height: 4rem"
        :color="['#01c0d5']"
      />
      <span class="title">污染源实时监控系统</span>
      <dv-decoration-5
        style="width: 40rem; height: 4rem"
        :color="['#01c0d5']"
      />
    </div>
    <div class="main">
      <div class="item">
        <!-- 站点检测 -->
        <dv-scroll-board :config="config" style="width: 50rem; height: 100%" />
      </div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item">
        <!-- 24小时趋势图 -->
        <div id="linechart"></div>
      </div>
      <div class="item"></div>
      <div class="item flex-ja-center">
        <!-- 重点污染物 -->
        <div id="keypollutants"></div>
        <div class="keypollutants-title">
          天跑1号结炉 425.39/500(报警mg/m"凯气化数 <br>

          国货定电度气 408.8/11500报警m'/s 度气
        </div>
      </div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
import Charts from "@jiaminghi/charts";
import { changeDefaultConfig } from "@jiaminghi/charts";

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
export default {
  name: "pollution",
  data() {
    return {
      // 站点名称列表
      config: {
        header: ["站点名称", "检测数值(m²/s)", "限值", "超标率"],
        data: [
          [
            '<span style="color:#37a2da;">xx定电康气</span>',
            "408 80",
            "11500 000",
            "--",
          ],
          [
            "xx1号焦炉",
            '<span style="color:#32c5e9;">24 63</span>',
            "11500 000",
            "--",
          ],
          [
            "xx2号期炉",
            "",
            '<span style="color:#67e0e3;">11500 000</span>',
            "--",
          ],
          [
            "xx3号焦炉",
            '<span style="color:#32c5e9;">24 63</span>',
            "11500 000",
            "--",
          ],
          [
            "xx4号期炉",
            "",
            '<span style="color:#67e0e3;">11500 000</span>',
            "--",
          ],
          [
            "xx气排口01",
            '<span style="color:#9fe6b8;">21 21 </span>',
            "11500 000",
            "--",
          ],
          ['<span style="color:#ffdb5c;">xx沥药期</span>', " ", "暂无", "--"],
        ],
        columnWidth: [100, 200, 100, 100],
        align: ["center", "center", "center", "center"],
      },
      // 折线图
      linechartOption: {
        title: {
          text: "周销售额趋势",
        },
        xAxis: {
          name: "时段",
          data: ["0点", "6点", "12点", "18点",],
          boundaryGap: false,
        },
        yAxis: {
          name: "m²/s",
          data: "value",
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, ],
            type: "line",
          },
        ],
      },
      // 重点污染物
      keyPollutants: {
        series: [
          {
            type: "gauge",
            // radius: '90',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 10,
            data: [
              {
                name: "A",
                value: 25,
                gradient: ["#2fded6", "#1ed3e5", "#2fded6"],
                radius: "90",
              },
              {
                name: "B",
                value: 45,
                gradient: ["#2c88f2", "#1ed3e5", "#2c88f2"],
                radius: "75",
              },
              {
                name: "C",
                value: 65,
                gradient: ["#136fd8", "#1ed3e5", "#2fded6"],
                radius: "60",
              },
              {
                name: "D",
                value: 35,
                gradient: ["#4194f3", "#1ed3e5", "#2fded6"],
                radius: "45",
              },
              {
                name: "E",
                value: 25,
                gradient: ["#41e1f3", "#1ed3e5", "#2fded6"],
                radius: "30",
              },
            ],
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            dataItemStyle: {
              lineCap: "round",
            },
            backgroundArc: {
              show: false,
            },
            details: {
              show: true,
              formatter: " ",
              position: "start",
              offset: [-10, 0],
              style: {
                fill: "#1ed3e5",
                fontSize: 13,
                textAlign: "right",
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.echarts("linechart", this.linechartOption);
    this.echarts("keypollutants", this.keyPollutants);
  },
  methods: {
    echarts(e, options) {
      this.$nextTick(() => {
        const chart = document.getElementById(e);
        const myChart = new Charts(chart);
        myChart.setOption(options);
      });
    },
  },
};
</script>

<style scoped>
.pollution {
  background-color: black;
  height: 100vh;
}

.header {
  gap: 3rem;
  padding-top: 3rem;
}

.header .title {
  font-weight: 900;
  font-size: 3rem;
  color: #01c0d5;
}

.main {
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "left-aside_1 center center right-aside_1"
    "left-aside_2 center center right-aside_2"
    "left-aside_3 center-2 center-2 right-aside_3";
  gap: 1rem;
}

.item {
  background-color: #02a9bb31;
  padding: 1rem;
  box-sizing: border-box;
}

.item:nth-of-type(1) {
  grid-area: left-aside_1;
}

.item:nth-of-type(2) {
  grid-area: center;
}

.item:nth-of-type(3) {
  grid-area: right-aside_1;
}

.item:nth-of-type(4) {
  grid-area: left-aside_2;
}

.item:nth-of-type(5) {
  grid-area: right-aside_2;
}

.item:nth-of-type(6) {
  grid-area: left-aside_3;
}

.item:nth-of-type(7) {
  grid-area: center-2;
}

.item:nth-of-type(8) {
  grid-area: right-aside_3;
}

:deep(.dv-scroll-board .rows .ceil) {
  padding: 0;
  white-space: normal !important;
}

:deep(.dv-scroll-board .header) {
  background-color: #01c0d500 !important;
  font-weight: 600;
  color: #01c0d5;
}

:deep(.dv-scroll-board .rows) {
  color: #7ff2ff;
}

#linechart,
#keypollutants {
  width: 100%;
  height: 100%;
}

.keypollutants-title{
    color: #2c88f2;
    color: #01c0d5;
}
</style>
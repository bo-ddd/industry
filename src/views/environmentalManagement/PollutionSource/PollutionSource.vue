<template>
  <div class="pollution">
    <div class="header flex-ja-center">
      <dv-decoration-5
        style="width: 40vw; height: 4vh"
        :color="['#01c0d5']"
      />
      <span class="title">污染源实时监控系统</span>
      <dv-decoration-5
        style="width: 40vw; height: 4vh"
        :color="['#01c0d5']"
      />
    </div>
    <div class="main">
      <!-- 站点检测 -->
      <dv-border-box-8>
        <div class="item">
          <div class="title">重点站点</div>
          <dv-scroll-board
            :config="config"
            style="width: 26vw; height: 25vh"
          />
        </div>
      </dv-border-box-8>
      <div class="item">
        <!-- 中心 -->
        <dv-border-box-1>
          <dv-flyline-chart-enhanced
            :config="configEnhanced"
            style="width: 100%; height: 100%"
          />
        </dv-border-box-1>
      </div>
      <dv-border-box-8>
        <div class="item">
          <!-- 数据排名 -->
          <div class="title">数据排名</div>
          <dv-scroll-board
            :config="configDate"
            style="width: 26vw; height: 25vh"
          />
        </div>
      </dv-border-box-8>
      <dv-border-box-1>
        <div class="item">
          <!-- 24小时趋势图 -->
          <div id="linechart"></div>
        </div>
      </dv-border-box-1>
      <dv-border-box-8 :reverse="true">
        <div class="item">
          <!-- 报警排名 -->
          <div class="title">数据排名</div>
          <dv-scroll-board
            :config="configErrer"
            style="width: 26vw; height: 25vh"
          />
        </div>
      </dv-border-box-8>
      <dv-border-box-1>
        <div class="item flex-ja-center">
          <!-- 重点污染物 -->
          <div id="keypollutants"></div>
          <div class="keypollutants-title">
            天跑1号结炉 425.39/500(报警mg/m"凯气化数 <br />

            国货定电度气 408.8/11500报警m'/s 度气
          </div>
        </div>
      </dv-border-box-1>
      <dv-border-box-6 class="item">
        <div class="equipment">
          <div>
            <div id="equipment-online"></div>
            <div class="c-06bbcf">设备在线率</div>
          </div>
          <div>
            <div id="equipment-warn"></div>
            <div class="c-06bbcf">设备报警率</div>
          </div>
          <div>
            <div id="equipment-datavalid"></div>
            <div class="c-06bbcf">数据有效率</div>
          </div>
        </div>
      </dv-border-box-6>
      <dv-border-box-1>
        <div class="item">
          <div id="monitor-preview"></div>
        </div>
      </dv-border-box-1>
    </div>
  </div>
</template>


<script>
import * as echarts from 'echarts';

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
      // 折线图24小时趋势图
      linechartOption: {
        title: {
          text: "24小时趋势图",
          style: {
            fill: "#06bbcf",
            fontSize: "20",
          },
        },
        xAxis: {
          name: "",
          data: ["0点", "6点", "12点", "18点"],
          boundaryGap: false,
        },
        yAxis: {
          name: "",
          data: "value",
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100],
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
            startAngle: -Math.PI / 4,
            endAngle: Math.PI * 2,
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
              offset: [-10, -10],
              style: {
                fill: "#1ed3e5",
                fontSize: 10,
                // textAlign: "center",
              },
            },
          },
        ],
      },
      // 中心大图
      configEnhanced: {
        points: [
          {
            name: "郑州",
            coordinate: [0.48, 0.35],
            halo: {
              show: true,
            },

            text: {
              show: true,
            },
          },
          {
            name: "新乡",
            coordinate: [0.52, 0.23],
          },
          {
            name: "焦作",
            coordinate: [0.43, 0.29],
          },
          {
            name: "开封",
            coordinate: [0.59, 0.35],
          },
          {
            name: "许昌",
            coordinate: [0.53, 0.47],
          },
          {
            name: "平顶山",
            coordinate: [0.45, 0.54],
          },
          {
            name: "洛阳",
            coordinate: [0.36, 0.38],
          },
          {
            name: "周口",
            coordinate: [0.62, 0.55],
            halo: {
              show: true,
              color: "#8378ea",
            },
          },
          {
            name: "漯河",
            coordinate: [0.56, 0.56],
          },
          {
            name: "南阳",
            coordinate: [0.37, 0.66],
            halo: {
              show: true,
              color: "#37a2da",
            },
          },
          {
            name: "信阳",
            coordinate: [0.55, 0.81],
          },
          {
            name: "驻马店",
            coordinate: [0.55, 0.67],
          },
          {
            name: "济源",
            coordinate: [0.37, 0.29],
          },
          {
            name: "三门峡",
            coordinate: [0.2, 0.36],
          },
          {
            name: "商丘",
            coordinate: [0.76, 0.41],
          },
          {
            name: "鹤壁",
            coordinate: [0.59, 0.18],
          },
          {
            name: "濮阳",
            coordinate: [0.68, 0.17],
          },
          {
            name: "安阳",
            coordinate: [0.59, 0.1],
          },
        ],
        lines: [
          {
            source: "新乡",
            target: "郑州",
          },
          {
            source: "焦作",
            target: "郑州",
          },
          {
            source: "开封",
            target: "郑州",
          },
          {
            source: "周口",
            target: "郑州",
            color: "#fb7293",
            width: 2,
          },
          {
            source: "南阳",
            target: "郑州",
            color: "#fb7293",
            width: 2,
          },
          {
            source: "济源",
            target: "郑州",
          },
          {
            source: "三门峡",
            target: "郑州",
          },
          {
            source: "商丘",
            target: "郑州",
          },
          {
            source: "鹤壁",
            target: "郑州",
          },
          {
            source: "濮阳",
            target: "郑州",
          },
          {
            source: "安阳",
            target: "郑州",
          },
          {
            source: "许昌",
            target: "南阳",
            color: "#37a2da",
          },
          {
            source: "平顶山",
            target: "南阳",
            color: "#37a2da",
          },
          {
            source: "洛阳",
            target: "南阳",
            color: "#37a2da",
          },
          {
            source: "驻马店",
            target: "周口",
            color: "#8378ea",
          },
          {
            source: "信阳",
            target: "周口",
            color: "#8378ea",
          },
          {
            source: "漯河",
            target: "周口",
            color: "#8378ea",
          },
        ],
        // icon: {
        //   show: true,
        //   // src: "/img/flylineChart/mapPoint.png",
        // },
        text: {
          show: true,
        },
        k: 0.5,
        bgImgSrc: "@/assets/images/3d.jpg",
      },
      // 设备在线率
      equipmentOnline: {
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 10,
            data: [
              {
                name: "itemA",
                value: 65,
                gradient: ["#2fded6", "#5093ff", "#41aaff"],
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
            details: {
              show: true,
              formatter: "{value}%",
              style: {
                fill: "#1ed3e5",
                fontSize: 35,
              },
            },
          },
        ],
      },
      // 设备报警率
      equipmentWarn: {
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 10,
            data: [
              {
                name: "itemA",
                value: 65,
                gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
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
            details: {
              show: true,
              formatter: "{value}%",
              style: {
                fill: "#1ed3e5",
                fontSize: 35,
              },
            },
          },
        ],
      },
      // 数据有效率
      equipmentDatavalid: {
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 1,
            endAngle: Math.PI * 1,
            arcLineWidth: 10,
            data: [
              {
                name: "itemA",
                value: 80,
                gradient: ["#50b0ff", "#1ed3e5", "#2fded6"],
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
            details: {
              show: true,
              formatter: "{value}%",
              style: {
                fill: "#1ed3e5",
                fontSize: 35,
              },
            },
          },
        ],
      },
      // 数据排名
      configDate: {
        header: ["站点名称", "检测数值(m²/s)", "限值", "超标率"],
        data: [
          ["xx定电废气", "408 80", "11500 000", "--"],
          ["xx1号焦炉", "2463", "11500 000", "--"],
          ["xx1号气排口", "21 05", "11500 000", "--"],
          ["xx2号气排口", "行4列2", "11500 000", "--"],
          ["xx2号焦炉", "行5列2", "11500 000", "--"],
          ["xx1号焦炉", "2463", "11500 000", "--"],
          ["xx1号气排口", "21 05", "11500 000", "--"],
        ],
        columnWidth: [100, 200, 100, 100],
        align: ["center", "center", "center", "center"],
      },
      // 报警排名
      configErrer: {
        header: ["站点名称", "报警次数", "最近一次报警时间"],
        data: [
          ["xx定电废气", "--", "--"],
          ["xx1号焦炉", "--", "--"],
          ["xx1号气排口", "--", "--"],
          ["xx2号气排口", "--", "--"],
          ["xx2号焦炉", "--", "--"],
          ["xx1号气排口", "--", "--"],
          ["xx2号气排口", "--", "--"],
        ],
        columnWidth: [100, 200, 200],
        align: ["center", "center", "center"],
      },
      // 监测预览
      monitorPreview: {
        title: {
          text: "监测预览",
          style: {
            fill: "#06bbcf",
            fontSize: "20",
          },
        },
        xAxis: {
          name: "",
          data: ["废气", "氮氧化物", "二氧化硫", "烟尘", "沥青烟"],
        },
        yAxis: {
          name: "",
          data: "value",
        },
        series: [
          {
            data: [3, 1, 2, 3, 4, 5],
            type: "bar",
            gradient: {
              color: ["#37a2da", "#67e0e3"],
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.dataVcharts("linechart", this.linechartOption);
    this.dataVcharts("keypollutants", this.keyPollutants);
    this.dataVcharts("equipment-online", this.equipmentOnline);
    this.dataVcharts("equipment-warn", this.equipmentWarn);
    this.dataVcharts("equipment-datavalid", this.equipmentDatavalid);
    this.dataVcharts("monitor-preview", this.monitorPreview);
  },
  methods: {
    dataVcharts(e, options) {
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
  box-sizing: border-box;
  height: 100vh;
}

.header {
  height: 6vh;
  gap: 3rem;
}

.header .title {
  font-weight: 900;
  font-size: 3rem;
  color: #01c0d5;
}

.main {
  /* height: 90vh; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "left-aside_1 center center right-aside_1"
    "left-aside_2 center center right-aside_2"
    "left-aside_3 center-2 center-2 right-aside_3";
  gap: 1rem;
  box-sizing: border-box;
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

.c-06bbcf {
  color: #06bbcf;
}

#linechart,
#keypollutants,
#monitor-preview {
  width: 100%;
  height: 28.5vh;
}
#keypollutants {
  position: relative;
  right: 2rem;
}

.keypollutants-title {
  color: #01c0d5;
}

#equipment-online,
#equipment-warn,
#equipment-datavalid {
  width: 20rem;
  height: 20vh;
}

.equipment {
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
    height: 25vh;
    width: 40vw;
}

.item .title {
  color: #06bbcf;
  font-size: 1.7rem;
  font-weight: 900;
  text-align: center;
}

#linechart {
  position: relative;
  left: 1.4rem;
}
#monitor-preview {
  position: relative;
  left: 1rem;
}
</style>
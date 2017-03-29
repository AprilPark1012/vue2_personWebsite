<!-- <template>
  <div>
    <div id="word_cloud1"></div>
    <div id="word_cloud2"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import 'echarts-wordcloud';
  import data from '../../static/data/data.json';
  
  export default {
    data () {
      return {
        chart: null
      };
    },
    methods: {
      drawCloud (id, myshape) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          toolbox: {
            feature: {
              saveAsImage: {},
              dataView: {}
            },
            right: 20,
            top: 20
          },
          series: [{
            type: 'wordCloud',
            shape: myshape,
            // shape: 'cardioid',
            // shape: 'pentagon',
            // shape: 'circle',
            left: 'center',
            top: 30,
            width: '75%',
            height: '80%',
            right: null,
            bottom: null,
            sizeRange: [12, 75],
            rotationRange: [-90, 90],
            rotationStep: 45,
            gridSize: 8,
            textStyle: {
              normal: {
                fontFamily: 'Microsoft Yahei',
                fontWeight: 'bold',
                color: function() {
                  return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(',') + ')'
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: data.cloud.wordContent
          }]
        });
      }
    },
    mounted() {
      // 保证this.$el已经插入文档
      debugger
      this.$nextTick(function() {
        this.drawCloud('word_cloud1', 'cardioid');
        this.drawCloud('word_cloud2', 'pentagon');
        var that = this;
        var resizeTimer = null;
        window.onresize = function() {
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            that.drawCloud('word_cloud1', 'cardioid');
            that.drawCloud('word_cloud2', 'pentagon');
          }, 100);
        }
      })
    }
  }
</script>
<style scoped>
  #word_cloud1,
  #word_cloud2 {
    position: relative;
    left: 50%;
    width: 90%;
    height: 560px;
    margin-left: -45%;
    border: solid #9E579D 1px;
    box-shadow: 0 0 8px #FC85AE;
    border-radius: 10px;
  }
  #word_cloud2 {
    margin-top: 15px;
    height: 480px;
  }
</style> -->



<template>
  <div>
    <div class="claim">此图数据通过爬虫获取，真实资源来自:安居客</div>
    <div id="gotobedbar"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import data from '../../static/data/data.json';
  import {md5} from '../util/md5function';
  import {hex_md5} from "../util/md5";

  export default {
    data() {
      return {
        chart: null,
        gotobed: {},
      };
    },
    methods: {
      drawbar(id) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            feature: {
              magicType: {
                type: ['line', 'bar']
              },
              saveAsImage: {},
              dataView: {}             
            },
            right: 15,
            top: 10
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundrayGap: false,
              data: this.$data.gotobed.time
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '房子数量',
              max: 40
            }
          ],
          series: [
            {
              name: '总价',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 20,
                  color: 'rgba(131, 175, 155, 1)',
                  shadowColor: 'rgba(0, 0, 0, 0.4)',
                  shadowBlur: 20
                }
              },
              areaStyle: {normal: {}},
              data: this.$data.gotobed.number
            }
          ]
        });
      }
    },
    created() {
      
    },
    mounted() {

      let md5str = "%$#(*&*aeere1234234"
  
      let paramsMD5 = hex_md5(`${md5str}`);
      console.log(paramsMD5);
      // window.fn = fn;
      //eturn requestService.simpleFetch("https://jasongan.cn/api/weather");
      fetch('http://47.92.32.161/dongcheng',{
          method: 'POST',
          body: `paramsMD5=${paramsMD5}`
      }).then((res) => {
          return res.json();
      }).then((res) => {
        debugger
          this.$data.gotobed = res.aditional.price_tag;
          this.$nextTick(function() {
            this.drawbar('gotobedbar');
            var that = this;
            var resizeTimer = null;
            window.onresize = function() {
              if (resizeTimer) clearTimeout(resizeTimer);
              resizeTimer = setTimeout(function() {
                that.drawbar('gotobedbar');
              }, 100);
            }
          });
      })
    }
  }
</script>

<style scoped>
  .claim {
    text-align: center;
    height: 3rem;
    line-height: 3rem;
  }
  #gotobedbar,
  #gotobedpie {
    margin-top: 1rem;
    position: relative;
    left: 50%;
    width: 90%;
    height: 600px;
    margin-left: -45%;
    box-shadow: 0 0 10px #884EA2;
    border-radius: 10px;
  }  
  #gotobedpie {
    margin-top: 30px;
  } 
  @media screen and (max-width: 470px) {
    #gotobedpie {
      height: 500px;
    }
  }
</style>
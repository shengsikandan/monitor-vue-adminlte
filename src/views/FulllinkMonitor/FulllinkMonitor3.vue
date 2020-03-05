<template>
    <div id="FulllinkMonitor-3" class="animate-in">
        <div>
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    数据波动详情
                </h1>
            </section>
            <!-- Main content -->
            <section class="content container-fluid">
                <div id="myChart"
                     ref="chart"
                     :style="{width: '95%', height: '450px'}"></div>
            </section>

            <!-- /.content -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "FulllinkMonitorThree",
        data () {
            return {
                objdata: [],
                namedata: [],
                datedata: [],
                fluctuationdata: [],
                objarra: [],
            }
        },
        mounted() {
            this.drawLine();
            window.onresize = () => {//  根据窗口大小调整曲线大小
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                myChart.resize();
            }
        },
        methods: {
            drawLine(){
                this.objdata = this.$store.state.obj.objdata
                console.log(this.objdata)
                //解决foreach问题
                if (!this.objdata){
                    return;
                }

                //添加id
                this.objdata.forEach((item)=> {
                    item.valueList.forEach((dateAndfluctuation)=>{
                        this.fluctuationdata.push(dateAndfluctuation.fluctuation)
                    })
                    this.namedata.push('CPU' + item.id)
                    let s = {
                        name: '',
                        type: 'line',
                        stack: '',
                        areaStyle: {},
                        smooth: true,
                        data: []
                    }
                    s.data = this.fluctuationdata
                    s.name ='CPU' + item.id
                    s.stack = item.id
                    this.objarra.push(s)
                    if(this.fluctuationdata.length != 0){
                        this.fluctuationdata = []
                    }
                })
                this.objdata[0].valueList.forEach((item)=>{
                    this.datedata.push(item.date)
                })
                // 基于准备好的dom，初始化echarts实例
                let bar_dv = this.$refs.chart;
                if(bar_dv){
                    let myChart = this.$echarts.init(bar_dv)
                    // 绘制图表
                    myChart.setOption({

                    tooltip: {
                        trigger: 'axis',
                            axisPointer: {
                            type: 'cross',
                                label: {
                                backgroundColor: '#6a7985'
                            }
                        },
                    },
                    legend: {
                        data: this.namedata
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
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
                            boundaryGap: false,
                            data: this.datedata
                        }
                    ],
                        yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 100,
                            axisLabel: {
                                show: true,
                                interval: 'auto',
                                formatter: '{value}%' //自定义显示格式(b:name, c:value, d:百分比)
                            },
                        }
                    ],
                        series: this.objarra
                });
                }
            },

        }
    }
</script>

<style scoped>

</style>

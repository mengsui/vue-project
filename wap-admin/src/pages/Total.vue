<template>
  <div class="box">
    <img class="logo" src="http://www.saoxiankeji.com/img/shibie.png">
    <!-- 内容容器 -->
    <div class="content">
      <Task :task="screenTask"/>
    </div>
    <!-- 筛选器 -->
    <div class="screen">
      <!-- 名称模糊查询 -->
      <NameScreen :nameChange="nameChange"/>
      <!-- 日器筛选 -->
      <TimeScreen :timeChange="timeChange"/>
      <!-- 执行状态查询 -->
      <DegreeScreen :degreeChange="degreeChange"/>

    </div>

    <!-- 底部导航 -->
    <Toolbar :index="0"/>
  </div>
</template>
<script>
import Task from '../components/Task'
import NameScreen from '../components/NameScreen'
import TimeScreen from '../components/TimeScreen'
import DegreeScreen from '../components/DegreeScreen'
import Toolbar from '../components/Toolbar'

export default {
  name: 'total',
  components: {
    Task,
    NameScreen,
    TimeScreen,
    DegreeScreen,
    Toolbar,
  },
  data() {
    return {
      screenTask: [],//筛选后的数据
      task: [
        {
          founder: 'admin',//项目创建人
          title: '项目1新',//名称
          degree: 1,//重要程度
          state: 1,//项目状态
          priority: 1,//优先级
          code: 'code1',//详情信息(该项目的标示)
          startTime: '2001-10-11',//开始时间
          endTime: '2002-11-11',//结束时间
          describe: '这个是一个测试任务',//描述
          unit: [//单元任务
            {
              title: '单元任务1',//单元任务名称
              state: 1,//当前任务状态
              describe: '',//任务描述
              member: ['章三','李四','赵五'],//项目成员
            }
          ],
        },
        {
          founder: '测试账号1',//项目创建人
          title: '项目2新',//名称
          degree: 2,//重要程度
          state: 2,//项目状态
          priority: 2,//优先级
          code: 'code2',//详情信息(该项目的标示)
          startTime: '2019-10-11',//开始时间
          endTime: '2019-11-11',//结束时间
          describe: '这个是一个测试任务',//描述
          unit: [//单元任务
            {
              title: '单元任务1',//单元任务名称
              state: 1,//当前任务状态
              describe: '',//任务描述
              member: ['三','四','五'],//项目成员
            }
          ],
        },
        {
          founder: '五',//项目创建人
          title: '项目3老',//名称
          degree: 3,//重要程度
          state: 3,//项目状态
          priority: 5,//优先级
          code: 'code3',//详情信息(该项目的标示)
          startTime: '2019-10-11',//开始时间
          endTime: '2019-11-11',//结束时间
          describe: '这个是一个测试任务',//描述
          unit: [//单元任务
            {
              title: '单元任务1',//单元任务名称
              state: 1,//当前任务状态
              describe: '',//任务描述
              member: ['章','李','赵'],//项目成员
            }
          ],
        }
      ],
    }
  },
  created() {
    var sen = this.task.forEach(item => {
      item.stateturn = this.common.projectStatus(item.state);
    });
    this.screenTask = this.task;
  },
  methods: {
    nameChange(value){//名称选择器
      const self = this;
      const newArr = [];
      self.task.forEach(item => {
        if(item.title.includes(value)){
          newArr.push(item);
        };
      });
      self.screenTask = newArr;
    },
    timeChange(start, end){
      const startTime = this.common.handleTime( start );
      const endTime = this.common.handleTime( end );

      const newArr = [];
      this.screenTask.forEach(item => {
        const itemEnd = this.common.handleTime( item.endTime );
        if(startTime <= itemEnd && endTime >= itemEnd){
          newArr.push(item);
        };
      });

      this.screenTask = newArr;

    },
    degreeChange(item, index, text){
      const newArr = [];
      this.screenTask.forEach(item => {
        if(item.stateturn.includes(text)){
          newArr.push(item)
        };
      });
      this.screenTask = newArr;
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/pages/total.scss';
</style>


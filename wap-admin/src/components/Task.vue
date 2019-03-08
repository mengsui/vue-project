<template>
  <div ref="content" class="content">
    <table class="tab" border="0">
      <tr class="tab-head">
        <th width='35%'>项目名称</th>
        <th>重要程度</th>
        <th>状态</th>
        <th>优先级</th>
      </tr>
      <tr class="tab-con" :key="nub" v-for="(item,nub) in task">
        <td>
          <p @click="companyClick(item)">{{item.title}}</p>
        </td>
        <td>{{item.degree}}</td>
        <td>{{item.state}}</td>
        <td>{{item.priority}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'task',
  data() {
    return {
      task: [
        {
          founder: 'admin',//项目创建人
          title: '这个是项目标题呀呀呀呀福鼎市地方撒到发送',//名称
          degree: 1,//重要程度
          state: 1,//项目状态
          priority: 1,//优先级
          code: 'code1',//详情信息(该项目的标示)
          startTime: '2019-10-11',//开始时间
          endTime: '2019-11-11',//结束时间
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
          title: '这个是项目标题呀呀呀呀',//名称
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
          title: '这个是项目标题呀呀呀呀',//名称
          degree: 3,//重要程度
          state: 4,//项目状态
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
  methods: {
    companyClick(item){
      const self = this;
      //打开一个新页面并把当前点击了那个项目的唯一标示传递到下一个页面。下一个页面通过唯一标示请求后台数据
      self.$router.push({
        // path: '/Detail',
        // query: {//注意：这个后拼接到url上面 如果敏感信息要加密处理下
        //   code: item.code,
        // },
        name: 'Detail',//这个中方法传输不会拼接到url上面
        params: {
          code: item.code,//项目的唯一标示
        }
      });
    },
  },

}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/components/task.scss';
</style>

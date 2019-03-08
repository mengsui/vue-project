<template>
  <div class="content">

    <div class="tr fd-clr">
      <div class="tit f-l">单元名称：</div>
      <div class="ipt f-l">
        <cube-textarea
          v-model="add.title"
          :autoExpand="true"
          :indicator="false"/>
      </div>
    </div>

    <div class="tr fd-clr">
      <div class="tit f-l">单元状态：</div>
      <div class="ipt f-l">
        <cube-select
          v-model="add.state"
          :options="['中断关闭','计划中','执行中','已完成','暂停中']"/>
      </div>
    </div>

    <div class="tr fd-clr">
      <div class="tit f-l">单元描述：</div>
      <div class="ipt f-l">
        <cube-textarea
          v-model="add.describe"
          :autoExpand="true"
          :indicator="false"/>
      </div>
    </div>

    <div class="tr fd-clr">
      <div class="tit f-l">单元成员：</div>
      <div class="ipt f-l">
        <div class="transport">
          <cube-input placeholder="可以搜索“人”或“新”" @input="vagueFun" v-model="transport"/>
          <ul class="vague">
            <li @click="vagueClick(item)" :key="'vague-'+nub" v-for="(item,nub) in newallpeople">
              {{item}}
            </li>
          </ul>
        </div>
        <ul class="unit-cy fd-clr">
          <li :key="nub" v-for="(item,nub) in add.member" class="f-l">
            <div @click="deleteClick(nub)" class="close">x</div>
            {{item}}
          </li>
        </ul>

      </div>
    </div>

    <div class="bot">
      <p @click="saveClick(add)">保存</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cartridge',
  props: ['saveFun'],//接收父级数据
  data() {
    return {
      transport: '',//人名输入
      allpeople: ['新人1','新人2','新人3','新人4','老人1','老人2','老人3','老人4'],//原有数据
      newallpeople: [],//模糊查询保存数据

      add: {//要返回给后台的数据
        title: '',//单元任务名称
        state: '',//当前任务状态
        describe: '',//任务描述
        member: [],//项目成员
      }
    }
  },
  methods: {
    deleteClick(nub){//删除人员
      const self = this;
      self.add.member.splice(nub,1);
    },
    vagueFun(){//模糊查询处理
      const self = this;
      const newpeople = [];//查询出来的结果
      self.allpeople.map(item=>{
        if(item.indexOf( self.transport ) >=0 ){
          newpeople.push(item);
        };
      });
      //失焦把输入框滞空，需要在次判断
      self.transport ? self.newallpeople = newpeople : self.newallpeople = [];
    },
    vagueClick(item){//选择人员
      const self = this;
      self.add.member.push(item);
      self.transport = '';//把输入框滞空
    },
    saveClick(){//保存数据把add 里面的数据发送给后台
      const self = this;
      if (self.add.title) {
        if (self.add.state) {
          if (self.add.describe) {
            if(self.add.member.length > 0){
              self.saveFun(self.add);
            } else {
              alert('请添加单元负责人')
            }
          } else {
            alert('请填写单元描述')
          }
        } else {
          alert('请填写任务状态')
        }
      } else {
        alert('请填写单元名称')
      };
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/components/cartridge.scss';
</style>

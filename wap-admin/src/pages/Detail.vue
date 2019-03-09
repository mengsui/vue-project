<template>
  <div>
    <img class="logo" src="http://www.saoxiankeji.com/img/shibie.png">
    <div class="table">
      <div class="tr fd-clr">
        <div class="title f-l">项目发起人：</div>
        <div class="content f-l">
          <cube-input
            v-model="task.founder"
            :disabled="true"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="title f-l">项目名称：</div>
        <div class="content f-l">
          <cube-textarea
            v-model="task.title"
            :autoExpand="true"
            :indicator="false"
            :disabled="disabled"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="title f-l">重要程度：</div>
        <div class="content f-l">
          <cube-select
            v-model="task.degree"
            :options="[1,2,3,4,5]"
            :disabled="disabled"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="title f-l">项目状态：</div>
        <div class="content f-l">
          <cube-select
            v-model="stateturn"
            :options="['中断关闭','计划中','执行中','已完成','暂停中']"
            :disabled="disabled"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="title f-l">项目优先级：</div>
        <div class="content f-l">
          <cube-select
            v-model="task.priority"
            :options="[1,2,3,4,5]"
            :disabled="disabled"/>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="title f-l">项目时间：</div>
        <div class="content f-l">
          <cube-button
            class="time"
            @click="showDateSegmentPicker"
            >
            开始：{{task.startTime}} <br/>
            结束：{{task.endTime}}
          </cube-button>
        </div>
      </div>

      <div class="tr fd-clr">
        <div class="title f-l">项目描述：</div>
        <div class="content f-l">
          <cube-textarea
            v-model="task.describe"
            :autoExpand="true"
            :indicator="false"
            :disabled="disabled"/>
        </div>
      </div>

      <div v-if="jurisdiction" class="bot">
        <p @click="btn" :class="clas">{{text}}</p>
      </div>

      <div class="tr fd-clr">
        <div class="title f-l">
          <p>任务单元：</p>
        </div>
        <div class="content f-l">
          <p v-if="jurisdiction" @click="addunitClick" class="add-rw">点击添加新单元</p>
          <div class="box" :key="nub" v-for="(item, nub) in task.unit">
            <p class="unit-title">单元名称</p>
            <cube-textarea
              v-model="item.title"
              :autoExpand="true"
              :indicator="false"
              :disabled="djsmall.nub == nub ? djsmall.bl : true"/>
            <p class="unit-title">单元状态</p>
            <cube-select
              v-model="item.stateturn"
              @change="projectStatusChange"
              :options="['中断关闭','计划中','执行中','已完成','暂停中']"
              :disabled="djsmall.nub == nub ? djsmall.bl : true"/>

            <p class="unit-title">单元描述</p>
            <cube-textarea
              v-model="item.describe"
              :autoExpand="true"
              :indicator="false"
              :disabled="djsmall.nub == nub ? djsmall.bl : true"/>

            <div class="unit-title fd-clr">
              <p class="f-l">成员：</p>
              <p class="f-l">修改成员（新成员添加在《点击添加新单元》里面已有）</p>
            </div>
            <ul class="unit-cy fd-clr">
              <li class="f-l" :key="'li'+index" v-for="(ite,index) in item.member">
                <div v-if="jurisdiction" @click="deleteClick(nub,index)" class="close">x</div>
                {{ite}}
              </li>
            </ul>
            <p v-if="item.member.includes(juri) || jurisdiction" @click="smallClick($event, nub)" data-small="false" class="btn">修改内容</p>
            <p @click="deleClick(nub)" v-if="jurisdiction" class="dele">删除该单元</p>
          </div>

        </div>
      </div>
    </div>



    <div v-if="unittk" class="unittk">
      <Cartridge :saveFun="saveFun"/>
    </div>
  </div>
</template>

<script>
// 日历时间设置
const dateSegmentData = [
  {
    is: 'cube-date-picker',
    title: '项目开始',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  },
  {
    is: 'cube-date-picker',
    title: '项目结束',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  }
];

import Cartridge from '../components/Cartridge'

export default {
  name: 'detail',
  components: {
    Cartridge
  },
  data(){
    return {
      id: '',
      code: '',//上一个页面点击了那一个code。这个是唯一标示

      juri: '',//当前登录人
      jurisdiction: true,//是否有权限修改项目

      text: '修改',//底部按钮显示文案
      clas: 'btn',//底部按钮样式class名称
      unittk: false,//单元弹框是否显示
      disabled: true,//禁止修改内容(项目)
      small: [],//可以修改那个小单元
      djsmall: {//当前要修改那个小单元
        nub: -1,//下标
        bl: false,//是否可以修改
      },
      stateturn: '',
      task: {//此为后台返回的数据
          founder: 'admin',//项目创建人
          title: '这个是项目标题呀呀呀呀福鼎市地方撒到发送',//名称
          degree: 1,//重要程度
          state: 1,//项目状态
          priority: 3,//优先级
          code: 'code1',//详情信息(该项目的标示)
          startTime: '2019-10-11',//开始时间
          endTime: '2019-11-11',//结束时间
          describe: '这个是一个测试任务发到发送到发送地方撒地方',//描述
          unit: [//单元任务
            {
              title: '单元任务1',//单元任务名称
              state: 1,//当前任务状态
              describe: '单元任务111',//任务描述
              stateturn: '',
              member: ['章三','admin','李四','赵五'],//项目成员
            },
            {
              title: '单元任务1',//单元任务名称
              state: 2,//当前任务状态
              stateturn: '',
              describe: '单元任务222',//任务描述
              member: ['章三','测试账号1','李四','赵五'],//项目成员
            }
          ],
        }
    }
  },
  mounted () {
    //日历处理方法
    this.dateSegmentPicker = this.$createSegmentPicker({
      data: dateSegmentData,
      onSelect: (selectedDates, selectedVals, selectedTexts) => {
        this.task.startTime = `${selectedTexts[0].join('-')}`;
        this.task.endTime = `${selectedTexts[1].join('-')}`;
      },
      onNext: (i, selectedDate, selectedValue, selectedText) => {
        dateSegmentData[1].min = selectedDate
        if (i === 0) {
          this.dateSegmentPicker.$updateProps({
            data: dateSegmentData
          });
        }
      }
    })
  },
  created() {
    //获取上个页面带过来的数据
    this.code = this.$route.params.code;
    console.log(this.code);//项目的唯一标示

    //通过cookie 获取当前登录用户来判断是否有修改权限
    this.task.founder == this.common.getCookie('userName') ? this.jurisdiction = true : this.jurisdiction = false;
    const juri = this.common.getCookie('userName');
    this.juri = juri;

    //状态转换
    this.stateturn = this.common.projectStatus(this.task.state);

    //处理数据判断当前账号可以修改那个单元任务
    this.task.unit.map((item, nub)=>{
      //状态转换
      item.stateturn = this.common.projectStatus(item.state);

      if(juri == this.task.founder){
        this.small.push(nub);
      } else {
        if (item.member.includes(juri)) {
          this.small.push(nub);
        };
      };
    });
  },
  methods: {
    projectStatusChange(sele,index,text){
      const self = this;
      self.task.unit[self.djsmall.nub].state = index - 1;
      this.$forceUpdate();
    },
    showDateSegmentPicker() {//日历选择
      if(!this.disabled){//禁止
        this.dateSegmentPicker.show();
      }
    },

    btn(){//修改信息
      const self = this;
      self.disabled = !self.disabled;
      self.disabled ? self.text = '修改' : self.text = '保存';
      self.disabled ? self.clas = 'btn' : self.clas = 'btn active';
    },
    deleteClick(nub, index){//删除对应人员 (删除对应的人员应该把改人员唯一的标示给后台后台返回成功后在删除，为了方便我只把人名写了一个数组没加入标示)
      const self = this;
      self.task.unit[nub].member.splice(index,1);
    },
    saveFun(add){//隐藏弹框并把数据发送给后台
      const self = this;
      self.unittk = false;//隐藏弹框
      add.stateturn = add.state;
      add.state = this.common.backProjectStatus(add.state);
      self.task.unit.push(add);//发给后台确认成功后添加新数据
    },
    addunitClick(){//添加新单元弹框
      const self = this;
      self.unittk = true;
    },
    deleClick(nub){//删除单元任务
      const self = this;
      self.task.unit.splice(nub,1);
    },
    smallClick(event, nub){//修改小单元任务
      const el = event.currentTarget;
      this.djsmall.nub == nub ? '' : $(el).parents('.content').find('.btn').attr('data-small','false') ;

      $(el).parents('.content').find('.btn').text('修改内容');
      $(el).parents('.content').find('.btn').removeClass('active');

      const dataSmall = $(el).attr('data-small');

      this.djsmall.nub = nub;
      if(dataSmall == "false"){
        // console.log('修改数据')
        $(el).attr('data-small','true');
        this.djsmall.bl = false;
        el.innerHTML = "保存数据";
        el.className = "btn active";
      } else {
        // console.log('禁止修改')
        $(el).attr('data-small','false');
        this.djsmall.bl = true;
        el.innerHTML = "修改内容";
        el.className = "btn";
      };

      console.log(this.djsmall.nub)
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/pages/detail.scss';
</style>
<style>
  .time {
    text-align: left!important;
    background: transparent!important;
    color: #666!important;
    padding: 8px!important;
    line-height: 1.4em!important;
  }
</style>

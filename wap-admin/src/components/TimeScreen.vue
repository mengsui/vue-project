<template>
  <div class="content fd-clr">
    <div class="f-l title">结束时间筛选：</div>
    <div class="f-l ipt">
      <p
        class="time"
        @click="showDateSegmentPicker"
        >
        {{time.startTime}} 至 {{time.endTime}}
      </p>
    </div>
  </div>
</template>
<script>
// 日历时间设置
const dateSegmentData = [
  {
    is: 'cube-date-picker',
    title: '时间范围',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  },
  {
    is: 'cube-date-picker',
    title: '时间范围',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  }
];

export default {
  name: 'timeScreen',
  props: ['timeChange'],
  data() {
    return {
      time: {
        startTime: '2019-10-11',
        endTime: '2019-10-11',
      }
    }
  },
  mounted () {
    //日历处理方法
    this.dateSegmentPicker = this.$createSegmentPicker({
      data: dateSegmentData,
      onSelect: (selectedDates, selectedVals, selectedTexts) => {
        this.time.startTime = `${selectedTexts[0].join('-')}`;
        this.time.endTime = `${selectedTexts[1].join('-')}`;

        this.timeChange(this.time.startTime, this.time.endTime);//筛选数据
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
  methods: {
    showDateSegmentPicker() {//日历选择
      this.dateSegmentPicker.show();
    },
  },
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/components/timeScreen.scss';
</style>

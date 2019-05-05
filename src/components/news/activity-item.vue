<template>
  <el-row class="activity-item">
    <template v-if="direction && direction == 'left'">
      <el-col :span="12">
        <div
          class="content left"
          :style="bgColor ? `background-color:${bgColor};` : ''"
        >
          <time class="time"><slot name="time"></slot></time>
          <p class="title">
            <slot name="title"></slot>
          </p>
          <div class="desc">
            <slot name="desc"></slot>
          </div>

          <span class="detail-icon-btn el-icon-back"  @click="handleClick(activityId  )"></span>
          <span
            class="triangle-arrow"
            :style="bgColor ? `border-left-color: ${bgColor};` : ''"
          ></span>
        </div>
      </el-col>

      <el-col :span="12">
        <img class="illustration" :src="illustration" />
      </el-col>
    </template>

    <template v-else>
      <el-col :span="12">
        <img class="illustration" :src="illustration" />
      </el-col>
      <el-col :span="12">
        <div
          class="content right"
          :style="bgColor ? `background-color:${bgColor};` : ''"
        >
          <time class="time"><slot name="time"></slot></time>
          <p class="title">
            <slot name="title"></slot>
          </p>
          <div class="desc">
            <slot name="desc"></slot>
          </div>

          <span class="detail-icon-btn el-icon-back" @click="handleClick(activityId)" ></span>
          <span
            class="triangle-arrow"
            :style="bgColor ? `border-right-color: ${bgColor};` : ''"
          ></span>
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<script>
export default {
  name: 'activity-item',
  props: {
    activityId: [String, Number],
    direction: [String], //right, left
    bgColor: [String],
    illustration: {
      type: String,
      required: true
    },
    'on-click': Function
  },
  methods: {
      handleClick() {
        if (this.onClick) {
            this.onClick.call(this, ...arguments);
        }
      }
  }
};
</script>

<style scoped lang="stylus">
.el-row
    height: 280px;
.el-col
    height: 100%

.illustration
    width: 100%;
    height: 100%;
    object-fit: cover;

.content
    position: relative
    padding: 1rem 2rem 2rem;
    height: calc(100% - 3rem);
    display flex
    flex-direction column
    background-color #374895
    color: #fff
    &.left
        background-color #028BAD


    .triangle-arrow
      position: absolute
      top: calc(50% - 10px);
      border-width: 10px 15px 10px 0;
      border-color: transparent;
      border-style: solid

    &.right .triangle-arrow
      left: -15px
      border-width: 10px 15px 10px 0;
      border-right-color #374895

    &.left .triangle-arrow
      right: -15px
      border-width: 10px 0 10px 15px;
      border-left-color: #028BAD;
    .detail-icon-btn
        position: absolute;
        bottom: 1rem;
        cursor pointer

.time
    font-size: .75rem
.title
    margin: 0 0 1rem 0;

.desc
    margin-bottom: .75rem;
    flex 1 1 auto
    overflow: hidden;
    word-break: break-all;
    color: rgba(255, 255, 255, .6)
    font-size: 0.75rem;
</style>

<template>
  <div class="wxdx-carousel-card">
    <div class="wxdx-carousel-arrow" @click="move(false)">
      <i class="el-icon-arrow-left"></i>
    </div>

    <div
      class="wxdx-card-wrapper"
      ref="cardWrapperDom"
      :style="`height: ${height};`"
    >
      <slot></slot>
    </div>
    <div class="wxdx-carousel-arrow" @click="move(true)">
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wxdx-carousel-card',
  props: {
    size: [Number]
  },

  data() {
    return {
      showCardNum: this.size || 4,
      height: '',
      cardWidth: '',
      minTranslate: 0,
      maxTranslate: 0
    };
  },

  created() {
    window.addEventListener('resize', this.init);
  },

  mounted() {
    this.init();
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.init);
  },

  methods: {
    init() {
      let width = this.$refs.cardWrapperDom.clientWidth;
      this.cardWidth = width / this.showCardNum;
      let childrenLength = this.$slots.default.length;
      this.minTranslate = (this.showCardNum - childrenLength) * this.cardWidth;
      this.maxTranslate = (childrenLength - 1) * this.cardWidth;
      let height = width / 2.9;
      this.height = height + 'px';
      this.setCardPosition(this.cardWidth);
    },

    setCardPosition(width) {
      let nodeList = this.$slots.default;
      for (let i = 0; i < nodeList.length; i++) {
        let card = nodeList[i].componentInstance;
        card.setTranslate(i * width);
      }
    },

    move(isRight = true) {
      let width = isRight ? -this.cardWidth : this.cardWidth;
      let nodeList = this.$slots.default;
      nodeList.forEach(node => {
        let card = node.componentInstance;
        let toWidth = card.translateX + width;
        if (Math.trunc(toWidth) > Math.trunc(this.maxTranslate)) {
          toWidth = 0;
        } else if (Math.trunc(toWidth) < Math.trunc(this.minTranslate)) {
          toWidth = (this.showCardNum - 1) * this.cardWidth;
        }
        card.setTranslate(toWidth);
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.wxdx-carousel-card
    display flex
.wxdx-carousel-arrow
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 100px;
    color: #168cab
    font-size: 2.5rem
    font-weight bold
    cursor: pointer

.wxdx-card-wrapper
    position: relative
    display flex
    flex: 1 1 auto
    overflow-x: hidden;
</style>

<template>
  <div class="wxdx-thumbnail">
    <div class="wxdx-thumbnail-arrow" @click="move(false)">
      <i class="el-icon-arrow-left"></i>
    </div>

    <div class="wxdx-thumbnail-wrapper" ref="thumbnailWrapperDom">
      <div v-for="(item, index) in showList" class="item" :key="item.id" @click="handleItemClick(index, item)">
        <img class="carousel-img" :src="item.image" />
      </div>
    </div>
    <div class="wxdx-thumbnail-arrow" @click="move(true)">
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wxdx-thumbnail',
  props: {
    data: {
      type: Array,
      required: true,
    },
    'on-click': Function
  },

  data() {
    return {
      showList: [], // 当前展示的列表
      size: 0, // 可以展示的个数
      itemWidth: 144,
      front: 0,
      rear: 0
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
      let width = this.$refs.thumbnailWrapperDom.clientWidth;
      this.size = Math.floor(width / this.itemWidth);
      this.showList = this.data.slice(0, this.size);
      this.front = 0;
      this.rear = this.size - 1;
    },

    /**
     * 相册左右移动
     * @param isLeft true:向左移动, false:向右移动
     */
    move(isLeft = true) {
      let dataLength = this.data.length;
      if (dataLength <= this.size || this.size < 1) return;
      if (isLeft) {
        this.front = (this.front + 1) % dataLength;
        this.rear = (this.rear + 1) % dataLength;
      } else {
        this.front = (this.front - 1 + dataLength) % dataLength;
        this.rear = (this.rear - 1 + dataLength) % dataLength;
      }

      if (this.front > this.rear) {
        this.showList = this.data
          .slice(this.front)
          .concat(this.data.slice(0, this.rear + 1));
      } else {
        this.showList = this.data.slice(this.front, this.rear + 1);
      }

    },

    handleItemClick(index, item) {
        index = (this.front + index) % this.data.length;
        if (this.onClick) {
            this.onClick.call(this, index, item);
        }
    }
  }
};
</script>

<style scoped lang="stylus">
.wxdx-thumbnail
    margin: 1rem 0;
    display flex
    height: 100px
.wxdx-thumbnail-arrow
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 100px;
    color: #756bcb
    font-size: 1.5rem
    font-weight bold
    cursor: pointer
    &:hover
        color: #000
        font-weight:bold

.wxdx-thumbnail-wrapper
    position: relative
    display flex
    justify-content: center;
    flex: 1 1 auto
    overflow-x: hidden;
    transition transform .3s
    &.translate-left
        justify-content: right;
        .item
            transform translateX(-144px)
    &.translate-right
        justify-content: left;
        .item
            transform translateX(144px)
    .item
        flex: 0 0 132px;
        margin: 0 6px;
        cursor pointer
        img
            width: 100%
            height: 100%
            display block
            object-fit cover
</style>

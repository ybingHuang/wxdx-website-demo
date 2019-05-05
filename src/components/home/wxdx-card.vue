<i18n>
    {
        "zh": {
            "readMore": "更多"
        },
        "en": {
            "readMore": "Read More"
        }
    }
</i18n>

<template>
  <div
    class="wxdx-card"
    ref="cardDom"
    :style="`width: calc((100% / ${cardNum}) - 40px);transform: translateX(${translateX}px);`"
  >
    <div class="content-wrapper">
      <span :class="icon" class="icon"></span>
      <span class="title">{{ title }}</span>
      <p class="desc">{{ title }}</p>
    </div>

    <div class="btn-wrapper">
      {{ $t("readMore") }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'wxdx-card',
  props: {
    icon: [String],
    title: [String],
    desc: [String]
  },

  data() {
    return {
      translateX: 0,
      cardNum: 4
    };
  },

  mounted() {
      this.cardNum = this.$parent.showCardNum;
  },

  methods: {
    setTranslate(x) {
      this.translateX = x;
    }
  }
};
</script>

<style scoped lang="stylus">
.wxdx-card
    position: absolute
    top: 0
    bottom: 6px
    left: 0
    padding 20px 10px
    margin: 0 10px 10px
    border-radius 6px
    display flex
    flex-direction column
    width: calc((100% / 3) - 40px)
    transition transform .3s
    text-align center
    background-color rgba(52, 162, 189, .3)
    color: #028BAD
    cursor pointer
    &:hover
        background-color #374895
        color: #fff
        box-shadow 0 0 10px #5B6C95
        .btn-wrapper
            background-color #fff
            color: #374895
            box-shadow: 0 0 10px #5b6c95;

.btn-wrapper
    position absolute
    bottom: -10px
    margin: 0 auto
    padding: 4px 1rem
    border-radius 4px
    align-self: center;
    background-color #34A2BD
    color: #fff
    font-size: .75rem
.content-wrapper
    display: flex
    flex-direction column
    .icon
        margin: 20px 0 0;
        flex: 0 0 auto
        font-size 2.5rem
        font-weight bold
    .title
        flex: 0 0 auto
        font-size: 1rem
        margin: 30px 0 10px 0
        font-weight bold
    .desc
        flex: 1 1 auto
        font-size: .75rem
</style>

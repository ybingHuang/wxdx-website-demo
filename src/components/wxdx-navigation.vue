<template>
  <div class="wxdx-navigation">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <slot name="left-items"></slot>
    </el-breadcrumb>

    <el-breadcrumb separator="|">
      <slot name="right-items"></slot>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'wxdx-navigation',
};
</script>

<style lang="stylus" scoped>
.wxdx-navigation
    padding 0 .75rem
    display: flex;
    justify-content: space-between;
    color: #fff
    background-color: #2D2F4C;
</style>

<style lang="stylus">
.wxdx-navigation
    .el-breadcrumb__inner
        padding: 14px 2px 11px;
        border-bottom 3px solid transparent;
        display: inline-block;
        &.is-link
            cursor: pointer !important

    .el-breadcrumb__item:last-child .el-breadcrumb__inner,
    .el-breadcrumb__inner,
    .el-breadcrumb__separator
        color: #fff

    .active:last-child .el-breadcrumb__inner,
    .active .el-breadcrumb__inner
        border-bottom-color  #50E3C2
        color: #50E3C2
    .el-breadcrumb__inner a:hover,
    .el-breadcrumb__inner.is-link:hover
        color: #50E3C2;
</style>

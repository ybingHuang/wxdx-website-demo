<template>
  <el-pagination
    class="wxdx-pagination"
    background
    layout="total, prev, pager, next, jumper"
    :total="total"
    :current-page="currentPage"
    :page-size="pageSize"
    @current-change="index => {$emit('on-change',index)}"
  >
  </el-pagination>
</template>

<script>
export default {
  name: 'wxdx-pagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    'current-page': {
        type: Number,
        default: 1
    },
    'page-size': {
        type: Number,
        default: 10
    }
  }
};
</script>

<style lang="stylus">
.wxdx-pagination
  margin 20px 0
  text-align right
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li
  background-color #fff
  border: 1px solid #C9D0E1;
</style>

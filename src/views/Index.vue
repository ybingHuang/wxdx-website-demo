<template>
  <el-container>
    <el-header>
      <wxdx-header></wxdx-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <wxdx-footer></wxdx-footer>
    </el-footer>
  </el-container>
</template>

<script>
import WxdxHeader from '../components/index/wxdx-header';
import WxdxFooter from '../components/index/wxdx-footer';
export default {
  name: 'Index',
  components: { WxdxHeader, WxdxFooter }
};
</script>

<style scoped lang="stylus">
  .el-header, .el-footer
      padding 0
      height: auto !important

.el-main
  padding: 0
</style>

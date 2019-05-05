<i18n>
  {
    "zh": {
      "title": "我们的奥测，我们的价值观",
      "openness": "开放包容",
      "focus": "专心专注",
      "fight": "敢想敢拼",
      "believing": "因信得见"
    },
    "en": {
      "title": "Our WuXidiagnostics, Our Values",
      "openness": "Openness and inclusiveness",
      "focus": "Concentrate on",
      "fight": "Dare to think and dare to fight",
      "believing": "Believing"
    }
  }
</i18n>
<template>
  <div class="concept-container">
    <div class="bg-image">
      <img src="http://img1.juimg.com/180112/330823-1P112162R242.jpg" />
    </div>
    <div class="content-section">
      <p class="title">{{ $t("title") }}</p>
      <join-nav activeName="concept">{{ $t("coreValues") }}</join-nav>
      <div class="values-section">
        <el-row>
          <el-col :span="6" @click.native="dialogVisible = true">
            <div class="photo">
              <img src="http://img5.imgtn.bdimg.com/it/u=2178945159,2767703220&fm=11&gp=0.jpg" />
            </div>

            <div class="values-wrapper bluish">
              <img src="http://01.minipic.eastday.com/20161122/20161122185021_3c39a415aff82a96593519e797163dca_1.jpeg" />
              <span class="values">{{ $t('openness') }}</span>
            </div>
          </el-col>
          <el-col :span="6" @click.native="dialogVisible = true">
            <div class="values-wrapper cyan">
              <img src="http://01.minipic.eastday.com/20161122/20161122185021_3c39a415aff82a96593519e797163dca_1.jpeg" />
              <span class="values">{{ $t('focus') }}</span>
            </div>
            <div class="photo">
              <img src="http://img5.imgtn.bdimg.com/it/u=2178945159,2767703220&fm=11&gp=0.jpg" />
            </div>
          </el-col>
          <el-col :span="6" @click.native="dialogVisible = true">
            <div class="photo">
              <img src="http://img5.imgtn.bdimg.com/it/u=2178945159,2767703220&fm=11&gp=0.jpg" />
            </div>

            <div class="values-wrapper purple">
              <img src="http://01.minipic.eastday.com/20161122/20161122185021_3c39a415aff82a96593519e797163dca_1.jpeg" />
              <span class="values">{{ $t('fight') }}</span>
            </div>
          </el-col>
          <el-col :span="6" @click.native="dialogVisible = true">
            <div class="values-wrapper cyan">
              <img src="http://01.minipic.eastday.com/20161122/20161122185021_3c39a415aff82a96593519e797163dca_1.jpeg" />
              <span class="values">{{ $t('believing') }}</span>
            </div>

            <div class="photo">
              <img src="http://img5.imgtn.bdimg.com/it/u=2178945159,2767703220&fm=11&gp=0.jpg" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <el-dialog class="core-values-dialog"
            :visible.sync="dialogVisible"
            width="68%"
            :before-close="handleClose">
      <div class="dialog-content">
        <img class="photo" src="http://img5.imgtn.bdimg.com/it/u=2178945159,2767703220&fm=11&gp=0.jpg"/>
        <div class="dialog-content-section">
          <p class="title">Ms.Lin：这是一个充满正能量与希望的大集体！</p>
          <p class="desc">
            入职一年，南洋理工大学博士 <br />
            药明奥测既具有大公司的严谨与规范，又具有创业型公司的活力与热情。先进的平台，专业的同事和严格的质量控制使公司精细而高效地运行着。<br/>

            很荣幸能够在自己的职业生涯中，有这样的机会——能够在一个成熟的平台上主导大量创新型的项目，在短时间内可以接触并掌握大量的知识与技能。相信这对于我个人的职业发展，是一个高质量的提升。<br/>

            药明奥测既具有大公司的严谨与规范，又具有创业型公司的活力与热情。先进的平台，专业的同事和严格的质量控制使公司精细而高效地运行着。<br>

            很荣幸能够在自己的职业生涯中，有这样的机会——能够在一个成熟的平台上主导大量创新型的项目，在短时间内可以接触并掌握大量的知识与技能。相信这对于我个人的职业发展，是一个高质量的提升。<br/>

            欢迎你也来加入奥测，这个充满正能量与希望的大集体！
          </p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="close-btn" @click="dialogVisible = false">{{ $t('close') }}</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import JoinNav from '@/components/join/join-nav.vue';
export default {
  name: 'concept',
  components: { JoinNav },
  data() {
      return {
          dialogVisible: false
      };
  },
  methods: {
      handleClose() {
          this.dialogVisible = false
      }
  }
};
</script>

<style scoped lang="stylus">
.concept-container
  .bg-image
    position absolute
    width: 100%;
    height: 60vh
    z-index -1
    img
      width: 100%
      height: 100%
      object-fit cover

.content-section
  padding: 2rem 16%
  text-align left
  min-height 60vh
  & > .title
    margin: 1rem 0;
    color: #fff
    font-size: 2.5rem
.values-section
  .el-col
    cursor pointer
    .photo
      background-color rgb(81, 80, 78)
      & > img
        width: 100%
        height: 360px
        object-fit contain

  .values-wrapper
    height: 160px
    background-color rgba(0, 0, 0, .28)
    position: relative
    display: flex;
    justify-content: center;
    align-items: center;
    &.bluish
      background-color rgba(55, 72, 149, .5)
    &.cyan
      background-color rgba(2, 139, 173, .5)
    &.purple
      background-color rgba(73, 16, 123, .5)
    img
      position: absolute
      width: 100%;
      height: 100%
      z-index -1
    .values
      color: #fff
      font-size 1.25rem
      text-align: center;

.dialog-content
  display flex
  padding: 0 2rem;
  .photo
    flex: 0 0 200px;
    height: 350px
    object-fit cover
  .dialog-content-section
    padding: 0 2rem
    text-align left
    .title
      color: #49484D
      font-size 1.25rem
.el-dialog
  .close-btn
    padding: 1.5rem 4rem;
    border: none;
    border-radius: 1px;
    width: 100%
    background-color #374995
    color: #fff
    text-align: right;
    font-size: 1.25rem;

</style>


<style lang="stylus">
.core-values-dialog
  .el-dialog__footer
    padding: 0
</style>
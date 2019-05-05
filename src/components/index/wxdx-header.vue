<i18n>
{
    "zh": {
        "aboutDesc": "药明奥测是由药明康德集团与梅奥诊所共同建立的创新型诊断赋能平台。"
    },
    "en": {
        "aboutDesc": "WuXiDiagnostics is an innovative diagnostic empowerment platform established by WuXiApptec and Mayo Clinic."
    }
}

</i18n>
<template>
  <el-row class="header-container">
    <el-col :span="24" class="header-row">
      <img class="logo" src="../../assets/images/index/logo.png" />

      <el-input
        class="search-input"
        v-model="search"
        :placeholder="$t('search')"
      >
        <span slot="suffix" class="el-icon-search search-icon"></span>
      </el-input>

      <ul class="link-list">
        <li>
          {{ $t("contactUs") }}
        </li>
        <li @click="switchLang">{{ lang }}</li>
        <li>QQ</li>
        <li>微信</li>
      </ul>
    </el-col>
    <el-col :span="24" class="menu-row">
      <el-menu
        :default-active="activeIndex"
        class="nav-menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/"><router-link to="/">{{ $t("home") }}</router-link></el-menu-item>
        <el-menu-item index="/about">
          <router-link to="/about/who">{{ $t("aboutUs") }}</router-link>
        </el-menu-item>
        <el-menu-item index="/innovation" disabled>
          {{ $t("innovation") }}
        </el-menu-item>
        <el-menu-item index="/platform" disabled>{{ $t("platform") }}</el-menu-item>

        <el-menu-item index="/newsActivity">
          <router-link to="/newsActivity/news">{{ $t("newsActivity") }}</router-link>
        </el-menu-item>

        <el-menu-item index="/join">
          <router-link to="/join/concept">{{ $t("joinUs") }}</router-link>
        </el-menu-item>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'wxdx-header',

  data() {
    return {
      lang: '',
      search: '',
      activeIndex: '/'
    };
  },

  created() {
    this.lang = this.$store.getters['language'];
    this.activeIndex = this.getActiveMenu();
  },

  methods: {
    getActiveMenu() {
      let path = this.$route.fullPath;
      let index = path.indexOf('/', 1);

      if (index > 0) {
          path = path.substring(0, index);
      }

      return path;
    },

    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
    },

    switchLang() {
      this.lang = this.lang == 'zh' ? 'en' : 'zh';
      this.$store.commit('setLanguage', this.lang);
      this.$router.go(0);
    }
  }
};
</script>

<style scoped lang="stylus">
height = 107px

.header-container
    padding 20px 0 0 0
    .logo
        width: 200px;
        margin-right:20px
.header-row
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div
        display inline-block;
    .search-input
        width: 400px
        .search-icon
            color: #028BAD
            font-size: 22px
        .el-input__suffix
            right: 10px;
            line-height: 46px;

    .link-list
        margin: 0
        padding-left 20px
        list-style none
        color: #028BAD
        font-weight: bold
        li
            display inline-block
            margin: 0
            padding: 10px
            cursor pointer
.menu-row
    padding: 0 16%;
    background-color: #374895
    color: #fff
    .el-tabs__nav-wrap::after
        display none

    .nav-menu
        border: none
        background-color #374895
        color: #fff
        .el-menu-item
            margin: 0 20px;
            padding 0
            color: #fff
            cursor pointer
            a
              padding: 0 10px;
              display: inline-block;
              text-decoration none
.menu-desc-wrapper
    display flex
    .illustration-wrapper
        margin-right: 20px;
        flex: 0 0 52%
        text-align: right;
        .illustration
            width: 200px
    .desc-wrapper
        flex: 1 1 auto
        .desc
            word-break break-all
</style>

<style lang="stylus">
.search-input
    .el-input__suffix
        right: 10px;
        line-height: 46px;
.menu-row
    .el-menu > .el-menu-item.is-active
        border-bottom: 3px solid #fff;
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
    .el-menu--horizontal>.el-submenu .el-submenu__title:hover
        background-color #374895
</style>

<i18n>
    {
        "zh": {
            "newsDetail": "新闻详情"
        },
        "en": {
            "newsDetail": "News Detail"
        }
    }
</i18n>
<template>
  <div class="news-detail-container">
    <wxdx-banner
      title="新闻中心"
      subtitle="News Center"
      icon="el-icon-date"
      height="150px"
    ></wxdx-banner>

      <wxdx-news-nav activeName="news">
          <template>{{ $t("news") }}</template>
          <template slot="left-items"><el-breadcrumb-item>{{ $t('newsDetail') }}</el-breadcrumb-item></template>
      </wxdx-news-nav>

    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import WxdxBanner from '@/components/news/banner.vue';
import WxdxNewsNav from '@/components/news/news-nav.vue';

export default {
  name: 'news-detail',
  components: { WxdxBanner, WxdxNewsNav },
    data() {
      return {
        
      };
    },

    created() {

    },

    methods: {
    }
};
</script>

<style scoped lang="stylus">
.news-detail-container
    background-color: #f2f6f7;
.news-nav
    margin: 0 16%
    margin-top: -42px;
.content-container
    padding: 1rem 26%
    background-color #f2f6f7
    text-align left
</style>


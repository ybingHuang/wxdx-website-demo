<template>
  <wxdx-navigation class="news-nav">
      <template slot="left-items">
          <el-breadcrumb-item>{{ $t("newsActivity") }}</el-breadcrumb-item>
          <el-breadcrumb-item><slot></slot></el-breadcrumb-item>
          <slot name="left-items"></slot>
      </template>

      <template slot="right-items">
          <el-breadcrumb-item
                  :class="activeName && activeName == 'news' ? 'active' : ''"
                  :to="{ path: '/newsActivity/news' }"
          >{{ $t("news") }}</el-breadcrumb-item
          >
          <el-breadcrumb-item
                  :class="activeName && activeName == 'activity' ? 'active' : ''"
                  :to="{ path: '/newsActivity/activity' }"
          >{{ $t("activity") }}</el-breadcrumb-item
          >
      </template>
  </wxdx-navigation>
</template>

<script>
    import WxdxNavigation from '@/components/wxdx-navigation.vue';

export default {
  name: 'news-nav',
  props: {
    activeName: [String]
  },
    components: { WxdxNavigation }
};
</script>

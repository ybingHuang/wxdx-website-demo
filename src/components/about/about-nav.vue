<template>
  <wxdx-navigation class="news-nav">
      <template slot="left-items">
          <el-breadcrumb-item>{{ $t("aboutUs") }}</el-breadcrumb-item>
          <el-breadcrumb-item><slot></slot></el-breadcrumb-item>
          <slot name="left-items"></slot>
      </template>

      <template slot="right-items">
          <el-breadcrumb-item
                  :class="activeName && activeName == 'we' ? 'active' : ''"
                  :to="{ path: '/about/who' }" >
              {{ $t("menuWho") }}
          </el-breadcrumb-item>
          <el-breadcrumb-item
                  :class="activeName && activeName == 'mayo' ? 'active' : ''"
                  :to="{ path: '/about/mayo' }" >
              {{ $t("menuMayo") }}
          </el-breadcrumb-item>

          <el-breadcrumb-item
                  :class="activeName && activeName == 'incident' ? 'active' : ''"
                  :to="{ path: '/about/incident' }" >
              {{ $t("menuIncident") }}
          </el-breadcrumb-item>

          <el-breadcrumb-item
                  :class="activeName && activeName == 'mt' ? 'active' : ''"
                  :to="{ path: '/about/team' }" >
              {{ $t("mt") }}
          </el-breadcrumb-item>
      </template>
  </wxdx-navigation>
</template>

<script>
    import WxdxNavigation from '@/components/wxdx-navigation.vue';

export default {
  name: 'about-nav',
  props: {
    activeName: [String]
  },
    components: { WxdxNavigation }
};
</script>

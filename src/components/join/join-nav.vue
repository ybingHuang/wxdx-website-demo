<template>
  <wxdx-navigation class="join-nav">
      <template slot="left-items">
          <el-breadcrumb-item>{{ $t("joinUs") }}</el-breadcrumb-item>
          <el-breadcrumb-item><slot></slot></el-breadcrumb-item>
          <slot name="left-items"></slot>
      </template>

      <template slot="right-items">
          <el-breadcrumb-item
                  :class="activeName && activeName == 'concept' ? 'active' : ''"
                  :to="{ path: '/join/concept' }"
          >{{ $t("coreValues") }}</el-breadcrumb-item
          >
          <el-breadcrumb-item
                  :class="activeName && activeName == 'position' ? 'active' : ''"
                  :to="{ path: '/join/position' }"
          >{{ $t("positionList") }}</el-breadcrumb-item
          >
      </template>
  </wxdx-navigation>
</template>

<script>
    import WxdxNavigation from '@/components/wxdx-navigation.vue';

export default {
  name: 'join-nav',
  props: {
    activeName: [String]
  },
    components: { WxdxNavigation }
};
</script>

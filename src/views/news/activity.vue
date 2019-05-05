<template>
  <div class="activity-container">
    <wxdx-banner
      title="活动"
      subtitle="Activities"
      icon="el-icon-date"
      height="430px"
    ></wxdx-banner>
    <div class="content-container">
      <wxdx-news-nav activeName="activity">{{ $t("activity") }}</wxdx-news-nav>
      <div class="activity-list">
        <wxdx-activity-item v-for="(activity, index) in activityList" :activityId="activity.id"
                            :key="index"
                            :on-click="activityClick"
                            :illustration="activity.image"
                            :direction="index % 2 == 1 ? 'left' : 'right'"
                            :bgColor="bgColors[index % bgColors.length]"
        >
          <time slot="time" class="time">{{ activity.time }}</time>
          <p slot="title" class="title">
            {{ activity.title }}
          </p>
          <div slot="desc" class="desc">
            {{ activity.desc }}
          </div>
        </wxdx-activity-item>
      </div>

      <wxdx-pagination :total="total" :current-page="page" :page-size="pageSize"></wxdx-pagination>
    </div>
  </div>
</template>

<script>
import WxdxBanner from '@/components/news/banner.vue';
import WxdxNewsNav from '@/components/news/news-nav.vue';
import WxdxActivityItem from '@/components/news/activity-item.vue';
import WxdxPagination from '@/components/wxdx-pagination.vue';

import ActivityList from '@/config/activityConfig.js';

export default {
  name: 'activity',
  components: { WxdxBanner, WxdxNewsNav, WxdxActivityItem, WxdxPagination },
  data() {
      return {
          activityList: ActivityList,
          bgColors: [ '#374895', '#028BAD', '#764c9f' ],
          total: 0,
          page: 1,
          pageSize: 3
      };
  },

  created() {
      this.total = ActivityList.length;
      this.getActivityList();
  },

  methods: {
      activityClick(id) {
        this.$router.push(`activity/${id}`);
      },

      getActivityList() {
          this.activityList = ActivityList.slice((this.page - 1) * this.pageSize, this.pageSize);
      }
  }
};
</script>

<style scoped lang="stylus">
.content-container
  margin-top: -322px;
  padding: 0 16%

.activity-list
  text-align left
</style>

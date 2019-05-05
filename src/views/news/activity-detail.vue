<i18n>
    {
        "zh": {
            "activityDetail": "活动详情"
        },
        "en": {
            "activityDetail": "Activity Detail"
        }
    }
</i18n>
<template>
  <div class="activity-detail-container">
    <wxdx-banner
      title="活动"
      subtitle="Activities"
      icon="el-icon-date"
      height="350px"
    ></wxdx-banner>

    <div class="content-container">
      <wxdx-news-nav activeName="activity">
          <template>{{ $t("activity") }}</template>
          <template slot="left-items"><el-breadcrumb-item>{{ $t('activityDetail') }}</el-breadcrumb-item></template>
      </wxdx-news-nav>

      <div class="bg-wrapper">
        <div class="time-section">
            <p class="date">{{ activity.time }}</p>
            <p class="year">{{ getYear(activity.time) }}</p>
        </div>
        <div class="content-wrapper">
            <p class="title">{{ activity.title }}</p>

            <el-carousel indicator-position="none" arrow="always" :autoplay="false"
                         ref="carouselDom"
                         :initial-index="index"
                         @change="changeActivity">
                <el-carousel-item v-for="item in activity.images" :key="item.id">
                    <img class="carousel-img" :src="item.image" />
                </el-carousel-item>
            </el-carousel>

            <div class="desc-section">
                <div class="index-section">
                    <span class="index">{{ index + 1 }}</span>
                    <span>/</span>
                    <span class="total">{{activity.images.length}}</span>
                </div>
                <div class="desc">
                    {{ activity.images[index].desc }}
                </div>

            </div>

            <wxdx-thumbnail :data="activity.images" :on-click="setCurrentActivity"></wxdx-thumbnail>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WxdxBanner from '@/components/news/banner.vue';
import WxdxNewsNav from '@/components/news/news-nav.vue';
import WxdxThumbnail from '@/components/news/wxdx-thumbnail.vue';
import ActivityList from '@/config/activityConfig.js';

export default {
  name: 'activity-detail',
  components: { WxdxBanner, WxdxNewsNav, WxdxThumbnail },
    data() {
      return {
          id: '',
          index: 0,
          title: '',
          time: '',
          activity: {},
      };
    },

    created() {
     this.id = this.$route.params.id;
     console.log(ActivityList);
     this.activity = ActivityList.filter(item => item.id == this.id)[0];
     console.log(this.activity);
    },

    methods: {
        setCurrentActivity(index, item) {
            this.$refs.carouselDom.setActiveItem(index);
        },

        changeActivity(newIndex, oldIndex) {
            this.index = newIndex;
        },

        getYear(time) {
            return time.substr(0, 4);
        }
    }
};
</script>

<style scoped lang="stylus">
.content-container
    padding: 0 16%
    margin-top: -242px;
.bg-wrapper
    padding-bottom 10px
    border-radius 2px
    background-color #F2F6F7
    .time-section
        position: absolute;
        width: 180px;
        height: 200px;
        color: #fff
        background-color #374895
        .date
            padding: 1rem .75rem;
            text-align right
            font-size: .875rem;
        .year
            font-size: 2rem
 .content-wrapper
     font-size: .875rem;
    .title
        padding: 30px 10px 0 186px
        margin-top: 0;
        text-align left
    .el-carousel
        padding: 0 12%;
        .carousel-img
            width 100%
            height: 100%
            object-fit contain
    .desc-section
        margin: 1rem 0;
        padding: 0 6%;
        display flex
        text-align left
        .total
            color: #018bad
        .index-section
            margin-right: 1rem;
            font-size: 1.5rem
            .index
                font-size: 1rem

</style>

<style lang="stylus">
.activity-detail-container
    .el-carousel__arrow
        background transparent
        font-size: 1.5rem
        color: #756bcb
    .el-carousel__arrow--left
        left: -40px;
    .el-carousel__arrow--right
        right: -40px
</style>

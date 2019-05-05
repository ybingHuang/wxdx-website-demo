<template>
  <div class="news-container">
    <wxdx-banner
      title="新闻中心"
      subtitle="News Center"
      icon="el-icon-document"
    ></wxdx-banner>
    <div class="content-container">
      <wxdx-news-nav activeName="news">{{ $t("news") }}</wxdx-news-nav>
      <div class="news-list">

        <!-- <el-card v-for="(item, index) in newsList" :key="item.id"
                 @click.native="toDetail(item.id)"
                 :body-style="{ padding: '0px', display: 'flex' }">
          <img
            class="illustration"
            :src="item.image"
          />
          <div class="content">
            <time class="time">{{ item.date }}</time>
            <p class="title">
              {{ item.title }}
            </p>
            <div class="desc">
              {{ item.desc }}
            </div>
          </div>
          <span class="icon-arrow-right el-icon-arrow-right"></span>
        </el-card> -->
        <el-card v-for="(item, index) in newsList"
                 @click.native="toDetail(item.id)"
                 :body-style="{ padding: '0px', display: 'flex' }">
          <img
            class="illustration"
            :src="item.image"
          />
          <div class="content">
            <time class="time">{{ item.date }}</time>
            <p class="title">
              {{ item.title }}
            </p>
            <div class="desc">
              {{ item.desc }}
            </div>
          </div>
          <span class="icon-arrow-right el-icon-arrow-right"></span>
        </el-card>
      </div>

      <wxdx-pagination :total="total" @on-change="index => {pageChange(index)}"></wxdx-pagination>
    </div>
  </div>
</template>

<script>
import WxdxBanner from '@/components/news/banner.vue';
import WxdxNewsNav from '@/components/news/news-nav.vue';
import WxdxPagination from '@/components/wxdx-pagination.vue';

export default {
  name: 'news',
  components: { WxdxBanner, WxdxNewsNav, WxdxPagination },

    data() {
      return {
          pageIndex: 0,
          pageSize: 10,
          total: 0,
          newsList: [],
          allNewsList: [
              {
                  id: 5,
                  image: '/images/news/5/image001.png',
                  date: '2019-04-19',
                  title: '药明奥测医检所通过CAP国际质量体系及梅奥医学实验室现场审核',
                  desc: '上海，2019年4月19日 —— 近日，药明奥测医学检验所获得国际权威临床实验室美国病理学家协会(College of American Pathologists, CAP)认证证书，同时“零缺陷”通过梅奥医学实验室(Mayo Clinic Laboratories, MCL)质量专家团现场审核。这两项权威认证标志着药明奥测医检所的实验室技术能力和质量管理体系达到世界先进水准，其出具的检验报告符合国际质量标准。'
              },
              {
                  id: 4,
                  image: '/images/news/4/image001.png',
                  date: '2019-03-25',
                  title: '梅奥诊所Mayo Clinic被评为世界十大最佳医院No.1',
                  desc: '点击下方“阅读原文”查看美国《新闻周刊》Newsweek报道原文。https://www.newsweek.com/2019/04/05/10-best-hospitals-world-1368512.html?from=groupmessage&isappinstalled=0'
              },
              {
                  id: 3,
                  image: '/images/news/3/image001.png',
                  date: '2019-03-08',
                  title: '精准医疗：临床诊断产业的全球趋势 | 药明康德健康产业论坛速递',
                  desc: '作为精准医疗的主要组成部分，临床诊断，尤其是覆盖传染病、肿瘤、遗传病等各病种的高端特检，近年来发展迅猛。在首届药明康德健康产业论坛上，药明奥测首席执行官刘釜均博士与来自中国、美国和欧洲的四位嘉宾，以“精准医疗：临床诊断产业的全球趋势”为题，聚焦全球创新检测技术的发展，探讨如何打造适合患者的精准检测和治疗方案。'
              },
              {
                  id: 2,
                  image: '/images/news/2/image001.png',
                  date: '2019-03-07',
                  title: '金句来袭！临床诊断产业的全球智汇',
                  desc: '汇聚全球智慧，促进产业交流。3月5日到6日，首届“药明康德健康产业论坛”于上海静安瑞吉酒店隆重举行。'
              },
              {
                  id: 1,
                  image: '/images/news/1/image001.png',
                  date: '2019-01-07',
                  title: '药明奥测医检所通过CAP现场审核 比肩国际顶尖实验室质量水平',
                  desc: '2019年1月7日，药明奥测医检所接受了来自国际权威临床实验室认可体系CAP（College of American Pathologists，美国病理家协会）4位资深专家的全天检查，并顺利通过首次申请的现场审核。'
              }
          ]
      };
    },
    created(){
      this.total = this.allNewsList.length;
      this.searchNewsList();
    },
    methods: {
        toDetail(id) {
            this.$router.push(`news/${id}`);
        },
        pageChange(index){
          this.pageIndex = index-1;
          this.searchNewsList();
        },
        searchNewsList(){
          let strat = this.pageIndex * this.pageSize;
          let end = this.pageIndex * this.pageSize + this.pageSize;
          this.newsList = this.allNewsList.slice(strat,end);
        }
    }
};
</script>

<style scoped lang="stylus">
.news-container
  padding-bottom: 10px;
  background-color #f2f6f7
.content-container
  margin-top: -94px;
  padding: 0 16%

.news-list
  text-align left
  .el-card
    margin: 1rem 0
    border: none
    border-radius 0
    cursor: pointer
    &:first-child
      margin-top: 0
    &:hover
      .icon-arrow-right
        color: #000
    .icon-arrow-right
      margin: 0 1rem;
      float left
      align-self: center;
      color: #8279d0
      font-weight: 600
    .illustration
      height: 143.5px;
      width: 180px;
      float left
      object-fit: cover;
  .content
    padding: 1.5rem 0 1.5rem 1.5rem;
    width: calc(100% - 252px)
    float left

    .time
      font-size: .75rem
    .title
      margin: 0 0 1rem 0;
      color: #49484D
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
    .desc
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      height: 2.875em;
      word-break: break-all;
      color: #757575
      font-size: 0.75rem;
</style>

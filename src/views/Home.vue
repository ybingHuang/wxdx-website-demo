<i18n>
  {
    "zh": {
      "connection": "连接",
      "sharing": "智享",
      "capacity": "赋能",
      "newIdea": "新思路",
      "newIdeaDesc": "药明奥测全面引进梅奥诊所(Mayo Clinic)医学实验室的3000余项检测项目、诊疗路径和完整的管理体系，建立了分子、二代测序、病理、生化免疫和质谱等特检技术平台，以及最前沿的科研检测平台，其多组学特检项目群覆盖疾病预防、诊断、治疗和健康管理的全流程。",
      "newTech": "新技术",
      "newTechDesc": "药明奥测全面引进梅奥诊所(Mayo Clinic)医学实验室的3000余项检测项目、诊疗路径和完整的管理体系，建立了分子、二代测序、病理、生化免疫和质谱等特检技术平台，以及最前沿的科研检测平台，其多组学特检项目群覆盖疾病预防、诊断、治疗和健康管理的全流程。",
      "newEcology": "新生态",
      "newEcologyDesc": "药明奥测致力于创建体外诊断特检服务和产业赋能双平台，创造共赢共享的产业新生态"
    },
    "en": {
      "connection": "Connection",
      "sharing": "Sharing",
      "capacity": "Capacity",
      "newIdea": "New Idea",
      "newIdeaDesc": "The core product of WuXiDiagnostics is the disease diagnostic enabling package, which consists of the leading diagnostic technology certified by Mayo Medical Laboratory, the solution of whole course management and the content dissemination system based on actual cases. Energizer kits are used in various medical scenarios, such as preventive screening, accurate diagnosis, drug monitoring, chronic disease management and prognosis assessment, to help hospitals and doctors at all levels in China diagnose and treat more accurately, timely and efficiently.",
      "newTech": "New Technology",
      "newTechDesc": "WuXiDiagnostics has introduced more than 3000 testing items, diagnosis and treatment paths and complete management system of Mayo Clinic Medical Laboratory. It has established molecular, second-generation sequencing, pathology, biochemical immunity and mass spectrometry detection technology platforms, as well as the most advanced scientific research and detection platforms. Its multi-group scientific inspection projects cover the whole process of disease prevention, diagnosis, treatment and health management.",
      "newEcology": "New Ecology",
      "newEcologyDesc": "WuXiDiagnostics is committed to creating a dual platform of in vitro diagnostic special inspection service and industrial empowerment, creating a win-win and shared new industry ecosystem."
    }
  }
</i18n>
<template>
  <div class="home">
    <div class="section title-section">
      <div class="desc-wrapper">
        <p class="title">明医学之<span class="emphasis">奥<span class="spot">•</span>测</span>生命之要</p>
        <ul class="subtitle-list">
          <li>{{ $t('connection') }}</li>
          <li class="spot">.</li>
          <li>{{ $t('sharing') }}</li>
          <li class="spot">.</li>
          <li>{{ $t('capacity') }}</li>
        </ul>
      </div>
    </div>

    <div class="new-idea-section">
      <div class="title-wrapper">
        <p class="title">{{ $t('newIdea') }}</p>
        <span class="desc">{{ $t('newIdeaDesc') }}</span>
      </div>
      <wxdx-carousel-card class="carousel-card" :size="4">
        <wxdx-card icon="icon-nerve" title="脑科诊断套餐" desc="脑科诊断套餐简介"></wxdx-card>
        <wxdx-card icon="icon-heart-vessel" title="脑科诊断套餐" desc="脑科诊断套餐简介"></wxdx-card>
        <wxdx-card icon="icon-infant" title="脑科诊断套餐" desc="脑科诊断套餐简介"></wxdx-card>
        <wxdx-card icon="icon-procreate" title="脑科诊断套餐" desc="脑科诊断套餐简介"></wxdx-card>
        <wxdx-card icon="icon-microbe" title="脑科诊断套餐" desc="脑科诊断套餐简介"></wxdx-card>
        <wxdx-card icon="icon-incretion" title="脑科诊断套餐" desc="脑科诊断套餐简介"></wxdx-card>
      </wxdx-carousel-card>
    </div>

    <div class="section technology-section">
      <div class="title-wrapper">
        <p class="title">{{ $t('newTech') }}</p>
        <span class="desc">{{ $t('newTechDesc') }}</span>
      </div>
      <div class="tech-container">
        <wxdx-tech-card icon="icon-blood" title="临床分子" desc="临床分子简介"></wxdx-tech-card>
        <wxdx-tech-card icon="icon-tumour" title="临床分子" desc="临床分子简介"></wxdx-tech-card>
        <wxdx-tech-card icon="icon-medical-guide" title="临床分子" desc="临床分子简介"></wxdx-tech-card>
        <wxdx-tech-card icon="icon-procreate" title="临床分子" desc="临床分子简介"></wxdx-tech-card>
        <wxdx-tech-card icon="icon-microbe" title="临床分子" desc="临床分子简介"></wxdx-tech-card>
        <wxdx-tech-card icon="icon-incretion" title="临床分子" desc="临床分子简介"></wxdx-tech-card>
      </div>
    </div>

    <div class="section ecology-section">
      <div class="left">
        <div class="background"></div>
        <div class="graph"></div>
      </div>
      <div class="right">
        <div class="title-wrapper">
          <p class="title">{{ $t('newEcology') }}</p>
          <span class="desc">{{ $t('newEcologyDesc') }}</span>
        </div>
        <div class="stat-wrapper">
          <ul class="stat-list">
            <li>
              <span class="icon icon-microbe"></span>
              <div class="stat"><span class="value">3000</span>+</div>
              <span class="desc">{{ $t('testItem') }}</span>
            </li>

            <li>
              <span class="icon icon-medical-guide"></span>
              <div class="stat"><span class="value">3000</span>+</div>
              <span class="desc">{{ $t('techPlatform') }}</span>
            </li>

            <li>
              <span class="icon icon-heart-vessel"></span>
              <div class="stat"><span class="value">10</span>大</div>
              <span class="desc">{{ $t('diseaseDomain') }}</span>
            </li>

            <li>
              <span class="icon icon-heart-vessel"></span>
              <div class="stat"><span class="value">10</span>大</div>
              <span class="desc">{{ $t('diseaseDomain') }}</span>
            </li>
          </ul>
        </div>
      </div>


    </div>

    <div class="news-section">
      <div class="left">
        <div class="title-wrapper">
          <span class="icon el-icon-document"></span>
          <div class="title-text">
            <span class="title">新闻中心</span>
            <span class="sub-title">News Center</span>
          </div>

        </div>
      </div>
      <div class="right">
        <div class="content-wrapper">
          <ul class="news-list">
            <li>
              <div class="title">
                合全药业常州基地以零缺陷顺利通过美国FDA首次现场审计
              </div>
              <div class="date">2018-03-08</div>
              <div class="desc">中国上海，2018年5月7日-药明康德子公司合全药业宣布其位于江苏省常州市的原料药研发和生产基地以零缺陷的完美结果顺利通过美国FDA对两个创新药的批准前检查。</div>
            </li>

            <li>
              <div class="title">
                合全药业常州基地以零缺陷顺利通过美国FDA首次现场审计
              </div>
              <div class="date">2018-03-08</div>
              <div class="desc">中国上海，2018年5月7日-药明康德子公司合全药业宣布其位于江苏省常州市的原料药研发和生产基地以零缺陷的完美结果顺利通过美国FDA对两个创新药的批准前检查。</div>
            </li>
          </ul>
          <div class="more-wrapper">
            <a class="more" @click="$router.push('/newsActivity/news')">{{ $t('more') }}></a>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import WxdxCarouselCard from '@/components/home/wxdx-carousel-card.vue';
import WxdxCard from '@/components/home/wxdx-card.vue';
import WxdxTechCard from '@/components/home/wxdx-tech-card.vue';

export default {
  name: 'home',
  components: {
      WxdxCarouselCard, WxdxCard, WxdxTechCard
  }
};
</script>


<style lang="stylus" scoped>
  .section
    padding: 20px 16% 40px
    margin-bottom: 40px
    .title-wrapper
      padding: 20px 0
      .title
        font-size 1.5rem
      .desc
        font-size .875rem


  .title-section
    min-height: 70vh
    display flex
    justify-content: center;
    align-items: center;
    background url("../assets/images/home/title-bg.png") 100%
    text-align center
    .desc-wrapper
      color: #fff
      .title
        margin: 1rem;
        font-size 3rem

      .emphasis
        font-size 4rem
        color: #23FFFC
        letter-spacing: .75rem;
        .spot
          font-size 2rem
      .subtitle-list
        padding 0
        list-style none
        font-size: 2rem;
        li
          display inline-block
        .spot
          margin: 0 .5rem;



  .new-idea-section
    margin-bottom: 40px
    .title-wrapper
      padding: 20px 16%
      .title
        font-size 1.5rem
    .carousel-card
      padding: 20px 8%

  .technology-section
    background url("../assets/images/home/tech-bg.jpg") 100%
    .title-wrapper
      color: #fff
    .tech-container
      display flex
      flex-wrap: wrap;
      .wxdx-tech-card
        margin: 10px 1%
        flex: 1 1 30%

  .ecology-section
    display flex
    padding-top: 20px
    .title-wrapper
      padding-top 0
      .title
        margin-top: 0
    .left
      flex: 1 1 50%
      position: relative
      margin-right 20px
      & > div
        position: absolute
        left:0
        right:0
        top:0
        bottom:0
      .background
        right: 40px
        bottom: 40px
        background-color: #374895
      .graph
        left: 40px
        top: 40px
        background url("../assets/images/home/ecology-bg.jpg") 100%
    .right
      margin-left 20px
      flex: 1 1 50%
      text-align left

    .stat-list
      padding: 0
      list-style none
      color: #374895

      li
        margin: 6px 8% 6px 0;
        display inline-block
        text-align: center;
        &:first-child
          margin-left: 0;
      .icon
        font-weight: 600
        font-size 2.5rem
      .stat
        margin-top: 1rem;
        font-size 1.5rem
      .value
        font-weight: bold


  .news-section
    display flex
    padding: 20px 0
    .title-wrapper
      padding-top 0
      color: #374895
      .title-text
        display: inline-flex;
        flex-direction: column;
        position: relative;
        top: -18px;
      .title
        margin-top: 0
        font-size 1.5rem
      .icon
        font-size: 3rem
      .sub-title
        line-height: .75rem;

    .left
      padding: 2rem 2rem 2rem 16%;
      flex: 1 1 50%
      text-align left
      background url("../assets/images/home/news-bg.jpg") 100%

    .right
      padding: 2rem 16% 2rem 2rem;
      flex: 1 1 50%
      text-align left
      background-color #374895
      color: #fff
      .news-list
        padding: 0
        margin: 0
        list-style none
        li
          margin: 1rem 0;
          &:first-child
            margin-top: 0
          &:last-child
            margin-bottom: 0
        .date, .desc
          color: rgba(255, 255, 255, .7)
          font-size: .75rem
      .more-wrapper
        text-align right
        font-size: .875rem
        .more
          color: #5ECCE7
          cursor: pointer

</style>

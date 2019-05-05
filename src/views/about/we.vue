<i18n>
  {
    "zh": {
      "newDiagnosis": "新诊断",
      "firstDesc": "药明奥测是由药明康德集团与Mayo Clinic共同建立的创新型诊断赋能平台。",
      "desc": "公司致力于连接中国临床需求与梅奥和全球先进的诊断技术，赋能医院医生精准诊断，从而精准治疗疾病，造福病患。药明奥测全球总部位于中国上海，在苏州设有生产基地，并联合Mayo Clinic成立了研发中心，研发中心位于梅奥总部所在地美国罗彻斯特。其位于上海的医学检验所获得美国病理学家协会CAP认证并“零缺陷”通过梅奥医学实验室(Mayo Clinic Laboratories, MCL)质量专家团现场审核，检验报告符合国际质量标准。",
      "newTech": "新技术",
      "newTechDesc": "全面引进梅奥医学实验室的 3000项检测项目、疾病诊断 路径和实验室管理体系;建立了先进而完备的质谱、分子、 二代测序、病理和免疫等多组学临床特检服务平台及前沿 的科研检测平台。",
      "newProduct": "新产品",
      "newProductDesc": "核心产品是疾病诊断赋能包，包括梅奥医学实验室认可的前沿技术，先进的诊断路径与算法，以及基于临床应用的医学内容体系。涵盖疾病预防、筛查、诊断、监测及预后评估等各类医疗场景，助力中国诊疗更精准、更及时、更高效。",
      "newEcology": "新生态",
      "newEcologyDesc": "药明奥测致力于创建体外诊断特检服务和产业赋能双平台，助力诊疗创新者完成从研发到商业化的技术转化，创造共赢共享的产业新生态。"
    },

    "en": {
      "newDiagnosis": "New Diagnosis",
      "firstDesc": "Pharmaceutical Austrian Test is an innovative diagnostic empowerment platform established by Pharmaceutical Kant Group and Mayo Clinic. ",
      "desc": "The company is committed to connecting China's clinical needs with Mayo and the world's advanced diagnostic technology, enabling hospital doctors to accurately diagnose, so as to precisely treat diseases and benefit patients. Yaominao Testing is headquartered in Shanghai, China. It has a production base in Suzhou and a research and development center in Rochester, USA, where Mayo Clinic is headquartered. Its Shanghai-based medical laboratory has been certified by the American Association of Pathologists CAP and \"zero defect\" has been audited by the Mayo Clinic Laboratories (MCL) quality expert group on-site, and the test report conforms to international quality standards.",
      "newTech": "New Technology",
      "newTechDesc": "Mayo Medical Laboratory has introduced 3000 testing items, disease diagnosis paths and laboratory management system. Advanced and complete clinical special examination service platforms of mass spectrometry, molecule, second generation sequencing, pathology and immunity and frontier research and detection platforms have been established.",
      "newProduct": "New Product",
      "newProductDesc": "The core products are disease diagnostic enabling packages, including frontier technologies approved by Mayo Medical Laboratory, advanced diagnostic paths and algorithms, and medical content system based on clinical application. It covers various medical scenarios such as disease prevention, screening, diagnosis, monitoring and prognosis assessment, and helps to make diagnosis and treatment more accurate, timely and efficient in China.",
      "newEcology": "New Ecology",
      "newEcologyDesc": "Pharmaceutical Testing is committed to creating a dual platform of in vitro diagnostic special inspection service and industrial empowerment, helping innovators in diagnosis and treatment complete the technological transformation from R&amp;D to commercialization, and creating a win-win and shared new industry ecosystem."
    }
  }
</i18n>
<template>
  <div class="we-container">
    <div class="img-bg">
      <img
        src="http://quality-pathshala.com/wp-content/uploads/2017/04/nablconsultant04.jpg"
      />
    </div>
    <div class="left-bg"></div>
    <div class="we-content">
      <h2 class="title">{{ $t("newDiagnosis") }}</h2>
      <p class="desc">
        <span class="emphasis">{{ $t("firstDesc") }}</span>
        {{ $t("desc") }}
      </p>

      <div class="card-section">
        <about-nav activeName="we">
          {{ $t("menuWho") }}
        </about-nav>
        <div class="cap-section">
          <div class="cap-logo">
            CAP Logo
          </div>
          <div class="team">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3948864790,2180876922&fm=15&gp=0.jpg"
            />
          </div>
          <div class="building">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3948864790,2180876922&fm=15&gp=0.jpg"
            />
          </div>
        </div>

        <div class="desc-section">
          <el-row :gutter="20">
            <el-col :span="12">
              <p class="title">{{ $t('newTech') }}</p>
              <p class="desc">{{ $t('newTechDesc') }}</p>
            </el-col>
            <el-col :span="12">
              <p class="title">{{ $t('newProduct') }}</p>
              <p class="desc">{{ $t('newProductDesc') }}</p>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="arrow-row">
            <el-col :span="12">
              <span class="el-icon-arrow-down"></span>
            </el-col>
            <el-col :span="12">
              <span class="el-icon-arrow-down"></span>
            </el-col>
          </el-row>
        </div>
        <div class="image-section">
          <img src="http://quality-pathshala.com/wp-content/uploads/2017/04/nablconsultant04.jpg"/>
          <div class="arrow">
            <span class="el-icon-arrow-up"></span>
          </div>
        </div>

        <div class="new-ecology-section">
          <p class="title">{{ $t('newEcology') }}</p>
          <p class="desc">{{ $t('newEcologyDesc') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutNav from '@/components/about/about-nav.vue';
export default {
  name: 'we',
  components: { AboutNav }
};
</script>

<style scoped lang="stylus">
.we-container
  min-height: 100vh
  .img-bg
    position: absolute
    z-index -1
    width: 100%;
    height: 60vh;
    &:after
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
    img
      width: 100%
      height: 100%;
      object-fit cover
      opacity:0.6;

  .left-bg
    position: absolute
    width: 30%;
    height: 80vh
    z-index -1
    background-color #374895

.we-content
  padding: 10px 16%
  text-align left
  & > .title
    color: #fff
    font-size 2rem
  & > .desc
    color: #fff
    .emphasis
      color: #50E3C2
 .card-section
   background-color #F2F6F7

 .cap-section
    display flex
    height: 300px
  .cap-logo
     flex: 0 0 240px
  .team
    flex: 1 1 30%
    align-self center
    height: 40%

  .building
    flex: 1 1 auto
    height: 80%
    align-self flex-end
    img
      width: 120%;
  img
    width 100%
    height: 100%
    object-fit cover

.desc-section
  padding: 10px 6%;
  color: #000
  .desc
    font-size: .875rem;
    color: #1F1E00
  .arrow-row
    text-align center
    font-size 1.5rem
    color: #028BAD
.image-section
  font-size 1.5rem
  color: #028BAD
  text-align center
  img
    width: 100%
    height: 300px
    object-fit cover

.new-ecology-section
  padding: 10px 6%;
  .title
    margin-top: 0;
    text-align center
  .desc
    font-size .875rem
</style>

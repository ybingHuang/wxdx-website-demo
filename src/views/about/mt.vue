<template>
  <div class="mt-container">
    <div class="slf-introduction-wrapper">
      <div class="introduction-wrapper">
        <div class="introduction-container">
          <div class="introduction-title">团队管理</div>
          <div class="introduction-content">
            <p>管理团队的一些简介，管理团队的一些简介管理团队的一些简介管理团队的一些简介管理团队的一些简介，管理团队的一些简介管理团队的一些简介管理团队的一些简介
            </p>
          </div>
        </div>

      </div>
      <div class="members">
        <img class="members-image" src="@/assets/images/tm/managers.jpg"/>
      </div>
    </div>
    <div class="member-container">
      <div class="boss-wrapper">
        <div class="boss">
          <div class="boss-content">
            <div class="cn-introduction">
              <pre>刘釜均       博士</pre>
              <span>药明奥测首席执行官</span>
            </div>
            <div class="en-introduction">
              <pre>Jason Liu,Ph.D.,MBA</pre>
              <span>CEO,WuXi Diagnostics</span>
            </div>
          </div>
          <div class="boss-description">
            <br>
              <span class="boss-text">
                刘釜均博士深耕生命科学行业近30年，其中包括20年临床诊断及医疗设备跨国集团的领导经验，在跨文化业务与资源整合，新兴公司业务拓展，国际并购重组及企业管理等方面拥有丰富的经验。
              </span>
          </div>
        </div>
      </div>
      <div class="director-wrapper">
        <el-row :gutter="24" >
          <el-col :span="16">
            <div class="director-content">
              <pre class="director-title">刘釜均  测试部高级主任</pre>
              <span class="director-text">加入药明康德集团之前，他曾在Hologic, Life Technologies, Applied Biosystems和Bio-Rad等多个跨国集团公司担任过亚太区副总裁、中国区总经理、美国总部全球业务总经理等职务。</span>
            </div>
          </el-col>
          <el-col :span="8" style="text-align: right">
            <img class="director-img" src="@/assets/images/tm/fang.png"/>
          </el-col>
        </el-row>
      </div>
      <div class="boss-image">
        <img src="@/assets/images/tm/jason.png"/>
      </div>
      <div class="director-wrapper2">
        <el-row :gutter="24">
          <el-col :span="6">
            <img class="special-img" src="@/assets/images/tm/laowai.png"/>
          </el-col>
          <el-col :span="6">
            <div class="introduction">
              <span class="title">药小明</span><br><span class="title">测试部高级主任</span><br><br>
              <span class="content">加入药明康德集团之前，他曾在Hologic, Life Technologies, Applied Biosystems和Bio-Rad等多个跨国集团公司担任过亚太区副总裁、中国区总经理、美国总部全球业务总经理等职务。</span>
            </div>
          </el-col>
          <el-col :span="6">
            <img class="special-img" src="@/assets/images/tm/jerry.png"/>
          </el-col>
          <el-col :span="6">
            <div class="introduction">
              <span class="title">药小明</span><br><span class="title">测试部高级主任</span><br><br>
              <span class="content">加入药明康德集团之前，他曾在Hologic, Life Technologies, Applied Biosystems和Bio-Rad等多个跨国集团公司担任过亚太区副总裁、中国区总经理、美国总部全球业务总经理等职务。</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="24" class="wd-row">
          <el-col :span="6">
            <img src="@/assets/images/tm/laowai.png"/>
          </el-col>
          <el-col :span="6">
            <div class="introduction">
              <span class="title">药小明</span><br><span class="title">测试部高级主任</span><br><br>
              <span class="content">加入药明康德集团之前，他曾在Hologic, Life Technologies, Applied Biosystems和Bio-Rad等多个跨国集团公司担任过亚太区副总裁、中国区总经理、美国总部全球业务总经理等职务。</span>
            </div>
          </el-col>
          <el-col :span="6">
            <img  src="@/assets/images/tm/jerry.png"/>
          </el-col>
          <el-col :span="6">
            <div class="introduction">
              <span class="title">药小明</span><br><span class="title">测试部高级主任</span><br><br>
              <span class="content">加入药明康德集团之前，他曾在Hologic, Life Technologies, Applied Biosystems和Bio-Rad等多个跨国集团公司担任过亚太区副总裁、中国区总经理、美国总部全球业务总经理等职务。</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mt'
};
</script>

<style scoped lang="stylus">
  .mt-container
    position: relative
    overflow-x: hidden
    .slf-introduction-wrapper
      display: flex
      font-size: 0px
      .introduction-wrapper
        background: #374895
        width: 29%
        height: 750px
        margin-left: 0px
        .introduction-container
          padding-top: 130px
          margin-left: 40%
          margin-right: 20px
          .introduction-title
            font-size: 40px
            color: #FFFFFF
            letter-spacing: 0
          .introduction-content
            font-size: 18px
            color: #FFFFFF
            letter-spacing: 0.3px
            line-height: 25px
      .members
        width: 71%
        display: inline-block
        .members-image
          width: 100%
          height: 580px
    .about-menu-wrap
      position: relative
      bottom: 240px
      left: 15%
      .sub-title-right
        float: right
    .member-container
      position: absolute
      top: 520px
      width: 75%
      height: auto
      margin-left: 15%
      .boss-wrapper
        height: 366px
        background: #FFFFFF
        .boss
          padding: 20px 130px 0px 495px
          .boss-content
            display: flex
            align-items: flex-start
            vertical-align: middle
            font-size: 26px
            color: #49484D
           .cn-introduction
             padding-right 20px
             border-right: 2px solid #49484D
           .en-introduction
             margin-left: 20px
          .boss-description
            height: 200px
            text-align: left
            .boss-text
              font-size: 24px
              color: #49484D
              line-height: 39px
      .director-wrapper
        background: #374895
        height: 366px
        .director-content
          padding-left: 495px
          padding-right: 20px
          height: 180px
          color: #FFFFFF
          text-align: left
          .director-title
            font-size: 24px
          .director-text
            font-size: 18px
        .director-img
          width: 292px
          height: 366px
      .boss-image
        position: absolute
        top: 0px
        img
          width: 438px
          height: 590px
      .director-wrapper2
        width: 100%
        background: #028BAD
        height: 366px
        .special-img
          position: relative
          bottom: 9px
        img
          width: 100%
          height: 100%
        .introduction
          width: 100%
          padding-top: 55px
          color: #FFFFFF
          text-align: left
          .title
            font-size: 24px
            letter-spacing: 0.26px
            margin-bottom: 24px
            line-height: 35px
          .content
            font-size: 18px
            line-height: 27px
        .wd-row
          position: relative
          bottom: 15px
          background: #374895
          margin-left: 0px !important
          margin-right: 0px !important

</style>

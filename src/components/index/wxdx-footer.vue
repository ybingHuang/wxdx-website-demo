<i18n>
{
    "zh": {
        "clinicalSpectrum": "临床质谱",
        "clinicalMolecular": "临床分子",
        "sgs": "二代测序",
        "immune": "免疫",
        "screeningDiagnosis": "筛查和早期诊断",
        "accurateDiagnosis": "精确诊断",
        "accurateTreatment": "精确治疗",
        "healthManagement": "长期健康管理",
        "newsCenter": "新闻中心",
        "news": "新闻",
        "ourValues": "我们的价值观"
    },
    "en": {
        "clinicalSpectrum": "Clinical spectrum",
        "clinicalMolecular": "Clinical molecular",
        "sgs": "second generation sequencing",
        "immune": "immune",
        "screeningDiagnosis": "Screening and early diagnosis",
        "accurateDiagnosis": "Accurate diagnosis",
        "accurateTreatment": "Accurate treatment",
        "healthManagement": "Long-term health management",
        "newsCenter": "News center",
        "news": "news",
        "ourValues": "Our values"
    }
}
</i18n>
<template>
  <div ref="footerContainer" class="footer-container">
  	<div class="footer-menu-layout">
  		<el-row>
		  <el-col :span="elColSize">
		  	<img src="../../assets/images/index/logo-icon.png">
		  </el-col>
		  <el-col :span="elColSize" class="text-left">
		  	<div class="title">
		  		{{$t('aboutUs')}}
		  	</div>
		  	<ul>
		  		<li>
		  			{{$t('menuWho')}}
		  		</li>
		  		<li>
		  			{{$t('menuMayo')}}
		  		</li>
		  		<li>
		  			{{$t('menuIncident')}}
		  		</li>
		  		<li>
		  			{{$t('mt')}}
		  		</li>
		  	</ul>
		  </el-col>
		  <el-col :span="elColSize" class="text-left">
		  	<div class="title">
		  		{{$t('platform')}}
		  	</div>
		  	<ul>
		  		<li>
		  			{{$t('clinicalSpectrum')}}
		  		</li>
		  		<li>
		  			{{$t('clinicalMolecular')}}
		  		</li>
		  		<li>
		  			{{$t('sgs')}}
		  		</li>
		  		<li>
		  			{{$t('pathologicalDiagnosis')}}
		  		</li>
		  		<li>
		  			{{$t('immune')}}
		  		</li>
		  	</ul>
		  </el-col>
		  <el-col :span="elColSize" class="text-left">
		  	<div class="title">
		  		{{$t('fuCanBag')}}
		  	</div>
		  	<ul>
		  		<li>
		  			{{$t('screeningDiagnosis')}}
		  		</li>
		  		<li>
		  			{{$t('accurateDiagnosis')}}
		  		</li>
		  		<li>
		  			{{$t('accurateTreatment')}}
		  		</li>
		  		<li>
		  			{{$t('healthManagement')}}
		  		</li>
		  	</ul>
		  </el-col>
		  <el-col :span="elColSize" class="text-left">
		  	<div class="title">
		  		{{$t('newsCenter')}}
		  	</div>
		  	<ul>
		  		<li>
		  			{{$t('news')}}
		  		</li>
		  		<li>
		  			{{$t('activity')}}
		  		</li>
		  	</ul>
		  </el-col>
		  <el-col :span="elColSize" class="text-left">
		  	<div class="title">
		  		{{$t('joinUs')}}
		  	</div>
		  	<ul>
		  		<li>
		  			{{$t('ourValues')}}
		  		</li>
		  		<li>
		  			{{$t('positionList')}}
		  		</li>
		  	</ul>
		  </el-col>
		</el-row>
  	</div>
  	<div class="footer-top">
  		<div class="footer-top-left">
  			<div class="about-us">
  				<span class="title">关于我们</span>
  				<img src="../../assets/images/index/test-icon1.png">
  				<img src="../../assets/images/index/test-icon2.png">
  				<img src="../../assets/images/index/test-icon3.png">
  			</div>
  			<div>
  				<span class="title">客服电话</span>
  				<span class="phone-number">400-820-7070</span>
  			</div>
  		</div>
  		<div class="footer-top-right">
  			<img src="../../assets/images/index/test-icon4.png">
  		</div>
  	</div>
  	<div class="footer-bottom">
  		<span>Copyright © WuXi Diagnostics 2019</span>
  		<span>沪ICP备XXXX号</span>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'wxdx-footer',
  data(){
  	return {
  		elColSize: 4
  	};
  },
  watch: {
  	$route(to,from){
  		if(to.fullPath == "/about/mayo"){
  			this.$refs.footerContainer.style.background = 'rgb(242,246,247)';
  		}else {
  			this.$refs.footerContainer.style.background = null;
  		}
  	}
  },
  mounted(){
  	if(this.$route.fullPath == "/about/mayo"){
		this.$refs.footerContainer.style.background = 'rgb(242,246,247)';
	}
  }
};
</script>

<style type="text/css">
	.footer-container {
    	
	}
	.footer-container .footer-menu-layout{
    	color: #374895;
    	padding: 80px 0 40px 0;
	}
	.footer-container .footer-menu-layout .el-row{
    	padding: 0px 15%;
	}
	.footer-container .footer-menu-layout .title{
    	padding-left: 10px;
	}
	.footer-container .footer-menu-layout img{
    	width: 60px;
	}
	.footer-container .footer-menu-layout ul{
    	list-style:none;
    	padding-left: 10px;
		border-left: 0.2px solid #374895;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		height: 128px;
	}
	.footer-container .footer-menu-layout ul li{
    	margin: 10px 0;
	}
	.footer-container .footer-top {
		height: 150px;
		width: 100%;
		background: #374895;
		margin-top: 36px;
	}
	.footer-container .footer-top .footer-top-left{
		text-align: left;
		float: left;
		margin-left: 20%;
		margin-top: 36px;
	}
	.footer-container .footer-top .footer-top-left .about-us{
		margin-bottom: 30px;
	}
	.footer-container .footer-top .footer-top-left .title {
		color:#FFFFFF ;
		font-size: 14px;
	    margin-right: 40px;
	}
	.footer-container .footer-top .footer-top-left .phone-number {
		color:#FFFFFF ;
		font-size: 18px;
	}
	.footer-container .footer-top .footer-top-left img {
		height: 25px;
		width: 25px;
	   	margin-right: 20px;
	   	vertical-align:middle;
	}
	.footer-container .footer-top .footer-top-right{
	    height: 150px;
	    text-align: left;
	    float: right;
	    margin-right: 20%;
	    margin-top: -40px;
	}
	.footer-container .footer-top .footer-top-right img{
		height: 150px;
	}
	.footer-container .footer-bottom {
		height: 50px;
		width: 100%;
		background: #2D2F4C;
	}
	.footer-container .footer-bottom span{
		color:#FFFFFF ;
		position: relative;
        top: 30%;
        margin-right: 30px;
	}
	.text-left {
		text-align: left;
	}
</style>

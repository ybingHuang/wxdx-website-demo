<template>
  <div ref="mayoContainer" class="mayo-container">
  	<div class="background">
  		<el-row>
  			<el-col :span="8" class="background-left"></el-col>
  			<el-col :span="16" class="background-right">
  				<img src="../../assets/images/mayo/IMG_2298.jpg">
  			</el-col>
  		</el-row>
  	</div>
  	<div ref="info" class="info clearfix">
  		<div class="info-head clearfix">
  			<div class="info-head-text">
  				<p class="title">梅奥医学实验室</p>
	  			<p class="content">作为梅奥诊所的核心竞争力之一，梅奥医学实验室（MCL）是一家为全球超过4600家医疗保健机构提供一流的检验和病理学服务的医院参考实验室，客户覆盖63个国家和地区。
				</p>
  			</div>
  			<img class="info-head-img" src="../../assets/images/mayo/mayo-1.png">
  		</div>
  		<about-nav activeName="mayo">
          {{ $t("menuMayo") }}
        </about-nav>
  		<div class="info-body">
  			<el-row class="info-row">
	  			<el-col :span="15" class="info-text">
	  				<p>梅奥医学实验室拥有3000+检测项目，全面覆盖各临床专科的筛查、诊断、治疗和预后各阶段需求。每年2300万检测量，113 套自主开发的逻辑算法，80％以上检测定量数据用于医疗决策制定，梅奥医学实验室的危急值为全世界130个国家所参考。</p>
  					<p>作为权威的研发团队，梅奥医学实验室拥有全球日均3万样本流转量，具有高时效性、高准确性的保证；同时，高度自动化样本分拣、规模化检测技术，标准化物流及样本前处理手段，为梅奥医学实验室提供主要的技术支持，不仅如此，梅奥致力于实践个体化医疗，由实验室专家和临床医生围绕每位患者共同制定诊断和治疗方案，为医院提供最顶级的医疗决策支持。</p>
	  			</el-col>
	  			<el-col :span="9" class="info-img">
	  				<img src="../../assets/images/mayo/mayo-2.png">
	  			</el-col>
	  		</el-row>
  			<div class="web-url">
  				<span>梅奥医学实验室官网：</span>
  				<a href="https://www.mayocliniclabs.com/">https://www.mayocliniclabs.com/</a>
  			</div>
  			<div class="info-video">
  				<video src="https://whiteboard.is/wp-content/uploads/2017/11/wb-background-1600x900.webm" controls="controls"></video>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
	import AboutNav from '@/components/about/about-nav.vue';
export default {
  name: 'mayo',
  components: { AboutNav },
  mounted(){
  	this.$refs.mayoContainer.style.height = this.$refs.info.clientHeight+'px';
  }
};
</script>

<style type="text/css">
	.interval {
	    float: left;
	    background-color: #FFFFFF;
	    width: 1px;
        height: 14px;
    	margin: 17px 10px;
	}
	.mayo-container {
		position: relative;
		background: rgb(242,246,247);
	}
	.backgroud {

	}
	.background .background-left{
		background: #374895;
		height: 800px;
	}
	.background .background-right img{
		filter: blur(2px);
		width: 100%;
	}
    .mayo-container .info{
		left: 0;
		right: 0;
		margin: auto;
	    top: 0;
	    position: absolute;
	    width: 860px;

	}
	.mayo-container .info .info-head{
		text-align: left;
		margin-bottom: 100px;
	}
	.mayo-container .info .info-head p{
		color: #FFFFFF;
	}
	.mayo-container .info .info-head span{
		color: #FFFFFF;
	}
	.mayo-container .info .info-head .info-head-text{
		float: left;
	}
	.mayo-container .info .info-head .info-head-img{
		float: right;
		width: 150px;
		margin: 60px 20px 0 0;
	}
	.mayo-container .info .info-head .info-head-text .title{
		font-size: 50px;
	}
	.mayo-container .info .info-head .info-head-text .content{
        width: 570px;
	    font-size: 20px;
	    font-weight: bold;
	}
	.mayo-container .info .sub-title p{
		color: #FFFFFF;
	}
	.mayo-container .info .sub-title .sub-title-left{
		float: left;
		font-size: 14px;
    	font-weight: bold;
	}
	.mayo-container .info .sub-title .sub-title-right{
		float: right;
		font-size: 14px;
    	font-weight: bold;
	}
	.mayo-container .info .sub-title .sub-title-right p{
		float: left;
	}
	.mayo-container .info .info-body {
		position: relative;
		background: #FFFFFF;
	}
	.mayo-container .info .info-body .info-row{
		padding-top: 260px;
	}
	.mayo-container .info .info-body .info-text{
		text-align: left;
		padding: 260px 40px 0 77px;
	}
	.mayo-container .info .info-body .info-text p{
		font-size: 22px;
		color: #49484D;
		margin-bottom: 60px;
	}
	.mayo-container .info .info-body .info-img{
		text-align: right;
	}
	.mayo-container .info .info-body .info-img img{
		width: 300px;
	}
	.mayo-container .info .info-body .web-url{
		padding-bottom: 60px;
	}
	.mayo-container .info .info-body .web-url span{
		font-size: 24px;
		color: #49484D;
	}
	.mayo-container .info .info-body .web-url a{
		font-size: 24px;
		color: rgb(97,125,234);
	 	text-decoration:none;
	}
	.mayo-container .info .info-body .info-video{
		position: absolute;
		top: 0;
		padding: 9%;
	}
	.mayo-container .info .info-body .info-video video{
		width: 100%;
	}
</style>

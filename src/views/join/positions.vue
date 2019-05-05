<template>
  <div class="positions-container">
  	<div class="background">
  		<el-row>
  			<el-col :span="6" class="background-col">
  				<img src="../../assets/images/position/position-1.png">
  				<div class="title-cyan">
  					<span>开放包容</span>
  				</div>
  			</el-col>
  			<el-col :span="6" class="background-col">
  				<img src="../../assets/images/position/position-2.png">
  				<div class="title-blue">
  					<span>专心专注</span>
  				</div>
  			</el-col>
  			<el-col :span="6" class="background-col">
  				<img src="../../assets/images/position/position-3.png">
  				<div class="title-cyan">
  					<span>敢想敢拼</span>
  				</div>
  			</el-col>
  			<el-col :span="6" class="background-col">
  				<img src="../../assets/images/position/position-4.png">
  				<div class="title-blue">
  					<span>因信得见</span>
  				</div>
  			</el-col>
  		</el-row>
  	</div>
  	<div class="info">
      <div class="info-head clearfix">
        <div class="info-head-title">
          职位列表
        </div>
        <div class="info-head-button">
          <el-input
            class="search-input"
            placeholder="请输入您想加入的职位"
          >
            <span slot="suffix" class="el-icon-search search-icon"></span>
          </el-input>
        </div>
      </div>
      <join-nav activeName="position">{{ $t("positionList") }}</join-nav>
      <div class="info-body">
        <ul class="positions">
          <li class="clearfix" v-for="item in positionList">
            <div class="positions-text">职位：<strong>{{item.position}}</strong></div>
            <div class="positions-text">部门：{{item.department}}</div>
            <div class="positions-text">办公地点：{{item.location}}</div>
            <el-button class="positions-button">职位详情</el-button>
          </li>
        </ul>
        <wxdx-pagination></wxdx-pagination>
      </div>
  	</div>
  </div>
</template>

<script>
  import JoinNav from '@/components/join/join-nav.vue';
  import WxdxPagination from '@/components/wxdx-pagination.vue';
export default {
  components: { WxdxPagination,JoinNav },
  name: 'positions',
  data() {
    return {
      positionList: [
        {
          id: '1',
          position: '(高级)产品经理',
          department: '市场部',
          location: '上海外高桥'
        },
        {
          id: '2',
          position: '(高级)产品经理',
          department: '市场部',
          location: '上海外高桥'
        },
        {
          id: '3',
          position: '(高级)产品经理',
          department: '市场部',
          location: '上海外高桥'
        },
        {
          id: '4',
          position: '(高级)产品经理',
          department: '市场部',
          location: '上海外高桥'
        },
        {
          id: '5',
          position: '(高级)产品经理',
          department: '市场部',
          location: '上海外高桥'
        },
        {
          id: '6',
          position: '(高级)产品经理',
          department: '市场部',
          location: '上海外高桥'
        },
        {
          id: '7',
          position: '(高级)产品经理',
          department: '市场部',
          location: '上海外高桥'
        },
        {
          id: '8',
          position: '(高级)产品经理',
          department: '市场部',
          location: '上海外高桥'
        },
        {
          id: '9',
          position: '(高级)产品经理',
          department: '市场部',
          location: '上海外高桥'
        },
        {
          id: '10',
          position: '(高级)产品经理',
          department: '市场部',
          location: '上海外高桥'
        }
      ]
    }
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
  .search-input {
    opacity: 0.85;
    width: 500px;
  }
  .search-input .search-icon {
    color: #028BAD;
    font-size: 22px;
  }
  .search-input .el-input__suffix {
    right: 10px;
    line-height: 46px;
  }
  .positions-container {
    position: relative;
  }
  .positions-container .background {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
  }
	.positions-container .background .background-col{
		position: relative;
	}
	.positions-container .background .background-col span{
		font-size: 26px;
		color: #FFFFFF;
	}
	.positions-container .background img{
		height: 500px;
		width: 100%;
		filter: brightness(80%);
	}
	.positions-container .background .title-cyan{
		background: #028BAD80;;
		padding: 25px;
		display: inline-block;
		position: absolute;
		right: 0;
		top: 0;
	}
	.positions-container .background .title-blue{
		background: #37489580;
		padding: 25px;
		display: inline-block;
		position: absolute;
		right: 0;
		top: 0;
	}

	.positions-container .info {
    /*height: 800px;*/
    padding: 100px 20% 0 20%;
    width: 60%;
    text-align: left;
	}
  .positions-container .info .info-head {
    margin-bottom: 40px;
  }
  .positions-container .info .info-head .info-head-title{
    font-size: 50px;
    color: #FFFFFF;
    float: left;
  }
  .positions-container .info .info-head .info-head-button{
    float: right;
    padding-top: 15px;
  }
	.positions-container .info .sub-title p{
    color: #FFFFFF;
  }
  .positions-container .info .sub-title .sub-title-left{
    float: left;
    font-size: 14px;
    font-weight: bold;
  }
  .positions-container .info .sub-title .sub-title-right{
    float: right;
    font-size: 14px;
    font-weight: bold;
  }
  .positions-container .info .sub-title .sub-title-right p{
    float: left;
  }
  .positions-container .info .info-body {
    padding: 20px;
    background: #F2F6F7;
    /*height: 600px;*/
  }
  .positions-container .info .info-body .positions {
    list-style:none;
    padding: 0;
  }
  .positions-container .info .info-body .positions li{
    background: #FFFFFF;
    padding: 8px 8px 8px 25px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .positions-container .info .info-body .positions .positions-text{
    font-size: 14px;
    margin-right: 50px;
    float: left;
    padding-top: 8px;
  }
  .positions-container .info .info-body .positions .positions-button{
    padding: 10px 14px;
    background: #576BC7;
    color: #FFFFFF;
    border-radius: 7px;
    float: right;
  }
</style>

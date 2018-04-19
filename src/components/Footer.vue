<template>
 <div class='footer'>
   <div class="arrow" v-show="pageIndex!=5"></div>
  <div  class="footer-text" v-show="pageIndex==5">
    <p>F12（command+option+J）有彩蛋</p>
    <p>All Rights Reserved</p>
    <p>蜀ICP备15021330号 Copyright © 2015 - 2017</p>
  </div>
 </div>
</template>

<script>
import {mapState} from'vuex'
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  },
  computed:{
        ...mapState(['pageIndex'])
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
.footer{
  .arrow{
    z-index: 100;
    position: absolute;
    bottom:50px;
    left:50%;
    transform: translateX(-50%);
    width:20px;
    height:35px;
    background:url("/static/img/arrow.svg") no-repeat bottom  center;
    background-size:cover;
    animation: arrowAnimate 1.5s ease-in-out infinite;
  }
@keyframes arrowAnimate {
	0% {
		bottom: 10px;
		opacity: 0.8;
	}
	50% {
		bottom: 20px;
		opacity: 1;
	}
	80% {
		bottom: 22px;
		opacity: 0.4;
	}
	100% {
		bottom: 22px;
		opacity: 0;
	}
}
  .footer-text{
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    z-index: 100;
    color:black;
    text-align: center;
    border-top: 1px solid #756D4D;
    p{
      margin:5px 0;
      font-size: 12px;
    }
  }
}
</style>
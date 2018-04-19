<template>
  <div class='my-info'>
    <h2 class="content-title">{{data.info.title}}</h2>
    <div class="content-info">
        <div class="info" v-for="(item,index) in data.info.infoList" :key="index">
          <div class="icon"><img :src="item.icon" alt=""></div>
          <p>{{item.key}}/{{item.value}}</p>
        </div>
    </div>
    <div class="info-des">
      <p v-for="(item,index) in data.info.desList" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from'vuex'
export default {
  name:'MyInfo',
  data () {
    return {
      
    }
  },
    computed:{
        ...mapState(['data'])
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.my-info{
  width: 100vw;
  height:100vh;
  background:rgb(16, 144, 133);
  color:white;
 .content-title{
   padding:30px 0;
   text-align: center;
 }
 .content-info{
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   .info{
        display: list-item;
          text-align: center;
          width:100px;
          margin:0 20px;
    .icon{
         width:90px;
         height: 90px;
         border-radius: 50%;
         background: rgba(255,255,255,0.1);
         position: relative;
         margin-bottom:20px;
         cursor: pointer;
         transition: transform ease-out 0.1s, background 0.2s;
       img{
         width: 50%;
         height: 50%;
         position: absolute;
           top: 50%;
         left: 50%;
         transform: translate3d(-50%,-50%,0);
             
       }
       &:after{
						content: '';
						position: absolute;
						box-shadow: 0 0 0 2px rgba(255,255,255,0.1);
						opacity: 0;
						transform: scale(0.9);
						width: 100%;
						height: 100%;
            border-radius: 50%;
            top:0;
            left:0;
					}
					&:hover{
						background: rgba(255,255,255,0.05);
						transform: scale(0.93);
						color: #fff;
					}
					&:hover:after{
						animation: effect 1.3s ease-out 75ms;
					}
     }
     p{
       text-align: center;
       padding-bottom:10px;
     }
   }
 }
 .info-des{
   text-align: center;
   padding-top:50px;
   p{
     margin:20px 0;
   }
 }
}
@keyframes effect {
	0% {
		opacity: 0.3;
	}
	40% {
		opacity: 0.5;
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #109085, 0 0 0 10px rgba(255,255,255,0.5);
	}
	100% {
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #109085, 0 0 0 10px rgba(255,255,255,0.5);
		transform: scale(1.5);
		opacity: 0;
	}
}
 @media screen and(max-width:600px) {
   .my-info{
     .content-title{
       opacity:0;
     }
     .content-info{
       .info{
         .icon{
           width: 80px;
           height: 80px;
         }
         p{
           width: 80px;
           font-size:16px; 
         }
       }

     }
     .info-des{
        padding-top:20px;
       p{
         font-size:16px;
      margin:10px 0;
      }
  }
   }
   
 }
</style>
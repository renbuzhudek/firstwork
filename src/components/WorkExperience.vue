<template>
 <div class='work-experience'>
   <h2 class="content-title">{{data.experience.title}}</h2>
   <div class="content">
     <div class="banner" ref="move"
      @mousemove="mousemoveHandler" 
      @mouseout="mouseoutHandler"
      >
     <transition-group name="fade" mode="out-in">
       <div class="content-experience"
       v-for="(item,index) in data.experience.expList"
       :key="index"
       v-show="index==curIndex"
       >
         <div class="content-left">
           <div class="img">
           <img  :src="item.imgUrl">
           </div>
         </div>
         <div class="content-right">
            <h2>{{item.title}}</h2>
            <p>{{item.time}}</p>
            <p>{{item.post}}</p>
            <p>{{item.tech}}</p>
            <ul >
            <li v-for="(v,k) in item.contentList" :key="k">{{k+1}}.{{v}}</li>
           </ul>
         </div>
       </div>
     </transition-group>
     </div>
        <div class="dot">
       <ul>
         <li v-for="(item,index) in data.experience.expList.length"
          :key="index"
          @click="toExper(index)"
          :class="{'active':index==curIndex}"></li>
       </ul>
     </div>
     <p class="exp-des">{{data.experience.des}}</p>
   </div>
 </div>
</template>

<script>
import {mapState} from'vuex'
export default {
name:'WorkExperience',
  data () {
    return {
      curIndex:0
    }
  },
    computed:{
        ...mapState(['data'])
       
    },
    methods:{
      toExper(index){
        this.curIndex=index;
      },
      mousemoveHandler(e){
                     
                let 
                el=this.$refs.move,
                     	bannerWidth = el.offsetWidth,
				             	bannerHeight = el.offsetHeight,
			              	offsetLeft = el.offsetLeft,
				            	offsetTop = el.offsetTop,
                      pageX = e.pageX,
                      pageY = e.pageY,
                       x =  pageX- offsetLeft - bannerWidth/2,
                      y = bannerHeight/2-pageY + offsetTop+140;
                    	el.style.transform = "rotateY(" + x/50 + "deg) rotateX(" + y/50 + "deg)";
     
      },
      mouseoutHandler(e){
        this.$refs.move.style.transform = "rotateY(0deg) rotateX(0deg)";
      },

    
    },
    mounted(){
      window.onresize=this.onResize;
        //this.$refs.move.addEventListener('mousemove',this.mousemoveHandler);
      //  this.$refs.move.addEventListener('mouseout',this.mouseoutHandler);
      
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.work-experience{
  width: 100vw;
  height:100vh;
  background:rgb(75, 133, 160);
  .content-title{
   padding:30px 0;
   text-align: center;
   color:white;
 }
 .content{
   position: absolute;
   left: 0;
   right:0;
   bottom: 0;
    .banner{
      width:750px;
      height:350px;
      margin:0 auto;
      background: white;
      border-radius: 15px;
          box-shadow: 0 0 25px rgba(0,0,0,.5);
      .content-experience{
        height: 100%;
        position: absolute;
        .content-left{
          float: left;
          height: 100%;
          .img{
           position: relative;
            width:150px;
            height: 100%;
            img{
              position: absolute;
              top:50%;
              left:50%;
              transform: translate3d(-50%,-50%,0);
                width:55%;
            }
            
          }
        }
        .content-right{
          float:left;
                  color: #945C4C;
                   h2{
          margin:30px 0;
        }
          p{
           margin:20px 0;
          }
          ul{
            li{
              color:black;
              margin:10px 0;
            }
          }
        }
       
      }
      
    }
     .dot{
       width:200px;
       margin:20px auto;
        ul{
          display:flex;
          justify-content: space-between;
              align-items: center;
          li{
            width:10px;
            height: 10px;
            border-radius:50%;
            background: #623C32;
            cursor:pointer;
          transition: background-color 0.3s ease;
          position: relative;
          	&:before{
						content: '';
						position: absolute;
						top: -15px;
						right: -15px;
						left: -15px;
						bottom: -15px;
					}
          }
          .active{
           background-color: #AF7164;
          }
        }
     }
     .exp-des{
       text-align: center;
       margin:40px 0;
       font-size:22px;
       color:white;
     }
   
 }

}

 .fade-enter-active{
  animation:todo1 1s ease  reverse ;
}
.fade-leave-active{
  animation : todo1 1s ;
}

@keyframes todo1{
  0%{opacity:1;}
  100%{opacity: 0;}
}
@media screen and (max-width: 600px){
	.work-experience{
    	.content-title{
			opacity:0;
		}
		.content{
			top:80px;
			.banner{
				width: 90%;
				height: 80%;
				.content-experience{
					.content-left{
						display: none;
					}
					.content-right{
						width: 90%;
						margin: 0 auto;
						padding: 0;
						float: none;
						h2{
							font-size: 16px;
							margin: 10px 0;
						}
						p{
							margin: 10px 0;
						}
						
						ul{
							li{
								font-size: 12px;
								line-height: 16px;
								margin: 12px 0;
							}
						}
					}
				}
			}
			.dot{
				padding-top: 35px;
			}
			.exp-des{
				display: none;
			}
		}
	}
}
</style>
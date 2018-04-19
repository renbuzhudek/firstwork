<template>
  <div class='skill-stack'>
    <h2 class="content-title">{{data.skill.title}}</h2>
    <div class="content">
      <div class="contain">
        <div class="skill-circle">
          
            <ul class="out-circle-list">
              <li class="-out" 
              v-for="(item,index) in data.skill.outCircleList" 
              :key="index"
              :style="{background:item.color}">
              {{item.name}}
              </li>
            </ul>
          
          <ul class="-innerCircle">
            <li class="-inner"
            v-for="(item,index) in data.skill.innerCircleList"
            :key="index"
            :style="{background:item.color}">
            {{item.name}}
            </li>
          </ul>
        </div>
        <div class="des">
					<p v-for="(item,index) in data.skill.desList" :key="index">{{item}}</p>
				</div>
    </div>
    </div>
  </div>
</template>

<script>
import {mapState} from'vuex'
export default {
 name:'SkillStack',
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
.skill-stack{
  width: 100vw;
  height:100vh;
  background:rgb(77, 94, 143);
  color:white;
  .content-title{
   padding:30px 0;
   text-align: center;
 }
 .content{
	 position: absolute;
	 top:0;
	 left:0;
	 bottom:0;	
	width: 100%;
   .contain{
     display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		max-width: 800px;
		margin: 0 auto;
		
   .skill-circle{
      padding: 5px;
			position: relative;
		
			width: 300px;
			color: #FFF;
     .out-circle-list{
        width: 242px;
				height: 242px;
				border: 4px dashed #999;
				border-radius: 50%;
				position: relative;
				margin: 0 auto;
         .-out{
           width: 50px;
					height: 50px;
					border-radius: 50%;
					position: absolute;
					text-align: center;
          line-height: 50px;
          	font-size: 12px;
					-webkit-backface-visibility: hidden; 
         }
         .-out:nth-child(1){
					animation: outX 8s cubic-bezier(0.36,0,0.64,1) -4s infinite alternate, outY 8s cubic-bezier(0.36,0,0.64,1) 0s infinite alternate;
				}
				.-out:nth-child(2){
					animation: outX 8s cubic-bezier(0.36,0,0.64,1) -6s infinite alternate, outY 8s cubic-bezier(0.36,0,0.64,1) -2s infinite alternate;
				}
				.-out:nth-child(3){
					animation: outX 8s cubic-bezier(0.36,0,0.64,1) -8s infinite alternate, outY 8s cubic-bezier(0.36,0,0.64,1) -4s infinite alternate;
				}
				.-out:nth-child(4){
					animation: outX 8s cubic-bezier(0.36,0,0.64,1) -10s infinite alternate, outY 8s cubic-bezier(0.36,0,0.64,1) -6s infinite alternate;
				}
				.-out:nth-child(5){
					animation: outX 8s cubic-bezier(0.36,0,0.64,1) -12s infinite alternate, outY 8s cubic-bezier(0.36,0,0.64,1) -8s infinite alternate;
				}
				.-out:nth-child(6){
					animation: outX 8s cubic-bezier(0.36,0,0.64,1) -14s infinite alternate, outY 8s cubic-bezier(0.36,0,0.64,1) -10s infinite alternate;
				}
				.-out:nth-child(7){
					animation: outX 8s cubic-bezier(0.36,0,0.64,1) -16s infinite alternate, outY 8s cubic-bezier(0.36,0,0.64,1) -12s infinite alternate;
				}
				.-out:nth-child(8){
					animation: outX 8s cubic-bezier(0.36,0,0.64,1) -18s infinite alternate, outY 8s cubic-bezier(0.36,0,0.64,1) -14s infinite alternate;
				}
       }
    .-innerCircle{
				width: 142px;
				height: 142px;
				border: 4px dashed #999;
				border-radius: 50%;
				position: absolute;
				text-align: center;
				line-height: 50px;
				top: 50%;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
				.-inner{
					width: 40px;
					height: 40px;
					border-radius: 50%;
					position: absolute;
					text-align: center;
          line-height: 40px;
          	font-size: 12px;
					-webkit-backface-visibility: hidden;
				}
				.-inner:nth-child(1){
					animation: innerX 8s cubic-bezier(0.36,0,0.64,1) -4s infinite alternate, innerY 8s cubic-bezier(0.36,0,0.64,1) 0s infinite alternate;
				}
				.-inner:nth-child(2){
					animation: innerX 8s cubic-bezier(0.36,0,0.64,1) -8s infinite alternate, innerY 8s cubic-bezier(0.36,0,0.64,1) -4s infinite alternate;
				}
				.-inner:nth-child(3){
					animation: innerX 8s cubic-bezier(0.36,0,0.64,1) -12s infinite alternate, innerY 8s cubic-bezier(0.36,0,0.64,1) -8s infinite alternate;
				}
				.-inner:nth-child(4){
					animation: innerX 8s cubic-bezier(0.36,0,0.64,1) -16s infinite alternate, innerY 8s cubic-bezier(0.36,0,0.64,1) -12s infinite alternate;
				}
			}
		
     }
	 }
	 .des{
		 p{
			 font-size:20px;
			 text-align:center;
			 padding:10px 0;
		 }
	 }
 }
 
}
@keyframes outX {
	0% {  left: -27px;  }
	100% {  left: 217px;  }
}
@keyframes outY {
	0% {  top: -27px;  }
	100% {  top: 217px;  }
}
@keyframes innerX {
	0% {  left: -22px;  }
	100% {  left: 122px;  }
}
@keyframes innerY {
	0% {  top: 122px;  }
	100% {  top: -22px;  }
}

@media screen and (max-width: 1366px) {
	.skill-stack {
		.content{
			top: 200px;
		}
	}
}
@media screen and (max-width: 710px) {
	.skill-stack {
		.content{
			top: 100px;
			.contain{
				.skill-circle{
					margin:0 auto;
				}
				.des{
					
					margin:0 auto;
					p{
						font-size:16px;
					}
				}
			}
		}
	}
}
@media screen and (max-width: 600px) {
	.skill-stack{
		.content-title{
			opacity:0;
		}
	}

}
</style>
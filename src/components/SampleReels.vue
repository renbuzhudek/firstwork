<template>
 <div class='sample-reels' >

   <h2 class="content-title">{{data.works.title}}</h2>
   <div class="content">
     <ul class="work-list" ref="workList">
     
       <li class="work-item"
       v-for="(item,index) in data.works.worksList"
       :key="index"
      :style="{display:index==indexs?'block':'none'}"
       >
       <h4>{{item.title}}</h4 >
       <p>{{item.des}}</p>
       </li>
      
     </ul>
       <div class="work-more">
            <a href="#" target="_blank" >{{data.works.viewMore}}</a>
        </div>
        <div class="work-switch" @click="switchWork($event)">
            <i class="left"></i>
            <i class="right"></i>
        </div>
   </div>
 </div>
</template>

<script>
import {mapState} from'vuex'
export default {
 name:'SampleReels',
  data () {
    return {
        indexs:0,
       
    }
  },
    computed:{
        ...mapState(['data'])
       
    },
    methods:{
        switchWork(e){
         if(e.target.nodeName!='I') return;
         if(e.target.className=='left'){ 

           if(this.indexs<=0) {this.indexs=3;
           }else{this.indexs-=1;}

         };
         if(e.target.className=='right'){
           if(this.indexs>=3){this.indexs=0;}else{this.indexs+=1;}
         }
           
     
        }
    },
    mounted(){
   
    }       
     
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.sample-reels{
  width: 100vw;
  height:100vh;
  background:rgb(75, 133, 120);
   .content-title{
   padding:30px 0;
   text-align: center;
 }
 .content{
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   .work-list{
    
     overflow: hidden;
     padding:0 10px;
     color:#000;
      margin: 0 auto;
    
   
     .work-item{
           box-shadow: 0 3px 10px rgba(0,0,0,.2);
    border-radius: 6px;
    background: white;
           padding: 15px;
    margin-bottom: 20px;
    width:47%;
  box-sizing: border-box;
  font-size:14px;
  height:50vh;
  margin:0 auto;
     }
     
   }
     .work-more{
       margin-top:15vh;
    text-align: center;
    font-size:20px;
    padding:5px 0;
   a{
      color:white;
   }
  }
    .work-switch{
    display: flex;
      justify-content: space-between;
      position: absolute;
      left:5%;
      right:5%;
      bottom:10vh;
      width:45vw;
      margin:0 auto;
      .left{
        width:30px;
        height: 30px;
        border-radius: 50%;
          background:  url(/static/img/arrow.svg) center 35% no-repeat;
          background-size:70%;
          border:1px solid white ;
          transform: rotate(-90deg);
      }
      .right{
         width:30px;
        height: 30px;
        border-radius: 50%;
          background:  url(/static/img/arrow.svg) center 35% no-repeat;
          background-size:70%;
          border:1px solid white ;
          transform: rotate(90deg);
      }
    }
 }

}

@media screen and (max-width: 630px){
  .sample-reels{
    
     .content-title{
        opacity: 0;
    }
    .content{
      .work-list{
        
        .work-item{
          height:60vh;
          width:100%;
        }
      }
      .work-switch{
        width:90%;

      }
    }
  }
}

</style>
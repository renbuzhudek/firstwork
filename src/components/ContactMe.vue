<template>
 <div class='contact-me'>
   <h2 class="content-title">{{data.contact.title}}</h2>
   <div class="content">
     <div class="contact-des1">
       <span v-for="(item,index) in data.contact.desList1" :key="index">{{item}}</span>
     </div>
     <div class="contact-des2">
       <p v-for="(item,index) in data.contact.desList2" :key="index">{{item}}</p>
     </div>
     <ul class="contact-bottom">
       <li v-for="(item,index) in data.contact.typeList" :key="index">
         <a :href="item.url"><img :src="item.icon"></a>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
import {mapState} from'vuex'
export default {
  name: 'ContactMe',
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
.contact-me{
  width: 100vw;
  height:100vh;
  background:rgb(162, 153, 113);
   .content-title{
       text-align: center;
        padding:30px 0 100px 0;
        color:white;
    }
    .content{
      max-width:350px;
      margin:0 auto;
         .contact-des1{
      font-size: 22px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-size:25px;
      span:nth-child(1){
        color:#F00;
      }
      span:nth-child(2){
        color:#3cf;
      }
      span:nth-child(3){
        color:#6c0;
      }
      span:nth-child(4){
        color:#f63;
      }
    }
    .contact-des2{
      p{
        text-align:center;
         font-size: 16px;
         word-spacing:1px;
      margin: 15px auto;
      color:white;
      }
    }
     .contact-bottom{
           display:flex;
          justify-content: space-around;
          margin:100px auto 0;
      li{
          width: 40px;
          height: 40px;
          border-radius:50%;
          border:1px solid white;
         position: relative;

          a{
         
            img{
                 position: absolute;
            top:50%;
            left:50%;
            transform: translate3d(-50%,-50%,0);
              width: 80%;
            }
          }
      }
     }
    }
}

@media screen and (max-width: 600px){
  .contact-me{
    
     .content-title{
        opacity: 0;
    }
   
  }
}
</style>
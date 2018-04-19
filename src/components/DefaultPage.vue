<template>
  <div class='default'>
    <div class="content">
      <div class="content-top"></div>
        <div class="content-center">
         <p>
          {{data.default.quote}}
        </p>
      </div>
      <div class="content-buttom">
        <p v-for="(item,index) in data.default.desList" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from'vuex'
export default {
  name: 'DefaultPage',
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
.default{
  width: 100vw;
  height:100vh;
  background:rgb(135, 176, 165);
  .content{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate3d(-50%,-50%,0);
    text-align: center;
    color:white;
    .content-top{
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      height:150px;
      width:150px;
      border-radius:50%;
      background:url(/static/img/photo.jpg) no-repeat  center ;
      background-size:cover;
     
    }
    .content-center{
    position: relative;
    padding: 20px 0;
    margin-bottom:40px; 
       &:after {
     content: "";
    position: absolute;
    left: 10%;
    right: 10%;
    bottom: 0;
    height: 1px;
    background-color: rgba(255,255,255,.6);
        }

    }
    .content-buttom{
      p{
        margin:20px 0;
      }
    }
  }
}
@media screen  and(max-width:600px){
  .default{
    .content{
      top:100px;
      transform: translate3d(-50%,0,0);
      .content-center{
        p{
          font-size:16px;
        }
      }
      .content-buttom{
        p{
          font-size: 16px;
        }
      }
    }
    

  }
  
}
</style>

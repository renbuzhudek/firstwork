

<template>
  <div  class="content"  ref="transitions">
      <header-item></header-item>
    <transition :name="anime" @afterEnter="transitionend"  >
        <keep-alive>
         <component :is="show" class="page-section" ></component>
        </keep-alive>
    </transition>
    <footer-item></footer-item>
  </div>
  
</template>

<script>
import HeaderItem from '@/components/Header'
import footerItem from '@/components/Footer'
import DefaultPage from '@/components/DefaultPage'
import ContactMe from '@/components/ContactMe'
import MyInfo from '@/components/MyInfo'
import SampleReels from '@/components/SampleReels'
import SkillStack from '@/components/SkillStack'
import WorkExperience from '@/components/WorkExperience'
import { mapActions ,mapState} from 'vuex'
export default {
  name: 'RootCom',
  data(){
    
    return{
      show:'DefaultPage',
      Runing:false,
      anime:'',
      start:'',
      coms:[
          { id:0,name:'DefaultPage'},
          { id:1,name: 'MyInfo'},
          { id:2,name:'SkillStack'},
          { id:3,name:'WorkExperience'},
          { id:4,name:'SampleReels'},
          { id:5,name:'ContactMe'},
          ]
    }
  },
  computed:{
        ...mapState(['pageIndex'])
  },
  mounted(){
    this.$refs.transitions.addEventListener('touchstart',this.touchstartHandler);
  
   this.$refs.transitions.addEventListener('touchend',this.touchendHandler);
  },
  methods:{
      ...mapActions(['changePage']),
   
    setPage(e){
                if(!this.runing){
               if((e.wheelDelta>0)&&(this.pageIndex>0) ){this.changePage(-1);this.runing=!this.runing;}
               if ((e.wheelDelta<0)&&(this.pageIndex<5)){this.changePage(+1);this.runing=!this.runing;}
            }              
              this.$refs.transitions.addEventListener('transitionend',this.transitionend);    
                   
        },
          transitionend(e){
        
              this.runing=false;
              
          },
          touchstartHandler(e){
                this.start=e.changedTouches[0].pageY;
                

          },
       
            touchendHandler(e){
              let disY=e.changedTouches[0].pageY-this.start;
               if((disY<0&&this.pageIndex==5)||(disY>0&&this.pageIndex==0)||(disY==0) ){return};
                if(disY<0){
                    this.changePage(1);
                }else{this.changePage(-1);}
                this.start=0;
            }
                

    },
    watch:{
        pageIndex(newV,oldV){
              
                    this.show=this.coms[newV].name;
                    if(newV-oldV>0){
                        this.anime='show';
                    }
                    else{
                        this.anime='pre';
                        }
                
        }
    },
   
    components:{
          DefaultPage,
          ContactMe,
          MyInfo,
          SampleReels,
          SkillStack,
          WorkExperience,
        HeaderItem,
        footerItem
    }
  
}
</script>

<style scoped>
.content{
width:100vw;
height: 100vh;
overflow: hidden;
 transform:translate3d(0,0,0);
}
.page-section{
	position: absolute;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	display: block;
}
.pre-enter-active,.pre-leave-active{transition:transform 0.5s ease; }
    .pre-enter{
        transform: translate3d(0,-100%,0);         
    }
    .pre-leave-to{
        transform: translate3d(0,100%,0);
    }

    .show-enter-active,.show-leave-active{transition:transform 0.5s ease; }
   .show-leave-to{
        transform: translate3d(0,-100%,0);              
    }
    .show-enter{
       transform: translate3d(0,100%,0);
    }
    
</style>
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
  name: 'PcView',
  data(){
    
    return{
      show:'DefaultPage',
      Runing:false,
      anime:'',
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
    this.$refs.transitions.addEventListener('mousewheel',this.setEventTimeOut(this.setPage,100));
   
  },
  methods:{
      ...mapActions(['changePage']),
      setEventTimeOut(fn,time){
          let date= new Date();
          return function(){
              let now =new Date();
              if(now-date>time){
                  fn(...arguments);
                  
              };
              date=now;
          }
      },
    setPage(e){
                if(!this.runing){
               if((e.wheelDelta>0)&&(this.pageIndex>0) ){this.changePage(-1);this.runing=!this.runing;}
               if ((e.wheelDelta<0)&&(this.pageIndex<5)){this.changePage(+1);this.runing=!this.runing;}
            }              
              this.$refs.transitions.addEventListener('transitionend',this.transitionend);    
                   
        },
          transitionend(e){
        
              this.runing=false;
              
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
<template>
 <div class='header'>
     <div class="header-head">
         <div class="header-left"> </div>
         <div class="center-item" :class="{rote:isShow}" @click.self="showItem">
             {{data.header.titleList[pageIndex].title}}
        </div>
         <div class="header-right"  :class="{langEn:selectIndex==1}">
            
             <span  
              v-for="(item,i) in data.header.langList"
               :key="i"
               @click="langTrain(i,$event)"
               :class="{selectLan:selectIndex==i}"
               >
               {{item}}
               </span>
             
         </div>
     </div>
     <transition name="fade">
     <div class="header-nav" v-show="isShow">
         <ul class="title-list">
         <li v-for="(item,index) in data.header.titleList" 
         :key="index" class="title-item"
          :class="{active:pageIndex==index}"
          @click="gotoPages(index,$event)">
           {{item.title}}
          </li>
         
         </ul>
     </div>
     </transition>
     <div class="header-nav-dot">
         <ul >
             <li  v-for="(item,index) in data.header.titleList"
             :key="index"
             @click="goto(index,$event)"
             :class="{'cur-index':index==pageIndex}">
                    <div class="dot" >
                        <img   :src="item.svg"  >
                    </div>
                    <span class="dot-title">{{item.title}}</span>
             </li>
         </ul>
     </div>
 </div>
</template>

<script>
import {mapState,mapActions} from'vuex'
export default {
  name: 'Header',
  created(){
        this.$store.dispatch('changeLang','cn');
       
  },
  data () {
      return{
        isShow:false,
       selectIndex:0
      }
    },
    computed:{
        ...mapState(['data','lang','pageIndex'])
       
    },
    methods:{
        showItem(){
                this.isShow=!this.isShow;
                
        },
        langTrain(i,e){
                  this.selectIndex=i; 
                  (i==0)&&(this.changeLang('cn'));
                (i==1)&&(this.changeLang('en'));
                
        },
        gotoPages(index,e){
                this.gotoPage(index);
                this.isShow=!this.isShow;
        },
        goto(index,e){
                this.gotoPage(index);
        },
        ...mapActions(['changeLang','gotoPage'])
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header{
    position: absolute;
    top:0;
    left:0;
    right:0;
    height:60px;
    z-index:200;
    .header-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:60px;
        padding:0 3%;
        .header-left{
             
            float:left;
            height:40px;
            width:40px;
            border-radius: 50%;
            background: url(../img/left-boy.png) no-repeat center center;   
        }
        .center-item{
           color:white;
           position: relative;
           display: none;
           &:after{
               position: absolute;
               top:50%;
               right:-15px;
               content:"";
               width:0;
               height:0;
               border-left:5px solid transparent;
                border-right:5px solid transparent;
                border-top: 5px solid white ;
                transition: transform 0.5s ease;
           }
          
        }
         .rote{
             &:after{
            transform: rotate(180deg);
            
             }
        }
        .header-right{
            position: relative;
            float:right;
            width:60px;
            height:30px;
            border-radius:30px;
            background:rgba(255, 255, 255,0.1);
            

                span{
                    display: inline-block;
                    width:30px;
                    height: 30px;
                    border-radius: 30px;
                    line-height: 30px;
                    text-align: center;
                    color: rgba(0,0,0,.4);
                    
                }
                .selectLan{
                    
                    color:white;
                }
                &:after{
                    position: absolute;
                    content:"";
                    top:0;
                    left:0;
                    width:30px;
                    height: 30px;
                    border-radius:50%;
                    background:rgba(0,0,0,0.75);
                    z-index:-1;
                     transform:translateX(0);
                    transition: transform 0.3s;
                }
            
        }
        .langEn{
            &:after{
                transform:translateX(100%);
            }
        }
    }
    .title-list{
        height:50px;
        background:rgba(255, 255, 255, 0.4);
        display: flex;
        align-items: center;
        justify-content: space-around;
        .title-item{
            font-style: normal;
            
        }
        .active{
            color:cyan;
        }
    }
    .fade-enter-active,.fade-leave-active{
        transition: opacity 0.5s linear;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .header-nav-dot{
        position:fixed;
        top:50%;
        transform: translateY(-50%);
        right:10px;
        ul{
            li{
                 display: flex;
                    align-items: center;
                    justify-content:space-around ;
                width:35px;
                height: 35px;
                .dot{
                  
                    width:12px;
                    height: 12px;
                    border-radius: 50%;
                    background:rgba(0,0,0,0.7);
                    opacity: 0.1;
                      display: flex;
                    align-items: center;
                    justify-content:space-around ;
                    cursor: pointer;
                    transition: all .3s ease;
                  &:hover {
                      opacity: 1;
                    width:36px;
                    height: 36px;
                      
                     background: black;
                     
                     img{
                           opacity: 1;
                      width: 60%;
                         }
                  
                     }
                     &:hover+span{
                         opacity:1;
                     }
                     img{
                         position: absolute;
                     transition: all .3s ease;
    
                        width: 20%;
					    opacity: 0;
					
                    }
                }
                .dot-title{
                    
                    position: absolute;
                    left:-80px;
                    display: inline-block;
                    width:63px;
                    text-align: center;
				background: rgba(0,0,0,.7);
                color: #FFF;
                opacity: 0;
                border-radius: 3px 0 0 3px;
                font-weight: bold;
                line-height: 24px;
                &:after{
                    content: "";
                    position: absolute;
                    right:-12px;
                    width:0;
                    height: 0;
                    border-top: 12px solid transparent;
					border-left: 12px solid rgba(0, 0, 0, 0.7);
					border-bottom: 12px solid transparent;
                }
                }
            }
            .cur-index{
                .dot{
                    opacity: 1;
                     width:36px;
                    height: 36px;
                    img{
                        opacity: 1;
                         width: 60%;
                    }
                }
            }
        }
    }
}

@media screen and (max-width:600px) {
    .header{
        .header-head{
            .center-item{
                display:block;
                font-size:16px;
            }
        }
         .header-nav{
            .title-list{
                height:30px;
                li{
                     font-size: 16px;
                }
               
            }
        }
        .header-right{
            span{
                font-size: 16px;
            }
        }
            .header-nav-dot{
			    display: none;
		    }
    }
}
</style>
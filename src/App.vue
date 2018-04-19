<template>

  <div id="app">

 <component :is="show"></component>

  </div>
  
</template>

<script>
import RootCom from './components/rootCom/RootCom'
import PcView from './components/rootCom/PcView'
export default {
  name: 'App',
  data(){
    return {
      show:'RootCom'
    }
  },

methods:{
 _isPc() {
	
	return ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"].every(function (i) {
		return navigator.userAgent.indexOf(i) < 0;
	});
	
}
},
    components:{
         RootCom,
         PcView
    },
      created(){
        
       if( this._isPc() ) {
         this.show='PcView';
         console.log('在PC端浏览');
       }else{
         console.log('在移动端浏览');
       }
  } 
  
}
</script>

<style>

</style>

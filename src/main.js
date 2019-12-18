import Vue from 'vue';
import App from './App.vue'
//这样直接引用vue 并不是vue.js  而是vue的runtime
//vue = compiler + runtime （compiler 可以编译模板）
new Vue({
   el:'#app',
   /*render:function (createElement) {
      return createElement(App);
   }*/
   render:(c)=>c(App)

});

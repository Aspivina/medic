<template>
  <div class="visor">
   <p>{{my_detail[this.indice].title}}</p>
   <div>
    <input class="rango" type="range" min="0" :max="my_detail[this.indice].file_names.length-1" step="1" v-model.number="value">
    {{value + 1}}
   </div>
   <img alt="" :src="resuelvo"> 
  </div>
</template>

<script>
export default {
  name: 'visor',
  props: [
     'my_detail',
     'indice',
  ],
  data() {
     return {
        value:0,
     }
  },
  computed: {
     resuelvo(){
         // console.log(temp);
        return require('@/assets/img/'
               + this.my_detail[this.indice].directory
               + '/'
               + this.my_detail[this.indice].file_names[this.value]+'');
     }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .visor {
      grid-area: visor;
      
      border: 1px double #2c3e50;
    
   }
   .visor p{
      font-weight: bold;
      font-size: 18px;
      margin: 5px 0 0 0;
      padding: 0; 
   }
   .rango{
      cursor: pointer;
      background: green;
   }
   .visor img{
      margin: 15px 0 0 0;
      width: 80%;
   }


</style>

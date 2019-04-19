<template>
  <div class="archivos">
    <p><strong>Estudios</strong></p>
    <ol>
      <li v-for="(detail, index) of details" v-bind:key="detail.file_key" @click="selecting(index)">
         {{detail.title}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'archivos',
  props: [
     'details',
  ],
  data(){
     return{
     }
  },
  methods: {
     selecting(indice){
        this.$emit('ejemplo', indice);
     }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .archivos {
      grid-area: archivos;
      border: 1px double #2c3e50;   
   }
   .archivos p{
      margin: 5px 0 0 0;
      padding: 0; 
   }
   .archivos ol{
      text-align: justify;
      margin-top: 0;
      
   }
   /* .archivos li{
      list-style: none;
   } */
   .archivos li:hover{
      background: lightseagreen;
      cursor: pointer;
   }

</style>

<template>
  <div class="bigContainer">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <archivos @ejemplo="seleccionando" :details="image_list"/>
    <visor :indice="archivoSeleccionado" :my_detail="image_list"/>
    <cabecera />
  <!-- <pre>{{$data}}</pre> -->
  </div>
</template>

<script>
// @ is an alias to /src
import cabecera from '@/components/cabecera.vue'
import archivos from '@/components/archivos.vue'
import visor from '@/components/visor.vue'
import image_list from '@/helpers/image_list.js'

export default {
  name: 'home',
  props: [],
  data () {
    return{
      icon_show : false,
      image_list : image_list,
      archivoSeleccionado: 0,
    }
  },
  components: {
    cabecera,
    archivos,
    visor,
    
  },
  methods: {
      seleccionando(busqueda){
        this.archivoSeleccionado = busqueda;
      },
  },
}
</script>
<style>
  body{
    margin: 0;
  }
  .bigContainer{
    display: grid;
    grid-template-columns: 450px 1fr;
    grid-template-rows: 300px 1fr;
    grid-template-areas:  "archivos visor"
                          "cabecera visor";
    justify-content: space-around;
    align-content: stretch;
    height: 100vh;

  }
  .detalles{
    grid-area: detalles;
    display: grid;
    grid-template-areas:  "archivos visor";
    justify-items: left;


  }
</style>

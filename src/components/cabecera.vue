<template>
  <div class="cabecera">
    <p><strong>R.M. DE PELVIS CON CONTRASTE E.V. (GADOLINIO).</strong></p>
    <p><strong>Conclusión:</strong> miomatosis uterina y quiste hemorrágico en ovario derecho.</p>
    <ul>
      <li>Vejiga: sin particularidades.</li>
      <li>Vagina: sin particularidades.</li>
      <li>Utero: múltiples imágenes hipointensas en t2, redondeadas,
         de 59 mm la mayor, en el espesor de la pared, con realce
            homogéneo con el contaste endovenoso sugerentes de miomas.</li>
      <li>Anexo Derecho: presenta dos imágenes quísticas, de 34 y 27 mm,
         de paredes finas, sin realce con el contraste endovenoso. 
         La mayor de ellas presenta contenido hiperintenso en t1 e hipointenso
            en t2, sugerente de quiste hemorragico.</li>
      <li>Anexo Izquierdo: sin particularidades.</li>
      <li>Recto: sin particularidades.</li>
      <li>Escaso liquido libre en fondo de saco de Douglas.</li>
      <li>Cadenas iliacas y regiones inguinales sin particularidades.</li>
      <li>Resto de estructuras óseas y tejidos blandos sin evidencia de alteraciones.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cabecera',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .cabecera {
      grid-area: cabecera;
      border: 1px double #2c3e50;
   }

   .cabecera ul{
      margin: 5px;
      padding: 0 5px 0 25px;
      text-align: justify;
   }
   .cabecera p{
      margin: 5px;
      text-align: justify;
   }

</style>

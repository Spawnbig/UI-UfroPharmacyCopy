<template>
  <v-data-table id="tabla"
    :headers="headers"
    :items="tabla"
    :items-per-page="10"
    class="elevation-1"
  >
  <template v-slot:[`item.grafico`]="{ item }">
    <v-btn
    v-on:click="onClick(item)">
    Grafico</v-btn>
  </template>
  </v-data-table>
</template>

<script>
export default {
    props:{
        tabla:[],
    },
    methods:{
        onClick(item){
            this.$router.push('/reportes/reviews/'+item.productos.id)
        }
    },
    data(){
        return {
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: true,
            value: 'id',
          },
          { text: 'Nombre Usuario', value: 'nombre_usuario',sortable: false },
          { text: 'Fecha Review', value: 'fecha_review',sortable: true },
          { text: 'Recomendado', value: 'calificacion',sortable: true },
          { text: 'ID Producto', value: 'productos.id',sortable: false},
          { text: 'Nombre Producto', value: 'productos.nombre_producto',sortable: true},
          { text: 'Grafico', value: "grafico"}
        ],
      }
    }

}
</script>


<style scoped>
@import url(../../../../assets/reportes/css/tablas.css);
</style>
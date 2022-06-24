<template>
  <v-data-table id="tabla"
    :headers="headers"
    :items="tabla"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
    props:{
        tabla:[],
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
          { text: 'Marca', value: 'marca',sortable: false },
          { text: 'Categoria', value: 'categoria',sortable: false },
          { text: 'Precio', value: 'precio',sortable: true },
          { text: 'Cantidad', value: 'cantidad', sortable: true},
          { text: 'Nombre Producto', value: 'nombre_producto', sortable: false},
          { text: 'Razon Social', value: 'razon_social_titular', sortable: false},
          { text: 'Condicion Venta', value: 'condicion_de_venta', sortable: true},
          { text: 'Descripcion', value: 'descirpcion', sortable: false},
          { text: 'Descuento', value: 'descuento', sortable: false},
          { text: 'Fecha Tecnica', value: 'fechaTecnica',sortable: true}
        ],
      }
    }
}
</script>


<style scoped>
@import url(../../../../assets/reportes/css/tablas.css);
</style>
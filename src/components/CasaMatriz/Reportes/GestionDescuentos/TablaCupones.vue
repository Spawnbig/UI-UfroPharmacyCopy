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
            text: 'ID Cupon',
            align: 'start',
            sortable: true,
            value: 'id',
          },
          { text: 'Codigo', value: 'codigo',sortable: false },
          { text: 'Porcentaje Descuento', value: 'porcentajeDescuento',sortable: true },
          { text: 'Fecha Expiracion', value: 'fechaExpiracion',sortable: true }
        ],
      }
    }

}
</script>


<style scoped>
@import url(../../../../assets/reportes/css/tablas.css);

</style>
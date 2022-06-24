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
            text: 'ID Descuento',
            align: 'start',
            sortable: true,
            value: 'id',
          },
          { text: 'Porcentaje Descuento', value: 'porcentajeDescuento',sortable: true },
          { text: 'Fecha Inicio Descuento', value: 'fechaInicioDescuento',sortable: true },
          { text: 'Fecha Expiracion', value: 'fechaExpiracion',sortable: true },
          { text: 'Categoria',value: 'categoria'},
          { text: 'Marca', value: 'marca'},
          { text: 'Activo', value: 'activo'}
        ],
      }
    },
    computed: {
        getString(b){
            if(b){
                return 'SI'
            }else {
                return 'NO'
            }
        }
    }
}
</script>


<style scoped>
@import url(../../../../assets/reportes/css/tablas.css);

</style>
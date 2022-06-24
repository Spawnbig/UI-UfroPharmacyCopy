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
    methods:{
        getStringFecha(fecha){
            return fecha.slice(0,16);
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
          { text: 'Fecha Despacho', value: 'fechaHoraDespacho',sortable: false },
          { text: 'Fecha Llegada', value: 'fechaHoraLlegada',sortable: true },
          { text: 'Fecha Estimada Entrega', value: 'fechaEstimadaEntrega',sortable: true },
          { text: 'Estado Despacho', value: 'estadoDespacho', sortable: true},
        ],
      }
    }

}
</script>


<style scoped>
@import url(../../../../assets/reportes/css/tablas.css);

</style>
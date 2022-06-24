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
          { text: 'ID Cliente', value: 'cliente.id',sortable: true },
          { text: 'Categoria', value: 'categoria',sortable: false },
          { text: 'ASUNTO', value: 'asunto',sortable: true },
          { text: 'Fecha Creación', value: 'fechaCreacion',sortable: true},
          { text: 'Estado Ticket', value: 'estadoTicket', sortable: true}  
        ],
      }
    }
 
}
</script>


<style scoped>
@import url(../../../../assets/reportes/css/tablas.css);
</style>
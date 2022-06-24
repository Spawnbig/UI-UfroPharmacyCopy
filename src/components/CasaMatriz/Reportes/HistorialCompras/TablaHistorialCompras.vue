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
          { text: 'Usuario', value: 'usuario.nombre',sortable: true },
          { text: 'Tipo pago', value: 'tipoPago',sortable: false },
          { text: 'Fecha', value: 'fecha',sortable: true },
          { text: 'Precio Total',value : 'precioTotal', sortable: true}
        ],
      }
    },
    methods:{
        getStringFecha(fecha){
            return fecha.slice(0,16);
        }
    }

}
</script>


<style scoped>
@import url(../../../../assets/reportes/css/tablas.css);
    #table .id {
        width: 10%; 
    }
    #table .codigo{
        width: 30%;
    }
    #table .descuento{
        width: 30%;
    }
    #table .fecha-exp{
        width: 30%;
    }


</style>
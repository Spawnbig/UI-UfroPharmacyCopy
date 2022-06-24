<template>
  <div>
    <Navigator></Navigator>
    <v-container v-if="load" fluid class="w-75">
      <v-row class="text-center mt-4"><h1 class="lg">Tabla Tickets</h1></v-row>
      <v-row class="text-center mt-0">
        <h3 class="subtitulo mt-2">Filtrar por fecha de Creación</h3>
      </v-row>
      <v-row class="mt-2" align="center">
        <v-col class="text-right"><label>Fecha Inicio</label></v-col>
        <v-col class="text-left">
          <input type="datetime-local" v-model="fechaInicio"/>
        
        </v-col>
        <v-col class="text-right"><label>Fecha Termino</label></v-col>
        <v-col class="text-left"><input type="datetime-local" v-model="fechaTermino"/></v-col>
        <v-col><v-btn
            color="#F9CD7A"
            elevation="4"
            v-on:click="filtrar()"
        >Filtrar</v-btn></v-col>
      </v-row>
       <v-row class="mt-1 mb-4 text-center" align="center">
            <v-col md="2"></v-col>
            <v-col>
              <v-select
                :items="items"
                item-text="text"
                item-value="value"
                v-model="estado"
                label="Estado Ticket"
              ></v-select>
            </v-col>
            <v-col ><v-btn
                color="#F9CD7A"
                elevation="4"
                v-on:click="filtrarEstado()"
            >Filtrar</v-btn></v-col>

      </v-row>

    </v-container>

    <v-container v-if="load">
      <div v-if="((filterDate || filterEstado) && load)" class="text-center w-25 ml-auto mr-auto mb-4">
        <v-btn
            color="#F9CD7A"
            elevation="4"
            v-on:click="getTickets()"
        >Reset</v-btn>
      </div>
      <TablaTickets :tabla="tickets" :filter="filterDate"></TablaTickets>
    </v-container>
    <v-container class="text-center mt-4" v-else>
      <h1>NO SE ENCONTRARON DATOS</h1>
      <v-btn
          color="#F9CD7A"
          elevation="4"
          v-on:click="getTickets()"
      >Reset</v-btn>
    </v-container>
    <v-container v-if="load" class="text-center mt-4">
        <a href="http://localhost:9000/reportes/tickets/export"><img class="icon" src='../../assets/reportes/icons/file_download_black_36dp.svg'/></a>
        <router-link to="/reportes/tickets/grafico"><img class="icon" src='../../assets/reportes/icons/analytics_black_24dp.svg'
        alt="Mostrar grafico"/></router-link>
    </v-container>  
  </div>
</template>

<script>
import axios from 'axios'
import TablaTickets from '../../components/CasaMatriz/Reportes/ServicioCliente/TablaTickets.vue'
import Navigator from '../../components/CasaMatriz/Reportes/NavReportes.vue'

export default {
    components: {
        TablaTickets,
        Navigator
    },
    data(){
    return{
      tickets : null,
      load : false,
      filterDate : false,
      filterEstado : false,
      fechaInicio: null,
      fechaTermino: null,
      estado: null,
      items: [
        { text:'Abierto', value:'ABIERTO'},
        { text:'Pendiente', value: 'PENDIENTE'},
        { text:'Cerrado', value: 'CERRADO'}
      ]
    }
  },
  mounted(){
    this.getTickets();
  },
  methods:{
    getTickets(){
        let url = "http://localhost:9000/reportes/tickets";
      axios
        .get(url)
        .then( response => {
            this.tickets = response.data;
            if (this.tickets.length > 0){
                this.load = true;
                this.filterDate = false;
                this.filterEstado = false;
            }else {
                this.load = false;
            }
        })
        .catch( e => {console.log(e)});
    },
    filtrar(){    
      let url = "http://localhost:9000/reportes/tickets/"+this.fechaInicio+'/'+this.fechaTermino
      console.log(url)
      if (this.fechaInicio != null && this.fechaTermino != null 
      && this.fechaInicio != '' && this.fechaTermino != ''){
        this.load = false;
        axios.get(url)
        .then(respone => {
          this.tickets = respone.data;
            if (this.tickets.length > 0){
                this.load = true;
                this.filterDate = true;
                this.filterEstado = false;
                this.cacheInicio = this.fechaInicio;
                this.cacheTermino = this.fechaTermino;
            }else {
                this.load = false;
            }
        })
      }
    },
    filtrarEstado(){
      let url = "http://localhost:9000/reportes/tickets/"+this.estado
      console.log(url)
      if (this.estado != null){
        this.load = false;
        axios.get(url)
        .then(respone => {
          this.tickets = respone.data;
            if (this.tickets.length > 0){
                this.load = true;
                this.filterDate = false;
                this.filterEstado = true;
            }else {
                this.load = false;
            }
        })
      }
    }

  }
}
</script>


<style scoped>
@import url(../../assets/reportes/css/main.css);
</style>

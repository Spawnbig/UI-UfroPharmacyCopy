<template>
<main>
  <Navigator></Navigator>
  <v-container v-if="load" fluid class="w-75">
    <v-row class="text-center mt-4"><h1 class="lg">Tabla Cupones</h1></v-row>
    <v-row class="text-center mt-0">
      <h3 class="subtitulo mt-2">Filtrar por fecha de Expiracion</h3>
    </v-row>
    <v-row class="mt-4 mb-4">
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
  </v-container>
  <v-container v-if="load">
    <div v-if="filter && load" >
      <v-btn
          color="#F9CD7A"
          elevation="4"
          v-on:click="getCupones()"
      >Reset</v-btn>
    </div>
    <TablaCupones id="tabla" :tabla="cupones" :filter="filter"></TablaCupones>
  </v-container>

  <v-container class="text-center mt-4" v-else>
      <h1>NO SE ENCONTRARON DATOS</h1>
      <v-btn
          color="#F9CD7A"
          elevation="4"
          v-on:click="getCupones()"
      >Reset</v-btn>
  </v-container>

  <v-container v-if="load" class="text-center mt-4">
        <a href="http://localhost:9000/reportes/cupones/export"><img class="icon" src='../../assets/reportes/icons/file_download_black_36dp.svg'
        alt="Descargar Excel"/></a>
        <router-link to="/reportes/cupon/grafico"><img class="icon" src='../../assets/reportes/icons/analytics_black_24dp.svg'
        alt="Mostrar grafico"/></router-link>
  </v-container>

</main>
</template>

<script>
import axios from 'axios'
import TablaCupones from '../../components/CasaMatriz/Reportes/GestionDescuentos/TablaCupones.vue'
import Navigator from '../../components/CasaMatriz/Reportes/NavReportes.vue'


export default {
    components: {
        TablaCupones,
        Navigator
    },
    data(){
    return{
      cupones : null,
      load : false,
      filter : false,
      fechaInicio: null,
      fechaTermino: null,
    }
  },
  mounted(){
    this.getCupones();
  },
  methods:{
    getCupones(){
        let url = "http://localhost:9000/reportes/cupones";
      axios
        .get(url)
        .then( response => {
            this.cupones = response.data;
            if (this.cupones.length > 0){
                this.load = true;
                this.filter = false;
            }else {
                this.load = false;
            }
        })
        .catch( e => {console.log(e)});
    },
    filtrar(){    
      let url = "http://localhost:9000/reportes/cupones/"+this.fechaInicio+'/'+this.fechaTermino
      if (this.fechaInicio != null && this.fechaTermino != null 
      && this.fechaInicio != '' && this.fechaTermino != ''){
        this.load = false;
        axios.get(url)
        .then(respone => {
          this.cupones = respone.data;
            if (this.cupones.length > 0){
                this.load = true;
                this.filter = true;
                this.cacheInicio = this.fechaInicio;
                this.cacheTermino = this.fechaTermino;
            }else {
                this.load = false;
            }
        })
      }else if (this.fechaInicio == '' && this.fechaTermino == ''){
        this.getCupones()
      }


      
    }

  }
}
</script>

<style scoped>
@import url(../../assets/reportes/css/main.css);

</style>
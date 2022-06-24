<template>
  <main>
    <Navigator></Navigator>
    <v-container v-if="load" fluid class="w-75">
      <v-container v-if="load" fluid class="w-75">
        <v-row class="text-center mt-4"><h1 class="lg">Tabla Descuentos Productos</h1></v-row>
        <v-row class="text-center mt-0">
          <h3 class="subtitulo mt-2">Filtrar por fecha de Expiracion</h3>
        </v-row>
        <v-row class="mt-4 mb-4">
          <v-col class="text-right xd"><label>Fecha Inicio</label></v-col>
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
      <v-container>
        <v-container v-if="filter && load">
          <v-btn
              color="#F9CD7A"
              elevation="4"
              v-on:click="getProductos()"
          >Reset</v-btn>
        </v-container>
        <TablaDescuentos :tabla="productos" :filter="filter"></TablaDescuentos>
      </v-container>
    </v-container>
    <v-container class="text-center mt-4" v-else>
        <h1>NO SE ENCONTRARON DATOS</h1>
        <v-btn
            color="#F9CD7A"
            elevation="4"
            v-on:click="getProductos()"
        >Reset</v-btn>
    </v-container>
    <v-container v-if="load" class="text-center mt-4">
        <a href="http://localhost:9000/reportes/productosdescuento/export"><img class="icon" src='../../assets/reportes/icons/file_download_black_36dp.svg'/></a>
        <router-link to="/reportes/descuento/grafico"><img class="icon" src='../../assets/reportes/icons/analytics_black_24dp.svg'
        alt="Mostrar grafico"/></router-link>
    </v-container>
  </main>
</template>

<script>
import axios from 'axios'
import TablaDescuentos from '../../components/CasaMatriz/Reportes/GestionDescuentos/TablaDescuentos.vue';
import Navigator from '../../components/CasaMatriz/Reportes/NavReportes.vue'

export default {
    components: {
    TablaDescuentos,
    Navigator
},
    data(){
    return{
      productos : null,
      load : false,
      filter : false,
      fechaInicio: null,
      fechaTermino: null,
    }
  },
  mounted(){
    this.getProductos();
  },
  methods:{
    getProductos(){
        let url = "http://localhost:9000/reportes/productosdescuento";
      axios
        .get(url)
        .then( response => {
          let dataTemp = response.data;
          dataTemp.forEach(e => {
            e.activo = (e.activo) ? 'SI': 'NO';
          });
          this.productos = dataTemp;
          if (this.productos.length > 0){
            this.load = true;
            this.filter = false;
          }else {
            this.load = false;
          }
        })
        .catch( e => {console.log(e)});
    },
    filtrar(){    
      let url = "http://localhost:9000/reportes/productosdescuento/"+this.fechaInicio+'/'+this.fechaTermino
      console.log(url)
      if (this.fechaInicio != null && this.fechaTermino != null 
      && this.fechaInicio != '' && this.fechaTermino != ''){
        this.load = false;
        axios.get(url)
        .then(respone => {
          this.productos = respone.data;
            if (this.productos.length > 0){
                this.load = true;
                this.filter = true;
                this.cacheInicio = this.fechaInicio;
                this.cacheTermino = this.fechaTermino;
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
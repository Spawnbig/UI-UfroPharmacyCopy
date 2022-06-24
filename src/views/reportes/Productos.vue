<template>
  <main>
    <Navigator></Navigator>
    <v-container v-if="load" fluid class="w-75 text-center mt-4 mb-4" >
      <v-row><h1>Tabla Productos</h1></v-row>
    </v-container>  
    <v-container v-if="load">
      <TablaProductos :tabla="productos" :filter="filter"></TablaProductos>
    </v-container>
    <v-container v-else class="text-center mt-4">
      <h1>NO SE ENCONTRARON DATOS</h1>
      <v-btn
          color="#F9CD7A"
          elevation="4"
          v-on:click="getProductos()"
      >Reset</v-btn>
    </v-container>
    <v-container v-if="load" class="text-center mt-4">
      <a href="http://localhost:9000/reportes/productos/export"><img class="icon" src='../../assets/reportes/icons/file_download_black_36dp.svg'/></a>
    </v-container>
  </main>  
</template>

<script>
import axios from 'axios'
import TablaProductos from '../../components/CasaMatriz/Reportes/Productos/TablaProductos.vue'
import Navigator from '../../components/CasaMatriz/Reportes/NavReportes.vue'

export default {
    components: {
        TablaProductos,
        Navigator
    },
    data(){
    return{
      productos : null,
      load : false,
      fechaInicio: null,
      fechaTermino: null,
    }
  },
  mounted(){
    this.getProductos();
  },
  methods:{
    getProductos(){
        let url = "http://localhost:9000/reportes/productos";
      axios
        .get(url)
        .then( response => {
            this.productos = response.data;
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
      let url = "http://localhost:9000/reportes/productos"+this.fechaInicio+'/'+this.fechaTermino
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

<template>
  <main>
    <Navigator></Navigator>
    <v-container v-if="load" fluid class="w-75">
      <v-row class="text-center mt-4"><h1 class="lg">Tabla Despachos</h1></v-row>
      <v-row class="text-center mt-0">
        <h3 class="subtitulo mt-2">Filtrar por Estado</h3>
      </v-row>
      <v-row class="mt-4 mb-4 text-center" align="center">
        <v-col md="2"></v-col>
        <v-col>
          <v-select
            :items="items"
            item-text="text"
            item-value="value"
            v-model="estado"
            label="Estado Despacho"
          ></v-select>
        </v-col>
        <v-col ><v-btn
          color="#F9CD7A"
          elevation="4"
          v-on:click="filtrar()"
          >Filtrar</v-btn></v-col>
        </v-row>
    </v-container>
    <v-container v-if="load" class="text-center">
      <div v-if="filter && load" class="form-container">
        <v-btn
            color="#F9CD7A"
            elevation="4"
            v-on:click="getDespachos()"
            class="mb-4"
        >Reset</v-btn>
      </div>
      <TablaDespacho :tabla="despachos" :filter="filter"></TablaDespacho>
    </v-container>
    <v-container v-else class="text-center mt-4">
      <h1>NO SE ENCONTRARON DATOS</h1>
      <v-btn
          color="#F9CD7A"
          elevation="4"
          v-on:click="getDespachos()"
      >Reset</v-btn>
    </v-container>
    <v-container v-if="load" class="text-center mt-4">
      <a href="http://localhost:9000/reportes/despachos/export"><img class="icon" src='../../assets/reportes/icons/file_download_black_36dp.svg'/></a>
      <router-link to="/reportes/despacho/grafico"><img class="icon" src='../../assets/reportes/icons/analytics_black_24dp.svg'
      alt="Mostrar grafico"/></router-link>
    </v-container>  
  </main>

</template>

<script>
import axios from 'axios'
import TablaDespacho from '../../components/CasaMatriz/Reportes/Despacho/TablaDespacho.vue'
import Navigator from '../../components/CasaMatriz/Reportes/NavReportes.vue'

export default {
    components: {
        TablaDespacho,
        Navigator
    },
    data(){
    return{
      despachos : null,
      load : false,
      filter : false,
      estado : null,
      items: [
        { text:'Pendiente', value:'PENDIENTE'},
        { text: 'Listo para Despacho', value: 'LISTO_PARA_DESPACHO'},
        { text: 'En camino',value:'EN_CAMINO'},
        { text: 'Entregado',value: 'ENTREGADO'}
      ],
    }
  },
  mounted(){
    this.getDespachos();
  },
  methods:{
    getDespachos(){
        let url = "http://localhost:9000/reportes/despachos/";
      axios
        .get(url)
        .then( response => {
            this.despachos = response.data;
            if (this.despachos.length > 0){
                this.load = true;
                this.filter = false;
            }else {
                this.load = false;
            }
        })
        .catch( e => {console.log(e)});
    },
    filtrar(){    
      let url = "http://localhost:9000/reportes/despachos/"+this.estado
      console.log(url)
      if (this.estado != null){
        this.load = false;
        axios.get(url)
        .then(respone => {
          this.despachos = respone.data;
            if (this.despachos.length > 0){
                this.load = true;
                this.filter = true;
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
<template>
  <main>
    <Navigator></Navigator>
    <v-container v-if="load" fluid class="w-75 text-center mt-4 mb-4" >
      <v-row><h1>Tabla Reviews</h1></v-row>
    </v-container>  
    <v-container v-if="load" class="mt-5">
      <v-container v-if="filter && load" class="form-container">
        <v-btn
            color="#F9CD7A"
            elevation="4"
            v-on:click="getProductos()"
        >Reset</v-btn>
      </v-container>
      <TablaReviews :tabla="reviews"></TablaReviews>
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
    <a href="http://localhost:9000/reportes/reviews/export"><img class="icon" src='../../assets/reportes/icons/file_download_black_36dp.svg'/></a>
    </v-container>  
  </main>  
</template>

<script>
import axios from 'axios'
import TablaReviews from '../../components/CasaMatriz/Reportes/Reviews/TablaReviews.vue'
import Navigator from '../../components/CasaMatriz/Reportes/NavReportes.vue'

export default {
    components: {
        TablaReviews,
        Navigator
    },
    data(){
    return{
      reviews : null,
      load : false,
      filter : false
    }
  },
  mounted(){
    this.getReviews();
  },
  methods:{
    getReviews(){
      let url = "http://localhost:9000/reportes/reviews";
      axios
        .get(url)
        .then( response => {
            let dataTemp = response.data;
            dataTemp.forEach(e => {
              e.calificacion = (e.calificacion) ? 'SI' : 'NO';
            });
            this.reviews = dataTemp;
            if (this.reviews.length > 0){
                this.load = true;
                this.filter = false;
            }else {
                this.load = false;
            }
        })
        .catch( e => {console.log(e)});
    },
    filtrar(id){    
      let url = "http://localhost:9000/reportes/reviews/id/"+id
      console.log(url)
      if (this.estado != null){
        this.load = false;
        axios.get(url)
        .then(respone => {
          this.reviews = respone.data;
            if (this.reviews.length > 0){
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

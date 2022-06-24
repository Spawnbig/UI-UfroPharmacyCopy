<template>
<div>
  <Navigator></Navigator>
  <div id="container-graph">
    <div class="titulo">
      <H1>Grafico Total Ventas por mes, año {{annio}}</H1>
    </div>
    <Bar v-if="loaded" :chart-data="chartData"/>
  </div>
  <div class="container-buttons">
    <button class="avance" v-on:click="annio--;actualizar()" type="button" name="btn-sig">Anterior</button>
    <button class="exportar" v-on:click="exportar()" type="button" name="btn-sig">Exportar</button>
    <button class="avance" v-on:click="annio++;actualizar()" type="button" name="btn-sig">Siguiente</button>
  </div>
</div>  
</template>

<script>
import axios from 'axios'
import Exporter from '../Exporter'
import Navigator from '../NavReportes.vue'
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar , Navigator},
  data() {
    return {
      chartData: [],
      loaded: false,
      loadedData:[],
      annio: 2022
    }
  },
  async mounted(){
    this.loaded = false;
    this.loadedData = [0,0,0,0,0,0,0,0,0,0,0,0]
    try{
      let url = "http://localhost:9000/reportes/boletas"
      await axios.get(url)
            .then(r => {
              console.log(r.data)
              r.data.forEach(e => {
                let year = e.fecha.slice(0,4)
                let month = e.fecha.slice(5,7)
                if (year == this.annio && month == '01'){
                  this.loadedData[0] += e.precioTotal;
                }else if (year == this.annio && month == '02'){
                  this.loadedData[1] += e.precioTotal;
                }else if (year == this.annio && month == '03'){
                  this.loadedData[2] += e.precioTotal;
                }else if (year == this.annio && month == '04'){
                  this.loadedData[3] += e.precioTotal;
                }else if (year == this.annio && month == '05'){
                  this.loadedData[4] += e.precioTotal;
                }else if (year == this.annio && month == '06'){
                  this.loadedData[5] += e.precioTotal;
                }else if (year == this.annio && month == '07'){
                  this.loadedData[6] += e.precioTotal;
                }else if (year == this.annio && month == '08'){
                  this.loadedData[7] += e.precioTotal;
                }else if (year == this.annio && month == '09'){
                  this.loadedData[8] += e.precioTotal;
                }else if (year == this.annio && month == '10'){
                  this.loadedData[9] += e.precioTotal;
                }else if (year == this.annio && month == '11'){
                  this.loadedData[10] += e.precioTotal;
                }else{
                  this.loadedData[11] += e.precioTotal;
                }
              })}).catch(e =>{console.log(e)
      });
      this.chartData = {
        labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets: [
          {
            label:'Venta Total',
            backgroundColor:[
            '#FFC300',
            '#ffa106',
            '#ff7101',
            '#ff0175',
            '#a2004c',
            '#60002d',
            '#5a00ae',
            '#0062c4',
            '#0076ed',
            '#00b6ff',
            '#00cba3',
            '#00ad27 '
            ],
            data:this.loadedData
          }
        ]
      }
      this.loaded = true;
    }catch(e){
      console.log(e)
    }
  },
  methods:{
    async actualizar(){
    this.loaded = false;
    this.loadedData = [0,0,0,0,0,0,0,0,0,0,0,0]
    try{
      this.loaded = false;
      let url = "http://localhost:9000/reportes/boletas"
      await axios.get(url)
            .then(r => {
              console.log(r.data)
              r.data.forEach(e => {
                let year = e.fecha.slice(0,4)
                let month = e.fecha.slice(5,7)
                if (year == this.annio && month == '01'){
                  this.loadedData[0] += e.precioTotal;
                }else if (year == this.annio && month == '02'){
                  this.loadedData[1] += e.precioTotal;
                }else if (year == this.annio && month == '03'){
                  this.loadedData[2] += e.precioTotal;
                }else if (year == this.annio && month == '04'){
                  this.loadedData[3] += e.precioTotal;
                }else if (year == this.annio && month == '05'){
                  this.loadedData[4] += e.precioTotal;
                }else if (year == this.annio && month == '06'){
                  this.loadedData[5] += e.precioTotal;
                }else if (year == this.annio && month == '07'){
                  this.loadedData[6] += e.precioTotal;
                }else if (year == this.annio && month == '08'){
                  this.loadedData[7] += e.precioTotal;
                }else if (year == this.annio && month == '09'){
                  this.loadedData[8] += e.precioTotal;
                }else if (year == this.annio && month == '10'){
                  this.loadedData[9] += e.precioTotal;
                }else if (year == this.annio && month == '11'){
                  this.loadedData[10] += e.precioTotal;
                }else if (year == this.annio){
                  this.loadedData[11] += e.precioTotal;
                }
              })}).catch(e =>{console.log(e)
      });
      this.chartData = {
        labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets: [
          {
            label:'Venta Total',
            backgroundColor:[
            '#FFC300',
            '#ffa106',
            '#ff7101',
            '#ff0175',
            '#a2004c',
            '#60002d',
            '#5a00ae',
            '#0062c4',
            '#0076ed',
            '#00b6ff',
            '#00cba3',
            '#00ad27 '
            ],
            data:this.loadedData
          }
        ]
      }
      this.loaded=true;
    }catch(e){
      console.log(e)
    }

    },
    exportar(){
      let bar = document.getElementById("container-graph")
      const exp = new Exporter([bar]);
      exp.export_pdf().then((pdf) => pdf.save("GraficoCupones.pdf"))
    }
  }
}
</script>

<style scoped>
@import url(../../../../assets/reportes/css/graficos.css);

</style>


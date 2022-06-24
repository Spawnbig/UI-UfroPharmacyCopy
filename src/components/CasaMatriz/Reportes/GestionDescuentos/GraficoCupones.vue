<template>
<div>
  <Navigator></Navigator>
  <div id="container-graph">
    <div class="titulo">
      <H1>Grafico Cupones por mes, año {{annio}}</H1>
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
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import Navigator from '../NavReportes.vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar , Navigator },
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
      let url = "http://localhost:9000/reportes/cupones/"
      await axios.get(url)
            .then(r => {
              console.log(r.data)
              r.data.forEach(e => {
                let year = e.fechaExpiracion.slice(0,4)
                let month = e.fechaExpiracion.slice(5,7)
                if (year == this.annio && month == '01'){
                  this.loadedData[0]++
                }else if (year == this.annio && month == '02'){
                  this.loadedData[1]++
                }else if (year == this.annio && month == '03'){
                  this.loadedData[2]++
                }else if (year == this.annio && month == '04'){
                  this.loadedData[3]++
                }else if (year == this.annio && month == '05'){
                  this.loadedData[4]++
                }else if (year == this.annio && month == '06'){
                  this.loadedData[5]++
                }else if (year == this.annio && month == '07'){
                  this.loadedData[6]++
                }else if (year == this.annio && month == '08'){
                  this.loadedData[7]++
                }else if (year == this.annio && month == '09'){
                  this.loadedData[8]++
                }else if (year == this.annio && month == '10'){
                  this.loadedData[9]++
                }else if (year == this.annio && month == '11'){
                  this.loadedData[10]++
                }else{
                  this.loadedData[11]++
                }
              })}).catch(e =>{console.log(e)
      });
      this.chartData = {
        labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets: [
          {
            label:'Cupones',
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
      let url = "http://localhost:9000/reportes/cupones/"
      await axios.get(url)
            .then(r => {
              console.log(r.data)
              r.data.forEach(e => {
                let year = e.fechaExpiracion.slice(0,4)
                let month = e.fechaExpiracion.slice(5,7)
                this.sumarDatos(year,month)
              })}).catch(e =>{console.log(e)
      });
      this.chartData = {
        labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets: [
          {
            label:'Cupones',
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
    },
    sumarDatos(year,month){
                if (year == this.annio && month == '01'){
                  this.loadedData[0]++
                }else if (year == this.annio && month == '02'){
                  this.loadedData[1]++
                }else if (year == this.annio && month == '03'){
                  this.loadedData[2]++
                }else if (year == this.annio && month == '04'){
                  this.loadedData[3]++
                }else if (year == this.annio && month == '05'){
                  this.loadedData[4]++
                }else if (year == this.annio && month == '06'){
                  this.loadedData[5]++
                }else if (year == this.annio && month == '07'){
                  this.loadedData[6]++
                }else if (year == this.annio && month == '08'){
                  this.loadedData[7]++
                }else if (year == this.annio && month == '09'){
                  this.loadedData[8]++
                }else if (year == this.annio && month == '10'){
                  this.loadedData[9]++
                }else if (year == this.annio && month == '11'){
                  this.loadedData[10]++
                }else if (year == this.annio){
                  this.loadedData[11]++
                }
    }
  }
}
</script>

<style scoped>
@import url(../../../../assets/reportes/css/graficos.css);

</style>


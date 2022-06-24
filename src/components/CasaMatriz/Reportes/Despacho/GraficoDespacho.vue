<template>
<div>
  <Navigator></Navigator>
    <div id="container-graph">
      <div class="titulo">
        <h1>Grafico Despacho por Estado</h1>
      </div>
      <Pie v-if="loaded" :chart-data="chartData" />
    </div>      
    <div class="container-buttons">
        <button class="exportar" v-on:click="exportar()" type="button" name="btn-sig">Exportar</button>
    </div>
</div>    
</template>

<script>
import Navigator from '../NavReportes.vue'
import { Pie } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'
import axios from 'axios'
import Exporter from '../Exporter'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: { Pie, Navigator },
  data: () => ({
    loaded: false,
    chartData : []
  }),
  async mounted () {
    this.loaded = false
    try {
        let url = "http://localhost:9000/reportes/despachos/"
        axios.get(url)
            .then(r => {
                let a = 0,b = 0,c = 0,d = 0;
                (r.data).forEach(e => {
                    if(e.estadoDespacho == 'PENDIENTE'){
                        a++
                    }else if (e.estadoDespacho == 'LISTO_PARA_DESPACHO'){
                        b++
                    }else if (e.estadoDespacho == 'EN_CAMINO'){
                        c++
                    }else {
                        d++
                    }
                });


                let array = new Array(4);
                array[0] = a;
                array[1] = b;
                array[2] = c;
                array[3] = d;
                this.chartData = {
                labels: ['PENDIENTE', 'LISTO PARA DESPACHO', 'EN CAMINO', 'ENTREGADO'],
                datasets: [
                {
                    backgroundColor: ['#DD1B16', '#00D8FF', ' #FFC300 ','#41B883'],
                    data: array
                }
                ]
                }
            }).catch(e => {console.log(e)}).finally(()=>{
                console.log("finally")
            })
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  methods:{
    exportar(){
      let pie = document.getElementById("container-graph")
      const exp = new Exporter([pie])
      exp.export_pdf().then((pdf) => pdf.save("chart.pdf"))
    }
  }
}


</script>

<style scoped>

@import url(../../../../assets/reportes/css/graficos.css);

</style>
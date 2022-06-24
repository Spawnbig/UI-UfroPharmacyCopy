<template>
<div>
  <Navigator></Navigator>
    <div id="container-graph">
      <div class="titulo">
        <h1>Grafico Tickets por Estado</h1>
      </div>
      <Pie v-if="loaded" :chart-data="chartData" />
    </div>      
    <div class="container-buttons">
        <button class="exportar" v-on:click="exportar()" type="button" name="btn-sig">Exportar</button>
    </div>
</div>    
</template>

<script>
import { Pie } from 'vue-chartjs/legacy'
import Navigator from '../NavReportes.vue'
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
  components: { Pie , Navigator},
  data: () => ({
    loaded: false,
    chartData : []
  }),
  async mounted () {
    this.loaded = false
    try {
        let url = "http://localhost:9000/reportes/tickets/"
        axios.get(url)
            .then(r => {
                let a = 0,b = 0,c = 0;
                (r.data).forEach(e => {
                    if(e.estadoPedido == 'RECHAZADA'){
                        a++
                    }else if (e.estadoPedido == 'PENDIENTE'){
                        b++
                    }else {
                        c++
                    }
                });


                let array = new Array(3);
                array[0] = a;
                array[1] = b;
                array[2] = c;
                this.chartData = {
                labels: ['RECHAZADA', 'PENDIENTE', 'APROBADA'],
                datasets: [
                {
                    backgroundColor: ['#DD1B16', ' #FFC300 ','#41B883'],
                    data: array
                }
                ]
                }
            }).catch(e => {console.log(e)})
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
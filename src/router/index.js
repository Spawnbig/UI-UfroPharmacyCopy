import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/reportes/cupon',
    name: 'cupon',
    component: () => import('../views/reportes/CuponView.vue')
  },
  {
    path: '/reportes/cupon/grafico',
    name: 'cupongrafico',
    component: () => import('../components/CasaMatriz/Reportes/GestionDescuentos/GraficoCupones.vue')
  },
  {
    path: '/reportes/descuento',
    name: 'descuento',
    component: () => import('../views/reportes/DescuentoProducto.vue')
  },
  {
    path: '/reportes/historialcompras',
    name: 'historialcompras',
    component: () => import('../views/reportes/HistorialCompras.vue')
  },
  {
    path: '/reportes/despacho',
    name: 'despachos',
    component: () => import('../views/reportes/Despacho.vue')
  },
  {
    path: '/reportes/despacho/grafico',
    name: 'graficodespacho',
    component: () => import('../components/CasaMatriz/Reportes/Despacho/GraficoDespacho.vue')
    
  },
  {
    path: '/reportes/productos',
    name: 'productos',
    component: () => import('../views/reportes/Productos.vue')
  },
  {
    path: '/reportes/reviews',
    name: 'reviews',
    component : () => import('../views/reportes/Reviews.vue')
  },
  {
    path: '/reportes/reviews/:id',
    name: 'graficoreviews',
    component: () => import('../components/CasaMatriz/Reportes/Reviews/GraficoReviews.vue')
  },
  {
    path: '/reportes/tickets/',
    name: 'tickets',
    component: () => import('../views/reportes/Tickets.vue')
  },
  {
    path: '/reportes/tickets/grafico',
    name: 'graficoticketsestado',
    component: () => import('../components/CasaMatriz/Reportes/ServicioCliente/GraficoTicketsEstado.vue')
  },
  {
    path: '/reportes/descuento/grafico',
    name: 'graficodescuentoproducto',
    component: () => import('../components/CasaMatriz/Reportes/GestionDescuentos/GraficoDescuentoProductos.vue')
  },
  {
    path: '/reportes/historialcompras/grafico',
    name: 'historialcomprasgrafico',
    component: () => import('../components/CasaMatriz/Reportes/HistorialCompras/GraficoHistorialCompras.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

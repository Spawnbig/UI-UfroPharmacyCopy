<template>
    <nav id='menu'>
    <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
    <ul>
        <li><a class='dropdown-arrow'>Gestión descuentos</a>
        <ul class='sub-menus'>
            <li><router-link to='/reportes/cupon'>Cupones</router-link></li>
            <li><router-link to='/reportes/descuento'>Descuento Productos</router-link></li>
    </ul>
        </li>
        <li><router-link to='/reportes/historialcompras'>Historial Compras</router-link></li>
        <li><router-link to='/reportes/despacho'>Despachos</router-link></li>
        <li><router-link to='/reportes/productos'>Productos</router-link></li>
        <li><router-link to='/reportes/reviews'>Reviews</router-link></li>
        <li><router-link to='/reportes/tickets/'>Tickets</router-link></li>
    </ul>
    </nav> 
</template>

<script>
</script>

<style scoped>
@import url(../../../assets/reportes/css/nav.css);

</style>
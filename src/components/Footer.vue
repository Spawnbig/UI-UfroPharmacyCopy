<template>
  <v-footer dark padless>
    <v-card flat tile class="black white--text py-12 px-5" width="100%">
      <v-row>
        <v-col cols="12" sm="4">
          <v-card-text class="white--text pt-0">
            <h3>UFRO PHARMACY</h3>
          </v-card-text>
          <v-card-text class="grey--text pt-0">
            Proyecto academico semestral<br />
           Asignatura Ingenieria de Software.
          </v-card-text>
          <v-toolbar flat color="transparent">
            <h5>Bases Legales</h5>
            <h5 class="ml-4">Politica de Privacidad</h5>
            <h5 class="ml-4">Condiciones de Uso</h5>
          </v-toolbar>
          <v-card-text class="grey--text"> &#169; 2022 </v-card-text>
        </v-col>
        <v-col cols="12" sm="2">
          <v-card-text class="white--text pt-0">
            <h3>Servicio al Cliente</h3>
          </v-card-text>
          <v-card-text class="grey--text"> Estado de Compra </v-card-text>
          <v-card-text class="grey--text mt-n4">
            Envío y entrega
          </v-card-text>
          <v-card-text class="grey--text mt-n4"> Opciones de Pago </v-card-text>
          <v-card-text class="grey--text mt-n4"> Contacto </v-card-text>
        </v-col>
        <v-col cols="12" sm="2">
          <v-card-text class="white--text pt-0">
            <h3>Acerca de Nosotros</h3>
          </v-card-text>
          <v-card-text class="grey--text"> Nosotros </v-card-text>
          <v-card-text class="grey--text mt-n4"> Ética y Cumplimiento </v-card-text>
          <v-card-text class="grey--text mt-n4"> Cuéntanos tu experiencia </v-card-text>
          <v-card-text class="grey--text mt-n4">
           Autorizado por ISP: Res. Ex. 0722 del 25.02.2021
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card-text class="pt-0">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-1 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text class="grey--text mt-14"> Metodos de pago: </v-card-text>
          <v-toolbar flat color="transparent">
            <v-spacer></v-spacer>
            <v-icon large>fab fa-cc-visa</v-icon>
            <v-icon class="mx-2" large>fab fa-cc-paypal</v-icon>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
</style>
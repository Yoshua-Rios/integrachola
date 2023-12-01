<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { VAppBarTitle, VBtn } from 'vuetify/lib/components/index.mjs';

const drawer = ref(null)
</script>



<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer" style="background-color:rgba(128, 128, 128, 0.673)">
      <!--  -->  
        <v-icon  size="100px"  > mdi-account </v-icon>        
        <div>Nombre Administrador</div>
        <li>
        <v-app-bar-title  class="button"> Clientes </v-app-bar-title>
        <v-app-bar-title class="button"><RouterLink to="/RegEmp_adm" style="color: #ffff;">Empleados</RouterLink> </v-app-bar-title> 
        <v-app-bar-title class="button"> <RouterLink to="/Proveedores" style="color:white">Proveedores</RouterLink> </v-app-bar-title>
      <v-app-bar-title class="button"> Productos </v-app-bar-title>
      <v-app-bar-title class="button"> Inventario </v-app-bar-title>
      <v-app-bar-title class="button"> Entradas </v-app-bar-title>
      <v-app-bar-title class="button"> Salidas </v-app-bar-title>
      <v-app-bar-title class="button"> Categorias </v-app-bar-title>
      <v-app-bar-title class="cerrar" > Cerrar Sesion </v-app-bar-title>
      </li>
    </v-navigation-drawer>

    <v-app-bar style="background-color: #C62828;">

      <v-app-bar-title ></v-app-bar-title>
    </v-app-bar>

    <v-main>
 <RouterView>

 </RouterView>
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;

}
.button{
  background-color: #C62828;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 255px;
  height: 80px;
  
  

}
.cerrar{
  background-color: #212121;
  color: white;
  display: flex;
  width: 255px;
  height: 50px;
  direction: row;
  justify-content: center;
  align-items: center;

}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

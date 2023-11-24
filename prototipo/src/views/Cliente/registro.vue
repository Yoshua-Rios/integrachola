
<template>
                             <h1 class="re">Registro</h1>

    <div class="login d-flex align-center justify-center" style="height: 100vh">

      <v-sheet width="800" class="mx-auto d-flex">

        <v-form class="flex-column" fast-fail @submit.prevent="login">
          <v-text-field v-model="username" label="Nombre"></v-text-field>
          <v-text-field label="Apellido Paterno"></v-text-field>
          <v-text-field label="Apellido Materno"></v-text-field>
          <v-text-field label="Calle"></v-text-field>
          <v-text-field label="Numero de casa"></v-text-field>
          <v-text-field label="Colonia"></v-text-field>
        </v-form>
        
        <div class="separator"></div>
        
        <v-form class="flex-column" fast-fail @submit.prevent="login">
          <v-text-field label="C.P (Código Postal)" v-model="postalCode"></v-text-field>
          <v-text-field label="Correo Electronico" v-model="correo"></v-text-field>
          <v-text-field label="Telefono"></v-text-field>
          <v-text-field v-model="password" label="Contraseña"></v-text-field>
          <v-text-field label="Confirmar Contrasena"></v-text-field>
          <v-btn type="submit" color="grey-darken-4" block class="mt-2">Registrarte</v-btn>  
          <div class="mt-2">
            <p class="text-body-2">Tienes Cuenta? <a href="#">Inicia Sesion</a></p>
          </div>
        </v-form>
      </v-sheet>
    </div>
  </template>
  
  <style scoped>
  .logop {
    width: 100px;
    height: 140px;
    margin: auto;
    display: flex;
}
  
  .separator {
    width: 20px; 
  }
  
  .d-flex {
    display: flex;
  }
  
  .flex-column {
    flex: 1; 
    flex-direction: column;
  }
  .re{
    text-align: center;
  }

  </style>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const password = ref('');
  const postalCode = ref('');
  
  const login = () => {
    // Lógica para el inicio de sesión
  };
  </script>
  
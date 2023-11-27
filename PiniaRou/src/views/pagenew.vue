<script>
import { RouterView,RouterLink } from 'vue-router';
</script>
<template>
  <div class="about">
    <h1 class="h1">Bienvenido a mi pagina </h1> </div>
    <div class="h2"><RouterLink to="/" style="color: blueviolet;" > SubPagina de prueba</RouterLink>
    </div>
      <div><RouterView> </RouterView>
    </div>
</template>

<style>
@media (min-width: 1000px) {
  .about {
    min-height: 10vh;
  display: grid;
  
  align-items: start;
    justify-content: center;
    


  }
  .h1{
    color: red;
    background-color: black;
    display: flex;

    align-items: center;
    justify-content: center;
    
  }
  .h2{

display: flex;
flex-direction: row;
justify-content:end;  
align-items: center;  
  }
}
</style>

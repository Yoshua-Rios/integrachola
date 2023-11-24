<template>
    <v-carousel cycle="4000">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
      >
      
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} 
          </div>
        </div>
      
      </v-carousel-item>
    </v-carousel>
  </template>
  <script setup>
    const items = [
      {
        src: 'https://images.pexels.com/photos/5327559/pexels-photo-5327559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      {
        src: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/2b0618a6-95cc-42f8-94c8-f6e0aca7263a.__CR0,0,4042,2500_PT0_SX970_V1___.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ]
  </script>
  <script>
    export default {
      data () {
        return {
          colors: [
          ],
          slides: [
        ]
        }
      },
    }
  </script>
<template>
    <v-container>
      <v-card>
        <v-card-title>Seleccionar Método de pago</v-card-title>
        <v-card-text>
          <v-radio-group v-model="metodoDePago">
            <v-combobox
              label="Otras"
              :items="['Efectivo', 'Tarjeta']"
              variant="outlined"
            ></v-combobox>
          </v-radio-group>
          <v-text-field  label="Número de Tarjeta"></v-text-field>
          <v-text-field  label="Fecha de Vencimiento (MM/YY)"></v-text-field>
          <v-text-field label="CVV"></v-text-field>
          <v-checkbox label="Guardar Tarjeta"></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error">Cancelar</v-btn>
          <v-btn color="primary">Confirmar Compra</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  <script setup>
  import { ref } from 'vue';
  const metodoDePago = ref('');
    </script>
  